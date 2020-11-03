import * as Knex from 'knex';
import * as argon2 from 'argon2';
import * as uuid from 'uuid';

const passwordHashingOpts = { type: argon2.argon2id, memoryCost: 2 ** 16, hashLength: 50 };

export async function seed(knex: Knex): Promise<void> {
  // delete ALL existing entries
  await knex('user').del();

  // insert seed entries
  await knex('user').insert([
    {
      id: uuid.v4(),
      user_name: 'srigi@brno',
      password: await argon2.hash('secret', passwordHashingOpts),
      roles: JSON.stringify(['admin']),
    },
  ]);
}
