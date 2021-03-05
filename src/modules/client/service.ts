import { getCustomRepository } from 'typeorm';
import Client from '../../models/client';
import ErrorBuilder from '../../errors/errorBuilder';
import ClientDTO from './interface';
import ClientsRepository from './repository';
// import ProductsRepository from '../product/repository';

export default class ClientsService {
  public async create(data: ClientDTO): Promise<Client | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const result = clientsRepository.create(data);

    await clientsRepository.save(result);

    return result;
  }

  public async getAll(): Promise<Client | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const result = await clientsRepository.find();

    return result;
  }

  public async getById(id: string): Promise<Client | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    // const productsRepository = getCustomRepository(ProductsRepository);
    const result = await clientsRepository
      .createQueryBuilder('clients')
      .leftJoinAndSelect('clients.favoriteProducts', 'favoriteProducts.clientId')
      .where(id)
      .getMany();

    if (!result) {
      throw new ErrorBuilder('This Client does not exist', 404);
    }

    return result;
  }

  public async update(id: string, data: ClientDTO): Promise<Client | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const result = clientsRepository.update(id, data);

    return result;
  }

  public async delete(id: string): Promise<Client | {}> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const verifyId = await clientsRepository.findOne(id);

    if (!verifyId) {
      throw new ErrorBuilder('This Client does not exist', 404);
    }

    const result = await clientsRepository.delete(id);

    return result;
  }
}
