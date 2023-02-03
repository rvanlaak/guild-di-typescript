import Product from "./Product";

export default class WasAlreadyPublished implements Error {
  message: string;
  name: string;

  constructor(product: Product) {
    this.message = 'Product ' + product.id + ' was already published.'
  }
}