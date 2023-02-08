import {container} from "tsyringe";
import PublishProductCommand from "@/Presentation/Cli/PublishProductCommand";
import ProductController from "@/Presentation/Rest/ProductController";

test('Test whether the command publishes the product', () => {
    const instance = container.resolve(PublishProductCommand);
    const productId = '98723798'

    expect(instance.execute(productId)).toBe("Product was published");
});

test('Test whether the controller publishes the product', () => {
    const instance = container.resolve(ProductController);
    const productId = '98723798'

    expect(instance.publish(productId)).toBe("Product was published");
});
