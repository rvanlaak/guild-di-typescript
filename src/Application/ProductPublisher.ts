import {inject, singleton} from "tsyringe";
import {ProductRepository} from "@/Domain/ProductRepository";

@singleton()
export default class ProductPublisher {

  constructor(@inject("ProductRepository") private readonly repository: ProductRepository) {
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