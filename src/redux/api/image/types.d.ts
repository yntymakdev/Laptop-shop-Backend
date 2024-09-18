namespace IMAGEGETS {
  type GetResponceImage = {
    id: number;
    image: string;
    description: string;
    laptop: number;
  }[];
  // type GetResponceImage = void;
  type GetRequestImage = {
    id: number | string;
    image: string;
    description: string;
    laptop: number;
  };

  // type GetRequestImage = void;
}
