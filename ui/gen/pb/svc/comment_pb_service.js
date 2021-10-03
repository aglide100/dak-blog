// package: pb.svc
// file: pb/svc/comment.proto

var pb_svc_comment_pb = require("../../pb/svc/comment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Comment = (function () {
  function Comment() {}
  Comment.serviceName = "pb.svc.Comment";
  return Comment;
}());

Comment.CreateComment = {
  methodName: "CreateComment",
  service: Comment,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_comment_pb.CreateCommentReq,
  responseType: pb_svc_comment_pb.CreateCommentRes
};

Comment.DeleteComment = {
  methodName: "DeleteComment",
  service: Comment,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_comment_pb.DeleteCommentReq,
  responseType: pb_svc_comment_pb.DeleteCommentRes
};

exports.Comment = Comment;

function CommentClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CommentClient.prototype.createComment = function createComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Comment.CreateComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CommentClient.prototype.deleteComment = function deleteComment(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Comment.DeleteComment, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CommentClient = CommentClient;

