import { getCustomRepository } from 'typeorm';
import ErrorBuilder from '../../errors/errorBuilder';
import Product from '../../models/product';
import ProductDTO from './interface';
import ProductsRepository from './repository';

export default class ProductsService {
  public async create(data: ProductDTO): Promise<Product | {}> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const result = productsRepository.create(data);

    return result;
  }

  public async getAll(): Promise<Product | {}> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const result = await productsRepository.find();

    return result;
  }

  public async update(id: string, data: ProductDTO): Promise<Product | {}> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const result = await productsRepository.update(id, data);

    return result;
  }

  public delete(id: string): Product | {} {
    const productsRepository = getCustomRepository(ProductsRepository);

    const verifyId = productsRepository.findOne(id);

    if (!verifyId) {
      throw new ErrorBuilder('This Client does not exist', 404);
    }

    const result = productsRepository.delete(id);

    return result;
  }
}
