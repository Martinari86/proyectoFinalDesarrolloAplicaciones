import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../databases/realTimeDataBase';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `tipo.json`,
    }),
    
    getProductsByCategory: builder.query({
        query: () => `pokemon.json`,
        transformResponse: (response, meta, category) => {
          const responseTransformed = Object.values(response);
          const filteredProducts = responseTransformed.filter(product => 
            product.tipo && product.tipo.some(tipo => tipo === category)
          );
          return filteredProducts;
        },
      }),


    getProductById: builder.query({
      query: (productId) => `pokemon.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) => {
        const responseTransformed = Object.values(response);
            if(responseTransformed.length) return responseTransformed[0]
            return null
            },
        }),
    
    postOrder: builder.mutation({
            query: ({...order}) => ({
              url: 'orders.json',
              method: 'POST',
              body: order
            })
          }),

    updateStock: builder.mutation({
            query: ({...order}) => ({
              url: 'products.json',
              method: 'PATCH',
              body: order
            })
          }), 

    getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["profileImageGet"],
          }),
         
    postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
              url: `profileImages/${localId}.json`,
              method: "PUT",
              body: {
                image: image,
              },
            }),
            invalidatesTags: ["profileImageGet"],
          }),      
  
    }),
});

export const {useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery, usePostOrderMutation, useUpdateStockMutation,  useGetProfileImageQuery, usePostProfileImageMutation, } = shopApi