import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPostsImage: build.query<
      IMAGEGETS.GetResponceImage,
      IMAGEGETS.GetRequestImage
    >({
      query: () => ({
        url: "/image/",
        method: "GET",
      }),
      providesTags: ["image"],
    }),
    getPostsImagePost: build.mutation<
      IMAGEGETS.GetResponceImage,
      IMAGEGETS.GetRequestImage
    >({
      query: () => ({
        url: "/image/",
        method: "POST",
      }),
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useGetPostsImageQuery, useGetPostsImagePostMutation } = api;
