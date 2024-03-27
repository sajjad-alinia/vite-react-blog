export type TPost = {
  id: string;
  title: string;
  content: string;
  image: string;
  expand: {
    category: TCategory[];
  };
};

export type TCategory = {
  id: string;
  title: string;
  description: string;
};
