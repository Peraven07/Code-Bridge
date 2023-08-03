
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
itemID: faker.finance.account(),
productId: faker.finance.account(),
orderid: faker.finance.account(),
Itemquantity: faker.datatype.number(10),
subTotal: faker.datatype.float(),

        };
        data = [...data, fake];
    }
    return data;
};
