import * as grpcWeb from 'grpc-web';

import * as pb_svc_account_pb from '../../pb/svc/account_pb';


export class AccountClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAccount(
    request: pb_svc_account_pb.CreateAccountReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_account_pb.CreateAccountRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_account_pb.CreateAccountRes>;

  deleteAccount(
    request: pb_svc_account_pb.DeleteAccountReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_account_pb.DeleteAccountRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_account_pb.DeleteAccountRes>;

  getAccount(
    request: pb_svc_account_pb.GetAccountReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_account_pb.GetAccountRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_account_pb.GetAccountRes>;

}

export class AccountPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createAccount(
    request: pb_svc_account_pb.CreateAccountReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_account_pb.CreateAccountRes>;

  deleteAccount(
    request: pb_svc_account_pb.DeleteAccountReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_account_pb.DeleteAccountRes>;

  getAccount(
    request: pb_svc_account_pb.GetAccountReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_account_pb.GetAccountRes>;

}

