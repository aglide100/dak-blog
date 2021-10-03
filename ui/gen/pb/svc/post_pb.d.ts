// package: pb.svc
// file: pb/svc/post.proto

import * as jspb from "google-protobuf";
import * as pb_unit_post_post_pb from "../../pb/unit/post/post_pb";

export class CreatePostReq extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostReq): CreatePostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostReq;
  static deserializeBinaryFromReader(message: CreatePostReq, reader: jspb.BinaryReader): CreatePostReq;
}

export namespace CreatePostReq {
  export type AsObject = {
    post?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class CreatePostRes extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRes): CreatePostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRes;
  static deserializeBinaryFromReader(message: CreatePostRes, reader: jspb.BinaryReader): CreatePostRes;
}

export namespace CreatePostRes {
  export type AsObject = {
    post?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class DeletePostReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_post_post_pb.Post | undefined;
  setId(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostReq): DeletePostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostReq;
  static deserializeBinaryFromReader(message: DeletePostReq, reader: jspb.BinaryReader): DeletePostReq;
}

export namespace DeletePostReq {
  export type AsObject = {
    id?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class DeletePostRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRes): DeletePostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRes;
  static deserializeBinaryFromReader(message: DeletePostRes, reader: jspb.BinaryReader): DeletePostRes;
}

export namespace DeletePostRes {
  export type AsObject = {
  }
}

export class GetPostReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_post_post_pb.Post | undefined;
  setId(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostReq): GetPostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostReq;
  static deserializeBinaryFromReader(message: GetPostReq, reader: jspb.BinaryReader): GetPostReq;
}

export namespace GetPostReq {
  export type AsObject = {
    id?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class GetPostRes extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRes): GetPostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRes;
  static deserializeBinaryFromReader(message: GetPostRes, reader: jspb.BinaryReader): GetPostRes;
}

export namespace GetPostRes {
  export type AsObject = {
    post?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class GetCommentReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_post_post_pb.Post | undefined;
  setId(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommentReq): GetCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommentReq;
  static deserializeBinaryFromReader(message: GetCommentReq, reader: jspb.BinaryReader): GetCommentReq;
}

export namespace GetCommentReq {
  export type AsObject = {
    id?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class GetCommentRes extends jspb.Message {
  hasComments(): boolean;
  clearComments(): void;
  getComments(): pb_unit_post_post_pb.Post | undefined;
  setComments(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommentRes): GetCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommentRes;
  static deserializeBinaryFromReader(message: GetCommentRes, reader: jspb.BinaryReader): GetCommentRes;
}

export namespace GetCommentRes {
  export type AsObject = {
    comments?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class UpdatePostReq extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostReq): UpdatePostReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostReq;
  static deserializeBinaryFromReader(message: UpdatePostReq, reader: jspb.BinaryReader): UpdatePostReq;
}

export namespace UpdatePostReq {
  export type AsObject = {
    post?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class UpdatePostRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostRes): UpdatePostRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdatePostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostRes;
  static deserializeBinaryFromReader(message: UpdatePostRes, reader: jspb.BinaryReader): UpdatePostRes;
}

export namespace UpdatePostRes {
  export type AsObject = {
  }
}

