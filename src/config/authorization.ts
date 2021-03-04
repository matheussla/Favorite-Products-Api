import process from 'process';

export default {
  jwt: {
    secret: process.env.TOKEN_SECRET,
    expiresIn: process.env.TOKEN_EXPIRE,
  },
};
