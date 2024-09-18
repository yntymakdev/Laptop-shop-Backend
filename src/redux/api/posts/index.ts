import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<POSTS.GetPostResponce, POSTS.GetPostsRequest>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    getPostsLaptop: build.mutation<
      POSTS.GetPostResponce,
      POSTS.GetPostsRequest
    >({
      query: () => ({
        url: "/",
        method: "POST",
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsLaptopMutation } = api;
