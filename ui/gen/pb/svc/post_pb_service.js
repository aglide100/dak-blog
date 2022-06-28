// package: pb.svc
// file: pb/svc/post.proto

var pb_svc_post_pb = require("../../pb/svc/post_pb");
var pb_unit_postHeader_postHeader_pb = require("../../pb/unit/postHeader/postHeader_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Post = (function () {
  function Post() {}
  Post.serviceName = "pb.svc.Post";
  return Post;
}());

Post.CreatePost = {
  methodName: "CreatePost",
  service: Post,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_post_pb.CreatePostReq,
  responseType: pb_svc_post_pb.CreatePostRes
};

Post.DeletePost = {
  methodName: "DeletePost",
  service: Post,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_post_pb.DeletePostReq,
  responseType: pb_svc_post_pb.DeletePostRes
};

Post.GetPost = {
  methodName: "GetPost",
  service: Post,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_post_pb.GetPostReq,
  responseType: pb_svc_post_pb.GetPostRes
};

Post.UpdatePost = {
  methodName: "UpdatePost",
  service: Post,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_post_pb.UpdatePostReq,
  responseType: pb_svc_post_pb.UpdatePostRes
};

Post.QueryPostsHeader = {
  methodName: "QueryPostsHeader",
  service: Post,
  requestStream: false,
  responseStream: true,
  requestType: pb_svc_post_pb.QueryPostsHeaderReq,
  responseType: pb_unit_postHeader_postHeader_pb.PostHeader
};

exports.Post = Post;

function PostClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PostClient.prototype.createPost = function createPost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Post.CreatePost, {
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

PostClient.prototype.deletePost = function deletePost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Post.DeletePost, {
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

PostClient.prototype.getPost = function getPost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Post.GetPost, {
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

PostClient.prototype.updatePost = function updatePost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Post.UpdatePost, {
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

PostClient.prototype.queryPostsHeader = function queryPostsHeader(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Post.QueryPostsHeader, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.PostClient = PostClient;

