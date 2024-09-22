"use client";
import { useGetPostsImagePostMutation } from "@/redux/api/image";
import React, { useState } from "react";

const CreateLaptop = () => {
  const [createPost, { isLoading, isError, isSuccess }] =
    useGetPostsImagePostMutation();
  const [formData, setFormData] = useState({
    id: "",
    brand: "",
    model: "",
    description: "",
    price: "",
    processor: "",
    ram_size: "",
    storage_size: "",
    image: null as File | null,
    laptop: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      console.error("No image file selected.");
      return;
    }
    if (!formData.laptop) {
      console.error("Laptop field is required.");
      return;
    }

    const fd = new FormData();
    fd.append("id", formData.id);
    fd.append("brand", formData.brand);
    fd.append("model", formData.model);
    fd.append("description", formData.description);
    fd.append("price", formData.price);
    fd.append("processor", formData.processor);
    fd.append("ram_size", formData.ram_size);
    fd.append("storage_size", formData.storage_size);
    fd.append("laptop", formData.laptop);

    if (formData.image) {
      fd.append("image", formData.image);
    }

    try {
      await createPost(fd).unwrap();
      console.log("Post created successfully");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="brand"
        placeholder="Brand"
        onChange={handleChange}
        value={formData.brand}
        required
      />
      <input
        name="model"
        placeholder="Model"
        onChange={handleChange}
        value={formData.model}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        onChange={handleChange}
        value={formData.price}
        required
      />
      <input
        name="processor"
        placeholder="Processor"
        onChange={handleChange}
        value={formData.processor}
        required
      />
      <input
        name="ram_size"
        type="number"
        placeholder="RAM Size"
        onChange={handleChange}
        value={formData.ram_size}
        required
      />
      <input
        name="storage_size"
        type="number"
        placeholder="Storage Size"
        onChange={handleChange}
        value={formData.storage_size}
        required
      />
      <input name="image" type="file" onChange={handleFileChange} required />
      <input
        name="laptop"
        type="number"
        placeholder="Laptop ID"
        onChange={handleChange}
        value={formData.laptop}
        required
      />
      <button type="submit" disabled={isLoading}>
        Create Post
      </button>
      {isError && <p>Error creating post</p>}
      {isSuccess && <p>Post created successfully!</p>}
    </form>
  );
};

export default CreateLaptop;
