import "reflect-metadata";
import {container} from "tsyringe";
import FileProductRepository from "@/Infrastructure/FileProductRepository";

/*
 Because of the dependency inversion, Typescript compilation does not "visit" the FileProductRepository and
 thereby we need to still make the container aware of having to register the interface token to the implementation
 token.
 */
container.register("ProductRepository", {
  useClass: FileProductRepository
});
