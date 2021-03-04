import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import AuthDTO from './interface';
import ClientsRepository from '../client/repository';
import authConfig from '../../config/authorization';
import ErrorBuilder from '../../errors/errorBuilder';

const generateToken = (client) => {
  const { jwt } = authConfig;
  const token = sign({}, jwt.secret, {
    subject: client.id,
    expiresIn: jwt.expiresIn,
  });
  return token;
};

export default class AuthorizationService {
  public async createAuth({ name, email }: AuthDTO): Promise<String | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = clientsRepository.findOne({ where: { name, email } });

    if (!client) {
      throw new ErrorBuilder('Could not find client', 404);
    }

    const authToken = generateToken(client);

    return authToken;
  }
}