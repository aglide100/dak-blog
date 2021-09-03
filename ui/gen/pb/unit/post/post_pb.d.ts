import * as jspb from 'google-protobuf'

import * as pb_unit_comment_comment_pb from '../../../pb/unit/comment/comment_pb';


export class Post extends jspb.Message {
  getId(): ID | undefined;
  setId(value?: ID): Post;
  hasId(): boolean;
  clearId(): Post;

  getSpec(): Spec | undefined;
  setSpec(value?: Spec): Post;
  hasSpec(): boolean;
  clearSpec(): Post;

  getCommets(): Comments | undefined;
  setCommets(value?: Comments): Post;
  hasCommets(): boolean;
  clearCommets(): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id?: ID.AsObject,
    spec?: Spec.AsObject,
    commets?: Comments.AsObject,
  }
}

export class ID extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ID.AsObject;
  static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
  static serializeBinaryToWriter(message: ID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ID;
  static deserializeBinaryFromReader(message: ID, reader: jspb.BinaryReader): ID;
}

export namespace ID {
  export type AsObject = {
    uuid: string,
  }
}

export class Spec extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Spec;

  getAuthor(): string;
  setAuthor(value: string): Spec;

  getWrittenDate(): string;
  setWrittenDate(value: string): Spec;

  getContent(): string;
  setContent(value: string): Spec;

  getThumbnail(): string;
  setThumbnail(value: string): Spec;

  getPictureurlsList(): Array<string>;
  setPictureurlsList(value: Array<string>): Spec;
  clearPictureurlsList(): Spec;
  addPictureurls(value: string, index?: number): Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    title: string,
    author: string,
    writtenDate: string,
    content: string,
    thumbnail: string,
    pictureurlsList: Array<string>,
  }
}

export class Comments extends jspb.Message {
  getCommentList(): Array<pb_unit_comment_comment_pb.Comment>;
  setCommentList(value: Array<pb_unit_comment_comment_pb.Comment>): Comments;
  clearCommentList(): Comments;
  addComment(value?: pb_unit_comment_comment_pb.Comment, index?: number): pb_unit_comment_comment_pb.Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comments.AsObject;
  static toObject(includeInstance: boolean, msg: Comments): Comments.AsObject;
  static serializeBinaryToWriter(message: Comments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comments;
  static deserializeBinaryFromReader(message: Comments, reader: jspb.BinaryReader): Comments;
}

export namespace Comments {
  export type AsObject = {
    commentList: Array<pb_unit_comment_comment_pb.Comment.AsObject>,
  }
}

