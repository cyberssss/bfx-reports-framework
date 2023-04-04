'use strict'

const TYPES = require('bfx-report/workers/loc.api/di/types')

module.exports = {
  ...TYPES,
  TABLES_NAMES: Symbol.for('TABLES_NAMES'),
  ALLOWED_COLLS: Symbol.for('ALLOWED_COLLS'),
  SYNC_API_METHODS: Symbol.for('SYNC_API_METHODS'),
  SYNC_QUEUE_STATES: Symbol.for('SYNC_QUEUE_STATES'),
  CHECKER_NAMES: Symbol.for('CHECKER_NAMES'),
  FrameworkRServiceDepsSchema: Symbol.for('FrameworkRServiceDepsSchema'),
  GRC_BFX_OPTS: Symbol.for('GRC_BFX_OPTS'),
  ApiMiddlewareHandlerAfter: Symbol.for('ApiMiddlewareHandlerAfter'),
  ApiMiddleware: Symbol.for('ApiMiddleware'),
  DataChecker: Symbol.for('DataChecker'),
  DataInserter: Symbol.for('DataInserter'),
  DataInserterFactory: Symbol.for('DataInserterFactory'),
  WSTransport: Symbol.for('WSTransport'),
  WSEventEmitter: Symbol.for('WSEventEmitter'),
  WSEventEmitterFactory: Symbol.for('WSEventEmitterFactory'),
  RedirectRequestsToApi: Symbol.for('RedirectRequestsToApi'),
  SyncSchema: Symbol.for('SyncSchema'),
  Sync: Symbol.for('Sync'),
  SyncFactory: Symbol.for('SyncFactory'),
  SyncQueue: Symbol.for('SyncQueue'),
  Progress: Symbol.for('Progress'),
  DB: Symbol.for('DB'),
  DAO: Symbol.for('DAO'),
  BetterSqliteDAO: Symbol.for('BetterSqliteDAO'),
  PublicСollsСonfAccessors: Symbol.for('PublicСollsСonfAccessors'),
  SearchClosePriceAndSumAmount: Symbol.for('SearchClosePriceAndSumAmount'),
  Wallets: Symbol.for('Wallets'),
  BalanceHistory: Symbol.for('BalanceHistory'),
  WinLoss: Symbol.for('WinLoss'),
  PositionsSnapshot: Symbol.for('PositionsSnapshot'),
  FullSnapshotReport: Symbol.for('FullSnapshotReport'),
  CurrencyConverter: Symbol.for('CurrencyConverter'),
  FullSnapshotReportCsvWriter: Symbol.for('FullSnapshotReportCsvWriter'),
  FullTaxReport: Symbol.for('FullTaxReport'),
  FullTaxReportCsvWriter: Symbol.for('FullTaxReportCsvWriter'),
  MigrationsFactory: Symbol.for('MigrationsFactory'),
  DbMigratorFactory: Symbol.for('DbMigratorFactory'),
  SqliteDbMigrator: Symbol.for('SqliteDbMigrator'),
  Trades: Symbol.for('Trades'),
  TradedVolume: Symbol.for('TradedVolume'),
  PerformingLoan: Symbol.for('PerformingLoan'),
  SubAccount: Symbol.for('SubAccount'),
  ConvertCurrencyHook: Symbol.for('ConvertCurrencyHook'),
  RecalcSubAccountLedgersBalancesHook: Symbol.for('RecalcSubAccountLedgersBalancesHook'),
  SubAccountApiData: Symbol.for('SubAccountApiData'),
  PositionsAudit: Symbol.for('PositionsAudit'),
  OrderTrades: Symbol.for('OrderTrades'),
  Crypto: Symbol.for('Crypto'),
  Authenticator: Symbol.for('Authenticator'),
  PrivResponder: Symbol.for('PrivResponder'),
  SyncInterrupter: Symbol.for('SyncInterrupter'),
  SyncCollsManager: Symbol.for('SyncCollsManager'),
  Checkers: Symbol.for('Checkers'),
  DataConsistencyChecker: Symbol.for('DataConsistencyChecker'),
  Movements: Symbol.for('Movements'),
  WinLossVSAccountBalance: Symbol.for('WinLossVSAccountBalance'),
  DBBackupManager: Symbol.for('DBBackupManager'),
  ProcessMessageManager: Symbol.for('ProcessMessageManager'),
  ProcessMessageManagerFactory: Symbol.for('ProcessMessageManagerFactory'),
  TotalFeesReport: Symbol.for('TotalFeesReport'),
  SyncTempTablesManager: Symbol.for('SyncTempTablesManager'),
  SyncUserStepManager: Symbol.for('SyncUserStepManager'),
  SyncUserStepData: Symbol.for('SyncUserStepData'),
  SyncUserStepDataFactory: Symbol.for('SyncUserStepDataFactory'),
  HTTPRequest: Symbol.for('HTTPRequest')
}
