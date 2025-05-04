export interface Tag {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: Tag[];
  author?: string;
  date?: string;
}
