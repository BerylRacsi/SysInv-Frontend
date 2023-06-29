import { apiSlice } from './apiSlice';
const ITEMS_URL = '/api/items';

export const itemApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => ({
                url: `${ITEMS_URL}`,
                method: 'GET',
            }),
        }),
    })
})

export const {
    useGetItemsQuery,
  } = itemApiSlice;