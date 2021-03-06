import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

import { ALGORITHM } from '../../../src/lib/jwt';
import getApiHandler from '../../../src/lib/getApiHandler';

export interface Payload {
  username: string;
  password: string;
}

export interface SuccessResponse {
  authToken: string;
}

const AUTHENTICATION_TOKEN_VALID_PERIOD = '2 days';
const JWT_PRIVATE_KEY = process.env.NEXT_PUBLIC_JWT_PRIVATE_KEY!;

export default getApiHandler().post<NextApiRequest, NextApiResponse>(
  async (req, res): Promise<void> => {
    const { username, password } = req.body as Payload;

    if (username == null || username === '') {
      res.status(422).json({ violations: { username: 'Missing username' } });
      return;
    }
    if (password == null || password === '') {
      res.status(422).json({ violations: { password: 'Missing password' } });
      return;
    }

    const jwt = sign({ roles: ['member'] }, Buffer.from(JWT_PRIVATE_KEY, 'base64').toString(), {
      algorithm: ALGORITHM,
      expiresIn: AUTHENTICATION_TOKEN_VALID_PERIOD,
      subject: username,
    });

    res.status(200).json({ authToken: jwt });
  },
);
