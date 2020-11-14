import Knex from 'knex';

import knexConfig, { CLIENT_SQLITE3 } from '../../knexfile';

// eslint-disable-next-line no-underscore-dangle
let _connection: Knex;

export const getDbConnection = async (): Promise<Knex> => {
  if (_connection == null) {
    _connection = Knex(knexConfig);
  }

  if (knexConfig.client === CLIENT_SQLITE3) {
    await _connection.raw('PRAGMA journal_mode = WAL');
    await _connection.raw('PRAGMA foreign_keys = ON');
  }

  return _connection;
};
