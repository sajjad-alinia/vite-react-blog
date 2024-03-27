export type TPost = {
  id: string;
  title: string;
  content: string;
  image: string;
  created: Date;
  expand: {
    category: TCategory[];
    author: TAuthor;
  };
};

export type TCategory = {
  id: string;
  title: string;
  description: string;
};

export type TAuthor = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  created: Date;
};
