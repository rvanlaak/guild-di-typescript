import {container} from "tsyringe";
import PublishProductCommand from "./../../src/Presentation/Cli/PublishProductCommand";

test('Test whether the the command publishes the product', () => {
    const instance = container.resolve(PublishProductCommand);
    const productId = '98723798'

    expect(instance.execute(productId)).toBe("Product was published");
});
