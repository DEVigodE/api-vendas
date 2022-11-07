import { DataSource } from 'typeorm/data-source/DataSource';

import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CreateProducts1663298844116 } from './migrations/1663298844116-CreateProducts';
import { CreateUsers1663446225427 } from './migrations/1663446225427-CreateUsers';
import { CreateUserTokens1663617793820 } from './migrations/1663617793820-CreateUserTokens';
import { CreateCustomers1663724853701 } from './migrations/1663724853701-CreateCustomers';
import { CreateOrdersProducts1663800050416 } from './migrations/1663800050416-CreateOrdersProducts';
import { AddCustomerIdToOrders1663800106359 } from './migrations/1663800106359-AddCustomerIdToOrders';
import { CreateOrdersProducts1663800144725 } from './migrations/1663800144725-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1663800183176 } from './migrations/1663800183176-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1663800209081 } from './migrations/1663800209081-AddProductIdToOrdersProducts';

//import { AddOrderFieldtoOrders1619889809717 } from './migrations/1619889809717-AddOrderFieldtoOrders';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1663298844116,
    CreateUserTokens1663617793820,
    CreateUsers1663446225427,
    CreateCustomers1663724853701,
    CreateOrdersProducts1663800050416,
    AddCustomerIdToOrders1663800106359,
    CreateOrdersProducts1663800144725,
    AddOrderIdToOrdersProducts1663800183176,
    AddProductIdToOrdersProducts1663800209081,
    //AddOrderFieldtoOrders1619889809717,
  ],
});
