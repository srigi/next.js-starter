import Knex from 'knex';

import knexConfig from '../../knexfile';

let _connection: Knex | null; // eslint-disable-line no-underscore-dangle

export const getDbConnection = (): Knex => {
  if (_connection == null) {
    _connection = Knex(knexConfig);
  }

  return _connection;
};
