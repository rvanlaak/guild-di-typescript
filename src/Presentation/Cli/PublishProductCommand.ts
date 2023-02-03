import ProductPublisher from "../../Application/ProductPublisher";
import {singleton} from "tsyringe";

@singleton()
export default class PublishProductCommand {
  constructor(private readonly productPublisher: ProductPublisher) {
  }

  execute(input: any)
  {
    const result = this.productPublisher.publishProduct(input.productId)

    return result ? 'Product was published' : 'Product was not published';
  }
}