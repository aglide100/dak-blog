// package: pb.unit.post
// file: pb/unit/post/post.proto

import * as jspb from "google-protobuf";
import * as pb_unit_comment_comment_pb from "../../../pb/unit/comment/comment_pb";

export class Post extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ID | undefined;
  setId(value?: ID): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): Spec | undefined;
  setSpec(value?: Spec): void;

  hasCommets(): boolean;
  clearCommets(): void;
  getCommets(): Comments | undefined;
  setCommets(value?: Comments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ID.AsObject;
  static toObject(includeInstance: boolean, msg: ID): ID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getWrittenDate(): string;
  setWrittenDate(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getThumbnail(): string;
  setThumbnail(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  clearPictureurlsList(): void;
  getPictureurlsList(): Array<string>;
  setPictureurlsList(value: Array<string>): void;
  addPictureurls(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    category: string,
    url: string,
    pictureurlsList: Array<string>,
  }
}

export class Comments extends jspb.Message {
  clearCommentList(): void;
  getCommentList(): Array<pb_unit_comment_comment_pb.Comment>;
  setCommentList(value: Array<pb_unit_comment_comment_pb.Comment>): void;
  addComment(value?: pb_unit_comment_comment_pb.Comment, index?: number): pb_unit_comment_comment_pb.Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comments.AsObject;
  static toObject(includeInstance: boolean, msg: Comments): Comments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Comments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comments;
  static deserializeBinaryFromReader(message: Comments, reader: jspb.BinaryReader): Comments;
}

export namespace Comments {
  export type AsObject = {
    commentList: Array<pb_unit_comment_comment_pb.Comment.AsObject>,
  }
}

