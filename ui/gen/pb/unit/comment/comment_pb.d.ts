import * as jspb from 'google-protobuf'



export class Comment extends jspb.Message {
  getId(): ID | undefined;
  setId(value?: ID): Comment;
  hasId(): boolean;
  clearId(): Comment;

  getSpec(): Spec | undefined;
  setSpec(value?: Spec): Comment;
  hasSpec(): boolean;
  clearSpec(): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id?: ID.AsObject,
    spec?: Spec.AsObject,
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
  getAuthor(): string;
  setAuthor(value: string): Spec;

  getWrittenDate(): string;
  setWrittenDate(value: string): Spec;

  getComment(): string;
  setComment(value: string): Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    author: string,
    writtenDate: string,
    comment: string,
  }
}

