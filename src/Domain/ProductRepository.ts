import Product from "@/Domain/Product";

/**
 * Contract with the product that currently focuses on both the read and write model.
 */
export interface ProductRepository {
  get(id: string): Product;

  save(product: Product): void
}
