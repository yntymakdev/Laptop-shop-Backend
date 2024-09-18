namespace POSTS {
  type GetPostResponce = {
    id: number;
    brand: string;
    model: string;
    processor: string;
    ram_size: number;
    storage_size: number;
    price: string;
    description: string;
  }[];
  type GetPostsResponce = void;

  type GetPostRequest = {
    id: number;
    brand: string;
    model: string;
    processor: string;
    ram_size: number;
    storage_size: number;
    price: string;
    description: string;
  };

  type GetPostsRequest = void;
}
