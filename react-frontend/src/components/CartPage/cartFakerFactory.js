
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
cartID: faker.finance.account(),
CustomerId: faker.finance.account(),
itemID: faker.finance.account(),
total: faker.datatype.float(),

        };
        data = [...data, fake];
    }
    return data;
};
