import ProductPublisher from "../../Application/ProductPublisher";

export default class ProductController {
  constructor(private readonly productPublisher: ProductPublisher) {
  }

  public publish(productId: string)
  {
    const result = this.productPublisher.publishProduct(productId)

    return result ? 'Product was published' : 'Product was not published';
  }
}