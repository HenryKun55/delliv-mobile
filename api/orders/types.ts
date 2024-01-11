import { Order } from '../models';

export type FetchOrderRequest = {
  id: string;
};

export type FetchOrderResponse = {
  order: Order;
};

export type ListOrdersResponse = {
  orders: Order[];
};
