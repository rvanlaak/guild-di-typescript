import {ProductRepository} from "../Domain/ProductRepository";
import WasAlreadyPublished from "../Domain/WasAlreadyPublished";

export default class ProductPublisher {

  constructor(private readonly repository: ProductRepository) {
  }

  publishProduct(id: string): boolean
  {
    const product = this.repository.get(id)

    try {
      product.publish()
      this.repository.save(product)
      return true
    } catch (exception) {
      return false
    }
  }
}