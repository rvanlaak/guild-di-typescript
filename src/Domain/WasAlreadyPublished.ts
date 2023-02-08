import Product from "@/Domain/Product";

export default class WasAlreadyPublished implements Error {
  message: string;
  readonly name: string = WasAlreadyPublished.prototype.name;

  constructor(product: Product) {
    this.message = 'Product ' + product.id + ' was already published.'
  }
}