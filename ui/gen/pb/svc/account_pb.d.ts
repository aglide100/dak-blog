// package: pb.svc
// file: pb/svc/account.proto

import * as jspb from "google-protobuf";
import * as pb_unit_account_account_pb from "../../pb/unit/account/account_pb";

export class CreateAccountReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_account_account_pb.Account | undefined;
  setId(value?: pb_unit_account_account_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountReq): CreateAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountReq;
  static deserializeBinaryFromReader(message: CreateAccountReq, reader: jspb.BinaryReader): CreateAccountReq;
}

export namespace CreateAccountReq {
  export type AsObject = {
    id?: pb_unit_account_account_pb.Account.AsObject,
  }
}

export class CreateAccountRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRes): CreateAccountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRes;
  static deserializeBinaryFromReader(message: CreateAccountRes, reader: jspb.BinaryReader): CreateAccountRes;
}

export namespace CreateAccountRes {
  export type AsObject = {
  }
}

export class DeleteAccountReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_account_account_pb.Account | undefined;
  setId(value?: pb_unit_account_account_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountReq): DeleteAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountReq;
  static deserializeBinaryFromReader(message: DeleteAccountReq, reader: jspb.BinaryReader): DeleteAccountReq;
}

export namespace DeleteAccountReq {
  export type AsObject = {
    id?: pb_unit_account_account_pb.Account.AsObject,
  }
}

export class DeleteAccountRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRes): DeleteAccountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRes;
  static deserializeBinaryFromReader(message: DeleteAccountRes, reader: jspb.BinaryReader): DeleteAccountRes;
}

export namespace DeleteAccountRes {
  export type AsObject = {
  }
}

export class GetAccountReq extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): pb_unit_account_account_pb.Account | undefined;
  setId(value?: pb_unit_account_account_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountReq): GetAccountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountReq;
  static deserializeBinaryFromReader(message: GetAccountReq, reader: jspb.BinaryReader): GetAccountReq;
}

export namespace GetAccountReq {
  export type AsObject = {
    id?: pb_unit_account_account_pb.Account.AsObject,
  }
}

export class GetAccountRes extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): pb_unit_account_account_pb.Account | undefined;
  setAccount(value?: pb_unit_account_account_pb.Account): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRes): GetAccountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRes;
  static deserializeBinaryFromReader(message: GetAccountRes, reader: jspb.BinaryReader): GetAccountRes;
}

export namespace GetAccountRes {
  export type AsObject = {
    account?: pb_unit_account_account_pb.Account.AsObject,
  }
}

