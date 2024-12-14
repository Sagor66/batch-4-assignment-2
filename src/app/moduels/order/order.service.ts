import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  return await await Order.create(orderData);
};

const getTotalRevenueFromDB = async () => {
  return await await Order.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } },
    },
  ]);
};

export const OrderServices = {
  createOrderIntoDB,
  getTotalRevenueFromDB,
};
