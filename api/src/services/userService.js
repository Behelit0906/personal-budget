import userDao from '../database/userDao.js';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { formatter } from '../helpers/nameFormat.js';

const createNewUser = async newUser => {
  const match = await userDao.findUserByEmail(newUser.email);
  if (match.length > 0) {
    const error = new Error('Email already registered');
    error.name = 'exists';
    throw error;
  }

  const data = [formatter(newUser.name), newUser.email, await bcrypt.hash(newUser.password, 10)];
  await userDao.createNewUser(data);
};

const userAuthenticator = async (email, password) => {
  const user = await userDao.findUserByEmail(email);
  if (user.length !== 1) return false;

  const passwordIsOk = await bcrypt.compare(password, user[0].password);
  if (!passwordIsOk) return false;

  // TOKEN GENERATION
  const jwtConstructor = new SignJWT({ userId: user[0].id });
  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

  return { name: user[0].name, jwt };
};

export default { createNewUser, userAuthenticator };
