'use strict'

const DbMigrator = require('./db.migrator')
const {
  MigrationLaunchingError
} = require('../../../errors')

const { decorateInjectable } = require('../../../di/utils')

const depsTypes = (TYPES) => [
  TYPES.MigrationsFactory,
  TYPES.TABLES_NAMES,
  TYPES.SyncSchema,
  TYPES.Logger,
  TYPES.DBBackupManager
]
class SqliteDbMigrator extends DbMigrator {
  /**
   * @override
   */
  async migrateFromCurrToSupportedVer () {
    try {
      await super.migrateFromCurrToSupportedVer()
    } catch (err) {
      if (!(err instanceof MigrationLaunchingError)) {
        throw err
      }

      const isDone = await this.dbBackupManager.restoreDb()

      if (isDone) {
        return
      }

      // TODO: Need to collect whole process messaging to single module
      process.on('message', async (mess) => {
        try {
          const { state } = { ...mess }

          if (state !== 'migration:remove-all-tables') {
            return
          }

          await this.removeAllTables()
          this.logger.debug('[All tables have been removed]')

          process.send({ state: 'migration:all-tables-have-been-removed' })
        } catch (err) {
          this.logger.error(err)

          process.send({ state: 'migration:all-tables-have-not-been-removed' })
        }
      })

      process.send({ state: 'migration:should-all-tables-be-removed' })
    }
  }

  async removeAllTables () {
    await this.dao.disableForeignKeys()

    try {
      await this.dao.dropAllTables()
      await this.dao.setCurrDbVer(0)
    } catch (err) {
      await this.dao.enableForeignKeys()

      throw err
    }

    await this.dao.enableForeignKeys()
  }
}

decorateInjectable(SqliteDbMigrator, depsTypes)

module.exports = SqliteDbMigrator
