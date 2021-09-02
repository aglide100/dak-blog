import * as grpcWeb from 'grpc-web';

import * as pb_svc_post_pb from '../../pb/svc/post_pb';


export class PostClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPost(
    request: pb_svc_post_pb.CreatePostReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_post_pb.CreatePostRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_post_pb.CreatePostRes>;

  deletePost(
    request: pb_svc_post_pb.DeletePostReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_post_pb.DeletePostRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_post_pb.DeletePostRes>;

  getPost(
    request: pb_svc_post_pb.GetPostReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_post_pb.GetPostRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_post_pb.GetPostRes>;

  createComment(
    request: pb_svc_post_pb.CreateCommentReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_post_pb.CreateCommentRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_post_pb.CreateCommentRes>;

  updatePost(
    request: pb_svc_post_pb.UpdatePostReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: pb_svc_post_pb.UpdatePostRes) => void
  ): grpcWeb.ClientReadableStream<pb_svc_post_pb.UpdatePostRes>;

}

export class PostPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPost(
    request: pb_svc_post_pb.CreatePostReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_post_pb.CreatePostRes>;

  deletePost(
    request: pb_svc_post_pb.DeletePostReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_post_pb.DeletePostRes>;

  getPost(
    request: pb_svc_post_pb.GetPostReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_post_pb.GetPostRes>;

  createComment(
    request: pb_svc_post_pb.CreateCommentReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_post_pb.CreateCommentRes>;

  updatePost(
    request: pb_svc_post_pb.UpdatePostReq,
    metadata?: grpcWeb.Metadata
  ): Promise<pb_svc_post_pb.UpdatePostRes>;

}

