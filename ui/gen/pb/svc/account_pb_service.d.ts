// package: pb.svc
// file: pb/svc/account.proto

import * as pb_svc_account_pb from "../../pb/svc/account_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccountCreateAccount = {
  readonly methodName: string;
  readonly service: typeof Account;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_account_pb.CreateAccountReq;
  readonly responseType: typeof pb_svc_account_pb.CreateAccountRes;
};

type AccountDeleteAccount = {
  readonly methodName: string;
  readonly service: typeof Account;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_account_pb.DeleteAccountReq;
  readonly responseType: typeof pb_svc_account_pb.DeleteAccountRes;
};

type AccountGetAccount = {
  readonly methodName: string;
  readonly service: typeof Account;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_account_pb.GetAccountReq;
  readonly responseType: typeof pb_svc_account_pb.GetAccountRes;
};

export class Account {
  static readonly serviceName: string;
  static readonly CreateAccount: AccountCreateAccount;
  static readonly DeleteAccount: AccountDeleteAccount;
  static readonly GetAccount: AccountGetAccount;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AccountClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createAccount(
    requestMessage: pb_svc_account_pb.CreateAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.CreateAccountRes|null) => void
  ): UnaryResponse;
  createAccount(
    requestMessage: pb_svc_account_pb.CreateAccountReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.CreateAccountRes|null) => void
  ): UnaryResponse;
  deleteAccount(
    requestMessage: pb_svc_account_pb.DeleteAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.DeleteAccountRes|null) => void
  ): UnaryResponse;
  deleteAccount(
    requestMessage: pb_svc_account_pb.DeleteAccountReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.DeleteAccountRes|null) => void
  ): UnaryResponse;
  getAccount(
    requestMessage: pb_svc_account_pb.GetAccountReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.GetAccountRes|null) => void
  ): UnaryResponse;
  getAccount(
    requestMessage: pb_svc_account_pb.GetAccountReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_account_pb.GetAccountRes|null) => void
  ): UnaryResponse;
}

