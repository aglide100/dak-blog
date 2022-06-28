// package: pb.svc
// file: pb/svc/post.proto

import * as pb_svc_post_pb from "../../pb/svc/post_pb";
import * as pb_unit_postHeader_postHeader_pb from "../../pb/unit/postHeader/postHeader_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PostCreatePost = {
  readonly methodName: string;
  readonly service: typeof Post;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_post_pb.CreatePostReq;
  readonly responseType: typeof pb_svc_post_pb.CreatePostRes;
};

type PostDeletePost = {
  readonly methodName: string;
  readonly service: typeof Post;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_post_pb.DeletePostReq;
  readonly responseType: typeof pb_svc_post_pb.DeletePostRes;
};

type PostGetPost = {
  readonly methodName: string;
  readonly service: typeof Post;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_post_pb.GetPostReq;
  readonly responseType: typeof pb_svc_post_pb.GetPostRes;
};

type PostUpdatePost = {
  readonly methodName: string;
  readonly service: typeof Post;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof pb_svc_post_pb.UpdatePostReq;
  readonly responseType: typeof pb_svc_post_pb.UpdatePostRes;
};

type PostQueryPostsHeader = {
  readonly methodName: string;
  readonly service: typeof Post;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof pb_svc_post_pb.QueryPostsHeaderReq;
  readonly responseType: typeof pb_unit_postHeader_postHeader_pb.PostHeader;
};

export class Post {
  static readonly serviceName: string;
  static readonly CreatePost: PostCreatePost;
  static readonly DeletePost: PostDeletePost;
  static readonly GetPost: PostGetPost;
  static readonly UpdatePost: PostUpdatePost;
  static readonly QueryPostsHeader: PostQueryPostsHeader;
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

export class PostClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createPost(
    requestMessage: pb_svc_post_pb.CreatePostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.CreatePostRes|null) => void
  ): UnaryResponse;
  createPost(
    requestMessage: pb_svc_post_pb.CreatePostReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.CreatePostRes|null) => void
  ): UnaryResponse;
  deletePost(
    requestMessage: pb_svc_post_pb.DeletePostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.DeletePostRes|null) => void
  ): UnaryResponse;
  deletePost(
    requestMessage: pb_svc_post_pb.DeletePostReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.DeletePostRes|null) => void
  ): UnaryResponse;
  getPost(
    requestMessage: pb_svc_post_pb.GetPostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.GetPostRes|null) => void
  ): UnaryResponse;
  getPost(
    requestMessage: pb_svc_post_pb.GetPostReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.GetPostRes|null) => void
  ): UnaryResponse;
  updatePost(
    requestMessage: pb_svc_post_pb.UpdatePostReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.UpdatePostRes|null) => void
  ): UnaryResponse;
  updatePost(
    requestMessage: pb_svc_post_pb.UpdatePostReq,
    callback: (error: ServiceError|null, responseMessage: pb_svc_post_pb.UpdatePostRes|null) => void
  ): UnaryResponse;
  queryPostsHeader(requestMessage: pb_svc_post_pb.QueryPostsHeaderReq, metadata?: grpc.Metadata): ResponseStream<pb_unit_postHeader_postHeader_pb.PostHeader>;
}

