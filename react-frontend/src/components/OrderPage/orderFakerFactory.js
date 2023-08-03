
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
orderid: faker.finance.account(),
cartID: faker.finance.account(),

        };
        data = [...data, fake];
    }
    return data;
};
