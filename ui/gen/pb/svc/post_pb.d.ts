import * as jspb from 'google-protobuf'

import * as pb_unit_post_post_pb from '../../pb/unit/post/post_pb';


export class CreatePostReq extends jspb.Message {
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): CreatePostReq;
  hasPost(): boolean;
  clearPost(): CreatePostReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostReq): CreatePostReq.AsObject;
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
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): CreatePostRes;
  hasPost(): boolean;
  clearPost(): CreatePostRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRes): CreatePostRes.AsObject;
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
  getId(): pb_unit_post_post_pb.Post | undefined;
  setId(value?: pb_unit_post_post_pb.Post): DeletePostReq;
  hasId(): boolean;
  clearId(): DeletePostReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostReq): DeletePostReq.AsObject;
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
  static serializeBinaryToWriter(message: DeletePostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRes;
  static deserializeBinaryFromReader(message: DeletePostRes, reader: jspb.BinaryReader): DeletePostRes;
}

export namespace DeletePostRes {
  export type AsObject = {
  }
}

export class GetPostReq extends jspb.Message {
  getId(): pb_unit_post_post_pb.Post | undefined;
  setId(value?: pb_unit_post_post_pb.Post): GetPostReq;
  hasId(): boolean;
  clearId(): GetPostReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostReq): GetPostReq.AsObject;
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
  getPost(): pb_unit_post_post_pb.Post | undefined;
  setPost(value?: pb_unit_post_post_pb.Post): GetPostRes;
  hasPost(): boolean;
  clearPost(): GetPostRes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostRes): GetPostRes.AsObject;
  static serializeBinaryToWriter(message: GetPostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostRes;
  static deserializeBinaryFromReader(message: GetPostRes, reader: jspb.BinaryReader): GetPostRes;
}

export namespace GetPostRes {
  export type AsObject = {
    post?: pb_unit_post_post_pb.Post.AsObject,
  }
}

export class CreateCommentReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentReq): CreateCommentReq.AsObject;
  static serializeBinaryToWriter(message: CreateCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentReq;
  static deserializeBinaryFromReader(message: CreateCommentReq, reader: jspb.BinaryReader): CreateCommentReq;
}

export namespace CreateCommentReq {
  export type AsObject = {
  }
}

export class CreateCommentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRes): CreateCommentRes.AsObject;
  static serializeBinaryToWriter(message: CreateCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRes;
  static deserializeBinaryFromReader(message: CreateCommentRes, reader: jspb.BinaryReader): CreateCommentRes;
}

export namespace CreateCommentRes {
  export type AsObject = {
  }
}

export class UpdatePostReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostReq.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostReq): UpdatePostReq.AsObject;
  static serializeBinaryToWriter(message: UpdatePostReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostReq;
  static deserializeBinaryFromReader(message: UpdatePostReq, reader: jspb.BinaryReader): UpdatePostReq;
}

export namespace UpdatePostReq {
  export type AsObject = {
  }
}

export class UpdatePostRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostRes.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostRes): UpdatePostRes.AsObject;
  static serializeBinaryToWriter(message: UpdatePostRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostRes;
  static deserializeBinaryFromReader(message: UpdatePostRes, reader: jspb.BinaryReader): UpdatePostRes;
}

export namespace UpdatePostRes {
  export type AsObject = {
  }
}

