// package: pb.svc
// file: pb/svc/account.proto

var pb_svc_account_pb = require("../../pb/svc/account_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Account = (function () {
  function Account() {}
  Account.serviceName = "pb.svc.Account";
  return Account;
}());

Account.CreateAccount = {
  methodName: "CreateAccount",
  service: Account,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_account_pb.CreateAccountReq,
  responseType: pb_svc_account_pb.CreateAccountRes
};

Account.DeleteAccount = {
  methodName: "DeleteAccount",
  service: Account,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_account_pb.DeleteAccountReq,
  responseType: pb_svc_account_pb.DeleteAccountRes
};

Account.GetAccount = {
  methodName: "GetAccount",
  service: Account,
  requestStream: false,
  responseStream: false,
  requestType: pb_svc_account_pb.GetAccountReq,
  responseType: pb_svc_account_pb.GetAccountRes
};

exports.Account = Account;

function AccountClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccountClient.prototype.createAccount = function createAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Account.CreateAccount, {
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

AccountClient.prototype.deleteAccount = function deleteAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Account.DeleteAccount, {
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

AccountClient.prototype.getAccount = function getAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Account.GetAccount, {
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

exports.AccountClient = AccountClient;

