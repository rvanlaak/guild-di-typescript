import {ProductRepository} from "../Domain/ProductRepository";
import Product from "../Domain/Product";

/**
 * This is a repository implementation that reads the product from file.
 *
 * Another implementation could read the product from a database.
 */
export default class FileProductRepository implements ProductRepository {
  get(id: string): Product {
    return new Product(id, 'Blue Sneakers');
  }

  save(product: Product): void {
    // TODO implementation
  }
}
