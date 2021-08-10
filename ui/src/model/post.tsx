export class Post {}

export namespace Post {
  export type AsObject = {
    title: string;
    id: string;
    author: string;
    content: string;
    pictures: string[];
    comments: string[];
  };
}
