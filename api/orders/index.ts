import api from '..';
import { FetchOrderRequest, FetchOrderResponse, ListOrdersResponse } from './types';

const endpoints = {
  listOrders: () => 'orders',
  fetchOrder: (id: string) => `orders/${id}`,
};

const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    listOrders: builder.query<ListOrdersResponse, void>({
      query: () => ({
        url: endpoints.listOrders(),
      }),
      providesTags: ['Orders'],
    }),
    fetchOrder: builder.query<FetchOrderResponse, FetchOrderRequest>({
      query: ({ id }) => endpoints.fetchOrder(id),
      providesTags: [{ type: 'Orders', id: 'Id' }],
    }),
  }),
  overrideExisting: false,
});

export const { useFetchOrderQuery, useListOrdersQuery } = ordersApi;

export default ordersApi;
