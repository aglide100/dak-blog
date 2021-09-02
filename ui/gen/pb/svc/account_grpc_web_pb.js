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


var pb_unit_account_account_pb = require('../../pb/unit/account/account_pb.js')
const proto = {};
proto.pb = {};
proto.pb.svc = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.svc.AccountClient =
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
proto.pb.svc.AccountPromiseClient =
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
 *   !proto.pb.svc.CreateAccountReq,
 *   !proto.pb.svc.CreateAccountRes>}
 */
const methodDescriptor_Account_CreateAccount = new grpc.web.MethodDescriptor(
  '/pb.svc.Account/CreateAccount',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.CreateAccountReq,
  proto.pb.svc.CreateAccountRes,
  /**
   * @param {!proto.pb.svc.CreateAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreateAccountRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.CreateAccountReq,
 *   !proto.pb.svc.CreateAccountRes>}
 */
const methodInfo_Account_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.CreateAccountRes,
  /**
   * @param {!proto.pb.svc.CreateAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.CreateAccountRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.CreateAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.CreateAccountRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.CreateAccountRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.AccountClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Account/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_Account_CreateAccount,
      callback);
};


/**
 * @param {!proto.pb.svc.CreateAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.CreateAccountRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.AccountPromiseClient.prototype.createAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Account/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_Account_CreateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.DeleteAccountReq,
 *   !proto.pb.svc.DeleteAccountRes>}
 */
const methodDescriptor_Account_DeleteAccount = new grpc.web.MethodDescriptor(
  '/pb.svc.Account/DeleteAccount',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.DeleteAccountReq,
  proto.pb.svc.DeleteAccountRes,
  /**
   * @param {!proto.pb.svc.DeleteAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.DeleteAccountRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.DeleteAccountReq,
 *   !proto.pb.svc.DeleteAccountRes>}
 */
const methodInfo_Account_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.DeleteAccountRes,
  /**
   * @param {!proto.pb.svc.DeleteAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.DeleteAccountRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.DeleteAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.DeleteAccountRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.DeleteAccountRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.AccountClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Account/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteAccount,
      callback);
};


/**
 * @param {!proto.pb.svc.DeleteAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.DeleteAccountRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.AccountPromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Account/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_Account_DeleteAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.svc.GetAccountReq,
 *   !proto.pb.svc.GetAccountRes>}
 */
const methodDescriptor_Account_GetAccount = new grpc.web.MethodDescriptor(
  '/pb.svc.Account/GetAccount',
  grpc.web.MethodType.UNARY,
  proto.pb.svc.GetAccountReq,
  proto.pb.svc.GetAccountRes,
  /**
   * @param {!proto.pb.svc.GetAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.GetAccountRes.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.svc.GetAccountReq,
 *   !proto.pb.svc.GetAccountRes>}
 */
const methodInfo_Account_GetAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.svc.GetAccountRes,
  /**
   * @param {!proto.pb.svc.GetAccountReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.svc.GetAccountRes.deserializeBinary
);


/**
 * @param {!proto.pb.svc.GetAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.svc.GetAccountRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.svc.GetAccountRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.svc.AccountClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.svc.Account/GetAccount',
      request,
      metadata || {},
      methodDescriptor_Account_GetAccount,
      callback);
};


/**
 * @param {!proto.pb.svc.GetAccountReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.svc.GetAccountRes>}
 *     Promise that resolves to the response
 */
proto.pb.svc.AccountPromiseClient.prototype.getAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.svc.Account/GetAccount',
      request,
      metadata || {},
      methodDescriptor_Account_GetAccount);
};


module.exports = proto.pb.svc;

