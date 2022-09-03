import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const UserAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    addContact: build.mutation<null, null>({
      query: (contact) => ({
        url: `contacts`,
        method: "POST",
        body: contact,
      }),
    }),
  }),
});
