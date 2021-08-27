// package: pb.svc
// file: pb/svc/comment.proto

var pb_svc_comment_pb = require("../../pb/svc/comment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Comment = (function () {
  function Comment() {}
  Comment.serviceName = "pb.svc.Comment";
  return Comment;
}());

exports.Comment = Comment;

function CommentClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

exports.CommentClient = CommentClient;

