import WasAlreadyPublished from "./WasAlreadyPublished";

export default class Product {

  constructor(
    public readonly id: string,
    public readonly name: string,
    private publishDate: Date | null = null
    ) {
  }

  public isPublished(): boolean
  {
    return this.publishDate !== null
  }

  public publish(): void
  {
    if (this.publishDate !== null) {
      throw new WasAlreadyPublished(this);
    }
    this.publishDate = new Date();
  }
}