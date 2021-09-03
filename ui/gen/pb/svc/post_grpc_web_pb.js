/**
 * @fileoverview gRPC-Web generated client stub for pb.svc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var pb_unit_post_post_pb = require('../../pb/unit/post/post_pb.js')
const proto = {};
proto.pb = {};
proto.pb.svc = require('./post_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.PostClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.PostPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.CreatePostReq,
 *   !proto.pb.svc.CreatePostRes>}
 */
const methodDescriptor_Post_CreatePost = new grpc.web.MethodDescriptor(
  '/pb.svc.Post/CreatePost',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.CreatePostReq,
  proto.pb.svc.CreatePostRes,
  /**
   * @param {!proto.pb.svc.CreatePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreatePostRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.CreatePostReq,
 *   !proto.pb.svc.CreatePostRes>}
 */
const methodInfo_Post_CreatePost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.CreatePostRes,
  /**
   * @param {!proto.pb.svc.CreatePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreatePostRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.CreatePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.CreatePostRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.CreatePostRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.PostClient.prototype.createPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Post/CreatePost',
      request,
      metadata || {},
      methodDescriptor_Post_CreatePost,
      callback);
};


/**
 * @param {!proto.pb.svc.CreatePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.CreatePostRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.PostPromiseClient.prototype.createPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Post/CreatePost',
      request,
      metadata || {},
      methodDescriptor_Post_CreatePost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.DeletePostReq,
 *   !proto.pb.svc.DeletePostRes>}
 */
const methodDescriptor_Post_DeletePost = new grpc.web.MethodDescriptor(
  '/pb.svc.Post/DeletePost',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.DeletePostReq,
  proto.pb.svc.DeletePostRes,
  /**
   * @param {!proto.pb.svc.DeletePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.DeletePostRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.DeletePostReq,
 *   !proto.pb.svc.DeletePostRes>}
 */
const methodInfo_Post_DeletePost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.DeletePostRes,
  /**
   * @param {!proto.pb.svc.DeletePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.DeletePostRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.DeletePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.DeletePostRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.DeletePostRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.PostClient.prototype.deletePost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Post/DeletePost',
      request,
      metadata || {},
      methodDescriptor_Post_DeletePost,
      callback);
};


/**
 * @param {!proto.pb.svc.DeletePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.DeletePostRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.PostPromiseClient.prototype.deletePost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Post/DeletePost',
      request,
      metadata || {},
      methodDescriptor_Post_DeletePost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.GetPostReq,
 *   !proto.pb.svc.GetPostRes>}
 */
const methodDescriptor_Post_GetPost = new grpc.web.MethodDescriptor(
  '/pb.svc.Post/GetPost',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.GetPostReq,
  proto.pb.svc.GetPostRes,
  /**
   * @param {!proto.pb.svc.GetPostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.GetPostRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.GetPostReq,
 *   !proto.pb.svc.GetPostRes>}
 */
const methodInfo_Post_GetPost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.GetPostRes,
  /**
   * @param {!proto.pb.svc.GetPostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.GetPostRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.GetPostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.GetPostRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.GetPostRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.PostClient.prototype.getPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Post/GetPost',
      request,
      metadata || {},
      methodDescriptor_Post_GetPost,
      callback);
};


/**
 * @param {!proto.pb.svc.GetPostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.GetPostRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.PostPromiseClient.prototype.getPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Post/GetPost',
      request,
      metadata || {},
      methodDescriptor_Post_GetPost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.CreateCommentReq,
 *   !proto.pb.svc.CreateCommentRes>}
 */
const methodDescriptor_Post_CreateComment = new grpc.web.MethodDescriptor(
  '/pb.svc.Post/CreateComment',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.CreateCommentReq,
  proto.pb.svc.CreateCommentRes,
  /**
   * @param {!proto.pb.svc.CreateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreateCommentRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.CreateCommentReq,
 *   !proto.pb.svc.CreateCommentRes>}
 */
const methodInfo_Post_CreateComment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.CreateCommentRes,
  /**
   * @param {!proto.pb.svc.CreateCommentReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreateCommentRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.CreateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.CreateCommentRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.CreateCommentRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.PostClient.prototype.createComment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Post/CreateComment',
      request,
      metadata || {},
      methodDescriptor_Post_CreateComment,
      callback);
};


/**
 * @param {!proto.pb.svc.CreateCommentReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.CreateCommentRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.PostPromiseClient.prototype.createComment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Post/CreateComment',
      request,
      metadata || {},
      methodDescriptor_Post_CreateComment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.UpdatePostReq,
 *   !proto.pb.svc.UpdatePostRes>}
 */
const methodDescriptor_Post_UpdatePost = new grpc.web.MethodDescriptor(
  '/pb.svc.Post/UpdatePost',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.UpdatePostReq,
  proto.pb.svc.UpdatePostRes,
  /**
   * @param {!proto.pb.svc.UpdatePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.UpdatePostRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.UpdatePostReq,
 *   !proto.pb.svc.UpdatePostRes>}
 */
const methodInfo_Post_UpdatePost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.UpdatePostRes,
  /**
   * @param {!proto.pb.svc.UpdatePostReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.UpdatePostRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.UpdatePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.UpdatePostRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.UpdatePostRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.PostClient.prototype.updatePost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Post/UpdatePost',
      request,
      metadata || {},
      methodDescriptor_Post_UpdatePost,
      callback);
};


/**
 * @param {!proto.pb.svc.UpdatePostReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.UpdatePostRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.PostPromiseClient.prototype.updatePost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Post/UpdatePost',
      request,
      metadata || {},
      methodDescriptor_Post_UpdatePost);
};


module.exports = proto.pb.svc;

