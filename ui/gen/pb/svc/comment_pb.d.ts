// package: pb.svc
// file: pb/svc/comment.proto

import * as jspb from "google-protobuf";
import * as pb_unit_comment_comment_pb from "../../pb/unit/comment/comment_pb";

export class CreateCommentReq extends jspb.Message {
  hasComment(): boolean;
  clearComment(): void;
  getComment(): pb_unit_comment_comment_pb.Comment | undefined;
  setComment(value?: pb_unit_comment_comment_pb.Comment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentReq): CreateCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentReq;
  static deserializeBinaryFromReader(message: CreateCommentReq, reader: jspb.BinaryReader): CreateCommentReq;
}

export namespace CreateCommentReq {
  export type AsObject = {
    comment?: pb_unit_comment_comment_pb.Comment.AsObject,
  }
}

export class CreateCommentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRes): CreateCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRes;
  static deserializeBinaryFromReader(message: CreateCommentRes, reader: jspb.BinaryReader): CreateCommentRes;
}

export namespace CreateCommentRes {
  export type AsObject = {
  }
}

export class DeleteCommentReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_comment_comment_pb.Comment | undefined;
  setId(value?: pb_unit_comment_comment_pb.Comment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentReq): DeleteCommentReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCommentReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentReq;
  static deserializeBinaryFromReader(message: DeleteCommentReq, reader: jspb.BinaryReader): DeleteCommentReq;
}

export namespace DeleteCommentReq {
  export type AsObject = {
    id?: pb_unit_comment_comment_pb.Comment.AsObject,
  }
}

export class DeleteCommentRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentRes): DeleteCommentRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCommentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentRes;
  static deserializeBinaryFromReader(message: DeleteCommentRes, reader: jspb.BinaryReader): DeleteCommentRes;
}

export namespace DeleteCommentRes {
  export type AsObject = {
  }
}

