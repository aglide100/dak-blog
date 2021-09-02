import * as jspb from 'google-protobuf'



export class Account extends jspb.Message {
  getId(): ID | undefined;
  setId(value?: ID): Account;
  hasId(): boolean;
  clearId(): Account;

  getSpec(): Spec | undefined;
  setSpec(value?: Spec): Account;
  hasSpec(): boolean;
  clearSpec(): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
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
  getAccountName(): string;
  setAccountName(value: string): Spec;

  getEmail(): string;
  setEmail(value: string): Spec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spec.AsObject;
  static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
  static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spec;
  static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
}

export namespace Spec {
  export type AsObject = {
    accountName: string,
    email: string,
  }
}

