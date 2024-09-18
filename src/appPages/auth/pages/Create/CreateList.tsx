"use client";

import { useGetPostsImageQuery } from "@/redux/api/image";
import { useGetPostsQuery } from "@/redux/api/posts";
import React from "react";
import CreateLaptop from "../CreateLaptop";

const CreateList = () => {
  const {
    data: postsData,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();
  const {
    data: imagesData,
    error: imagesError,
    isLoading: imagesLoading,
  } = useGetPostsImageQuery({
    id: 1,
    description: "",
    image: "  ", // поле image обязательно
    laptop: 101, //
  });

  console.log(postsData, imagesData);

  if (postsLoading || imagesLoading) return <div>Loading...</div>;
  if (postsError || imagesError)
    return <div>Error loading posts or images</div>;

  return (
    <div>
      <h1>Product List</h1>
      <br />
      <div>
        {postsData?.map((product) => (
          <div key={product.id}>
            <h2>
              {product.brand} - {product.model}
            </h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Processor: {product.processor}</p>
            <p>RAM Size: {product.ram_size} GB</p>
            <p>Storage Size: {product.storage_size} GB</p>
          </div>
        ))}
      </div>
      <br />
      <h1>Images List</h1>
      <div>
        {imagesData?.map((image) => (
          <div key={image.id}>
            <img src={image.image} alt={image.description} width="200" />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
      <CreateLaptop />
    </div>
  );
};

export default CreateList;
