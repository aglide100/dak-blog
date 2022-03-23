/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var pb_unit_comment_comment_pb = require('../../../pb/unit/comment/comment_pb.js');
goog.exportSymbol('proto.pb.unit.post.Comments', null, global);
goog.exportSymbol('proto.pb.unit.post.ID', null, global);
goog.exportSymbol('proto.pb.unit.post.Post', null, global);
goog.exportSymbol('proto.pb.unit.post.Spec', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.post.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.unit.post.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.unit.post.Post.displayName = 'proto.pb.unit.post.Post';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.post.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.post.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.post.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.pb.unit.post.ID.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.pb.unit.post.Spec.toObject(includeInstance, f),
    commets: (f = msg.getCommets()) && proto.pb.unit.post.Comments.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.post.Post}
 */
proto.pb.unit.post.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.post.Post;
  return proto.pb.unit.post.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.post.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.post.Post}
 */
proto.pb.unit.post.Post.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.unit.post.ID;
      reader.readMessage(value,proto.pb.unit.post.ID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.pb.unit.post.Spec;
      reader.readMessage(value,proto.pb.unit.post.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.pb.unit.post.Comments;
      reader.readMessage(value,proto.pb.unit.post.Comments.deserializeBinaryFromReader);
      msg.setCommets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.post.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.post.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.post.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.unit.post.ID.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pb.unit.post.Spec.serializeBinaryToWriter
    );
  }
  f = message.getCommets();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pb.unit.post.Comments.serializeBinaryToWriter
    );
  }
};


/**
 * optional ID id = 1;
 * @return {?proto.pb.unit.post.ID}
 */
proto.pb.unit.post.Post.prototype.getId = function() {
  return /** @type{?proto.pb.unit.post.ID} */ (
    jspb.Message.getWrapperField(this, proto.pb.unit.post.ID, 1));
};


/** @param {?proto.pb.unit.post.ID|undefined} value */
proto.pb.unit.post.Post.prototype.setId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.pb.unit.post.Post.prototype.clearId = function() {
  this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.unit.post.Post.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Spec spec = 2;
 * @return {?proto.pb.unit.post.Spec}
 */
proto.pb.unit.post.Post.prototype.getSpec = function() {
  return /** @type{?proto.pb.unit.post.Spec} */ (
    jspb.Message.getWrapperField(this, proto.pb.unit.post.Spec, 2));
};


/** @param {?proto.pb.unit.post.Spec|undefined} value */
proto.pb.unit.post.Post.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.pb.unit.post.Post.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.unit.post.Post.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Comments commets = 3;
 * @return {?proto.pb.unit.post.Comments}
 */
proto.pb.unit.post.Post.prototype.getCommets = function() {
  return /** @type{?proto.pb.unit.post.Comments} */ (
    jspb.Message.getWrapperField(this, proto.pb.unit.post.Comments, 3));
};


/** @param {?proto.pb.unit.post.Comments|undefined} value */
proto.pb.unit.post.Post.prototype.setCommets = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.pb.unit.post.Post.prototype.clearCommets = function() {
  this.setCommets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pb.unit.post.Post.prototype.hasCommets = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.post.ID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.unit.post.ID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.unit.post.ID.displayName = 'proto.pb.unit.post.ID';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.post.ID.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.post.ID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.post.ID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.ID.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.post.ID}
 */
proto.pb.unit.post.ID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.post.ID;
  return proto.pb.unit.post.ID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.post.ID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.post.ID}
 */
proto.pb.unit.post.ID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.post.ID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.post.ID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.post.ID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.ID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.pb.unit.post.ID.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pb.unit.post.ID.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.post.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.unit.post.Spec.repeatedFields_, null);
};
goog.inherits(proto.pb.unit.post.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.unit.post.Spec.displayName = 'proto.pb.unit.post.Spec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.unit.post.Spec.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.post.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.post.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.post.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    author: jspb.Message.getFieldWithDefault(msg, 2, ""),
    writtenDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    thumbnail: jspb.Message.getFieldWithDefault(msg, 5, ""),
    category: jspb.Message.getFieldWithDefault(msg, 6, ""),
    url: jspb.Message.getFieldWithDefault(msg, 7, ""),
    pictureurlsList: jspb.Message.getRepeatedField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.post.Spec}
 */
proto.pb.unit.post.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.post.Spec;
  return proto.pb.unit.post.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.post.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.post.Spec}
 */
proto.pb.unit.post.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWrittenDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPictureurls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.post.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.post.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.post.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWrittenDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getThumbnail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPictureurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string author = 2;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setAuthor = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string written_date = 3;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getWrittenDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setWrittenDate = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string thumbnail = 5;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getThumbnail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setThumbnail = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string category = 6;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string url = 7;
 * @return {string}
 */
proto.pb.unit.post.Spec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.pb.unit.post.Spec.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string pictureURLs = 8;
 * @return {!Array<string>}
 */
proto.pb.unit.post.Spec.prototype.getPictureurlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.pb.unit.post.Spec.prototype.setPictureurlsList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.pb.unit.post.Spec.prototype.addPictureurls = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.pb.unit.post.Spec.prototype.clearPictureurlsList = function() {
  this.setPictureurlsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.unit.post.Comments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.unit.post.Comments.repeatedFields_, null);
};
goog.inherits(proto.pb.unit.post.Comments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.unit.post.Comments.displayName = 'proto.pb.unit.post.Comments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.unit.post.Comments.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.unit.post.Comments.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.unit.post.Comments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.unit.post.Comments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Comments.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentList: jspb.Message.toObjectList(msg.getCommentList(),
    pb_unit_comment_comment_pb.Comment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.unit.post.Comments}
 */
proto.pb.unit.post.Comments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.unit.post.Comments;
  return proto.pb.unit.post.Comments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.unit.post.Comments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.unit.post.Comments}
 */
proto.pb.unit.post.Comments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new pb_unit_comment_comment_pb.Comment;
      reader.readMessage(value,pb_unit_comment_comment_pb.Comment.deserializeBinaryFromReader);
      msg.addComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.unit.post.Comments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.unit.post.Comments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.unit.post.Comments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.unit.post.Comments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      pb_unit_comment_comment_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated pb.unit.comment.Comment Comment = 1;
 * @return {!Array<!proto.pb.unit.comment.Comment>}
 */
proto.pb.unit.post.Comments.prototype.getCommentList = function() {
  return /** @type{!Array<!proto.pb.unit.comment.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, pb_unit_comment_comment_pb.Comment, 1));
};


/** @param {!Array<!proto.pb.unit.comment.Comment>} value */
proto.pb.unit.post.Comments.prototype.setCommentList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.unit.comment.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.unit.comment.Comment}
 */
proto.pb.unit.post.Comments.prototype.addComment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.unit.comment.Comment, opt_index);
};


proto.pb.unit.post.Comments.prototype.clearCommentList = function() {
  this.setCommentList([]);
};


goog.object.extend(exports, proto.pb.unit.post);
