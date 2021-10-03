// package: pb.svc
// file: pb/svc/comment.proto

import * as pb_svc_comment_pb from "../../pb/svc/comment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CommentCreateComment = {
  readonly methodName: string;
  readonly service: typeof Comment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_comment_pb.CreateCommentReq;
  readonly responseType: typeof pb_svc_comment_pb.CreateCommentRes;
};

type CommentDeleteComment = {
  readonly methodName: string;
  readonly service: typeof Comment;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_comment_pb.DeleteCommentReq;
  readonly responseType: typeof pb_svc_comment_pb.DeleteCommentRes;
};

export class Comment {
  static readonly serviceName: string;
  static readonly CreateComment: CommentCreateComment;
  static readonly DeleteComment: CommentDeleteComment;
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

export class CommentClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createComment(
    requestMessage: pb_svc_comment_pb.CreateCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_comment_pb.CreateCommentRes|null) => void
  ): UnaryResponse;
  createComment(
    requestMessage: pb_svc_comment_pb.CreateCommentReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_comment_pb.CreateCommentRes|null) => void
  ): UnaryResponse;
  deleteComment(
    requestMessage: pb_svc_comment_pb.DeleteCommentReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_comment_pb.DeleteCommentRes|null) => void
  ): UnaryResponse;
  deleteComment(
    requestMessage: pb_svc_comment_pb.DeleteCommentReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_comment_pb.DeleteCommentRes|null) => void
  ): UnaryResponse;
}

