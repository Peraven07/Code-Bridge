
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
productName: faker.commerce.productName(),
productId: faker.finance.account(),
productPrice: faker.datatype.number(),
productType: faker.commerce.productMaterial(),
productStock: true,

        };
        data = [...data, fake];
    }
    return data;
};
