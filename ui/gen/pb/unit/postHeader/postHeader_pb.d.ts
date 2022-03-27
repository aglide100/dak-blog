// package: pb.unit.postHeader
// file: pb/unit/postHeader/postHeader.proto

import * as jspb from "google-protobuf";

export class PostHeader extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): ID | undefined;
  setId(value?: ID): void;

  hasSpec(): boolean;
  clearSpec(): void;
  getSpec(): Spec | undefined;
  setSpec(value?: Spec): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostHeader.AsObject;
  static toObject(includeInstance: boolean, msg: PostHeader): PostHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostHeader;
  static deserializeBinaryFromReader(message: PostHeader, reader: jspb.BinaryReader): PostHeader;
}

export namespace PostHeader {
  export type AsObject = {
    id?: ID.AsObject,
    spec?: Spec.AsObject,
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

  getCategory(): string;
  setCategory(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

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
    category: string,
    url: string,
  }
}

