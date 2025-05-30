// source: sensors.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof window !== 'undefined' && window) ||
  (typeof global !== 'undefined' && global) ||
  (typeof self !== 'undefined' && self) ||
  function () {
    return this;
  }.call(null) ||
  Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.sensors.IMUData', null, global);
goog.exportSymbol('proto.sensors.Point3', null, global);
goog.exportSymbol('proto.sensors.PointCloud3', null, global);
goog.exportSymbol('proto.sensors.RecordingEntry', null, global);
goog.exportSymbol('proto.sensors.RecordingEntry.EntryCase', null, global);
goog.exportSymbol('proto.sensors.saveFileRequest', null, global);
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
proto.sensors.Point3 = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensors.Point3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensors.Point3.displayName = 'proto.sensors.Point3';
}
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
proto.sensors.PointCloud3 = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sensors.PointCloud3.repeatedFields_, null);
};
goog.inherits(proto.sensors.PointCloud3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensors.PointCloud3.displayName = 'proto.sensors.PointCloud3';
}
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
proto.sensors.IMUData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensors.IMUData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensors.IMUData.displayName = 'proto.sensors.IMUData';
}
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
proto.sensors.RecordingEntry = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.sensors.RecordingEntry.oneofGroups_);
};
goog.inherits(proto.sensors.RecordingEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensors.RecordingEntry.displayName = 'proto.sensors.RecordingEntry';
}
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
proto.sensors.saveFileRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sensors.saveFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sensors.saveFileRequest.displayName = 'proto.sensors.saveFileRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.sensors.Point3.prototype.toObject = function (opt_includeInstance) {
    return proto.sensors.Point3.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.sensors.Point3} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.sensors.Point3.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
        z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
        r: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
        g: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
        b: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
        intensity: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
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
 * @return {!proto.sensors.Point3}
 */
proto.sensors.Point3.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensors.Point3();
  return proto.sensors.Point3.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensors.Point3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensors.Point3}
 */
proto.sensors.Point3.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setX(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setY(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setZ(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setR(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setG(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setB(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setIntensity(value);
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
proto.sensors.Point3.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.sensors.Point3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensors.Point3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensors.Point3.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(1, f);
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(3, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(4, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(5, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFloat(6, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(7, f);
  }
};

/**
 * optional float x = 1;
 * @return {number}
 */
proto.sensors.Point3.prototype.getX = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setX = function (value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};

/**
 * optional float y = 2;
 * @return {number}
 */
proto.sensors.Point3.prototype.getY = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setY = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional float z = 3;
 * @return {number}
 */
proto.sensors.Point3.prototype.getZ = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setZ = function (value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};

/**
 * optional float r = 4;
 * @return {number}
 */
proto.sensors.Point3.prototype.getR = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setR = function (value) {
  return jspb.Message.setField(this, 4, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.clearR = function () {
  return jspb.Message.setField(this, 4, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.Point3.prototype.hasR = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional float g = 5;
 * @return {number}
 */
proto.sensors.Point3.prototype.getG = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setG = function (value) {
  return jspb.Message.setField(this, 5, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.clearG = function () {
  return jspb.Message.setField(this, 5, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.Point3.prototype.hasG = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional float b = 6;
 * @return {number}
 */
proto.sensors.Point3.prototype.getB = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setB = function (value) {
  return jspb.Message.setField(this, 6, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.clearB = function () {
  return jspb.Message.setField(this, 6, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.Point3.prototype.hasB = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional uint32 intensity = 7;
 * @return {number}
 */
proto.sensors.Point3.prototype.getIntensity = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.setIntensity = function (value) {
  return jspb.Message.setField(this, 7, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.Point3} returns this
 */
proto.sensors.Point3.prototype.clearIntensity = function () {
  return jspb.Message.setField(this, 7, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.Point3.prototype.hasIntensity = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sensors.PointCloud3.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.sensors.PointCloud3.prototype.toObject = function (opt_includeInstance) {
    return proto.sensors.PointCloud3.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.sensors.PointCloud3} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.sensors.PointCloud3.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        pointsList: jspb.Message.toObjectList(
          msg.getPointsList(),
          proto.sensors.Point3.toObject,
          includeInstance,
        ),
        timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
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
 * @return {!proto.sensors.PointCloud3}
 */
proto.sensors.PointCloud3.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensors.PointCloud3();
  return proto.sensors.PointCloud3.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensors.PointCloud3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensors.PointCloud3}
 */
proto.sensors.PointCloud3.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.sensors.Point3();
        reader.readMessage(value, proto.sensors.Point3.deserializeBinaryFromReader);
        msg.addPoints(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimestamp(value);
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
proto.sensors.PointCloud3.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.sensors.PointCloud3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensors.PointCloud3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensors.PointCloud3.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.sensors.Point3.serializeBinaryToWriter);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(2, f);
  }
};

/**
 * repeated Point3 points = 1;
 * @return {!Array<!proto.sensors.Point3>}
 */
proto.sensors.PointCloud3.prototype.getPointsList = function () {
  return /** @type{!Array<!proto.sensors.Point3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sensors.Point3, 1)
  );
};

/**
 * @param {!Array<!proto.sensors.Point3>} value
 * @return {!proto.sensors.PointCloud3} returns this
 */
proto.sensors.PointCloud3.prototype.setPointsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.sensors.Point3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sensors.Point3}
 */
proto.sensors.PointCloud3.prototype.addPoints = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.sensors.Point3,
    opt_index,
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sensors.PointCloud3} returns this
 */
proto.sensors.PointCloud3.prototype.clearPointsList = function () {
  return this.setPointsList([]);
};

/**
 * optional uint64 timestamp = 2;
 * @return {number}
 */
proto.sensors.PointCloud3.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.PointCloud3} returns this
 */
proto.sensors.PointCloud3.prototype.setTimestamp = function (value) {
  return jspb.Message.setField(this, 2, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.PointCloud3} returns this
 */
proto.sensors.PointCloud3.prototype.clearTimestamp = function () {
  return jspb.Message.setField(this, 2, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.PointCloud3.prototype.hasTimestamp = function () {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.sensors.IMUData.prototype.toObject = function (opt_includeInstance) {
    return proto.sensors.IMUData.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.sensors.IMUData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.sensors.IMUData.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        ax: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
        ay: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
        az: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
        gx: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
        gy: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
        gz: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
        timestamp: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
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
 * @return {!proto.sensors.IMUData}
 */
proto.sensors.IMUData.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensors.IMUData();
  return proto.sensors.IMUData.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensors.IMUData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensors.IMUData}
 */
proto.sensors.IMUData.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setAx(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setAy(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setAz(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setGx(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setGy(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setGz(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTimestamp(value);
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
proto.sensors.IMUData.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.sensors.IMUData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensors.IMUData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensors.IMUData.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAx();
  if (f !== 0.0) {
    writer.writeFloat(1, f);
  }
  f = message.getAy();
  if (f !== 0.0) {
    writer.writeFloat(2, f);
  }
  f = message.getAz();
  if (f !== 0.0) {
    writer.writeFloat(3, f);
  }
  f = message.getGx();
  if (f !== 0.0) {
    writer.writeFloat(4, f);
  }
  f = message.getGy();
  if (f !== 0.0) {
    writer.writeFloat(5, f);
  }
  f = message.getGz();
  if (f !== 0.0) {
    writer.writeFloat(6, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(7, f);
  }
};

/**
 * optional float ax = 1;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getAx = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setAx = function (value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};

/**
 * optional float ay = 2;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getAy = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setAy = function (value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};

/**
 * optional float az = 3;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getAz = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setAz = function (value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};

/**
 * optional float gx = 4;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getGx = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setGx = function (value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};

/**
 * optional float gy = 5;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getGy = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setGy = function (value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};

/**
 * optional float gz = 6;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getGz = function () {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setGz = function (value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};

/**
 * optional uint64 timestamp = 7;
 * @return {number}
 */
proto.sensors.IMUData.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.setTimestamp = function (value) {
  return jspb.Message.setField(this, 7, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.IMUData} returns this
 */
proto.sensors.IMUData.prototype.clearTimestamp = function () {
  return jspb.Message.setField(this, 7, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.IMUData.prototype.hasTimestamp = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.sensors.RecordingEntry.oneofGroups_ = [[1, 2]];

/**
 * @enum {number}
 */
proto.sensors.RecordingEntry.EntryCase = {
  ENTRY_NOT_SET: 0,
  SCAN: 1,
  IMU: 2,
};

/**
 * @return {proto.sensors.RecordingEntry.EntryCase}
 */
proto.sensors.RecordingEntry.prototype.getEntryCase = function () {
  return /** @type {proto.sensors.RecordingEntry.EntryCase} */ (
    jspb.Message.computeOneofCase(this, proto.sensors.RecordingEntry.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.sensors.RecordingEntry.prototype.toObject = function (opt_includeInstance) {
    return proto.sensors.RecordingEntry.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.sensors.RecordingEntry} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.sensors.RecordingEntry.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        scan: (f = msg.getScan()) && proto.sensors.PointCloud3.toObject(includeInstance, f),
        imu: (f = msg.getImu()) && proto.sensors.IMUData.toObject(includeInstance, f),
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
 * @return {!proto.sensors.RecordingEntry}
 */
proto.sensors.RecordingEntry.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensors.RecordingEntry();
  return proto.sensors.RecordingEntry.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensors.RecordingEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensors.RecordingEntry}
 */
proto.sensors.RecordingEntry.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.sensors.PointCloud3();
        reader.readMessage(value, proto.sensors.PointCloud3.deserializeBinaryFromReader);
        msg.setScan(value);
        break;
      case 2:
        var value = new proto.sensors.IMUData();
        reader.readMessage(value, proto.sensors.IMUData.deserializeBinaryFromReader);
        msg.setImu(value);
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
proto.sensors.RecordingEntry.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.sensors.RecordingEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensors.RecordingEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensors.RecordingEntry.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getScan();
  if (f != null) {
    writer.writeMessage(1, f, proto.sensors.PointCloud3.serializeBinaryToWriter);
  }
  f = message.getImu();
  if (f != null) {
    writer.writeMessage(2, f, proto.sensors.IMUData.serializeBinaryToWriter);
  }
};

/**
 * optional PointCloud3 scan = 1;
 * @return {?proto.sensors.PointCloud3}
 */
proto.sensors.RecordingEntry.prototype.getScan = function () {
  return /** @type{?proto.sensors.PointCloud3} */ (
    jspb.Message.getWrapperField(this, proto.sensors.PointCloud3, 1)
  );
};

/**
 * @param {?proto.sensors.PointCloud3|undefined} value
 * @return {!proto.sensors.RecordingEntry} returns this
 */
proto.sensors.RecordingEntry.prototype.setScan = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.sensors.RecordingEntry.oneofGroups_[0],
    value,
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.sensors.RecordingEntry} returns this
 */
proto.sensors.RecordingEntry.prototype.clearScan = function () {
  return this.setScan(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.RecordingEntry.prototype.hasScan = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional IMUData imu = 2;
 * @return {?proto.sensors.IMUData}
 */
proto.sensors.RecordingEntry.prototype.getImu = function () {
  return /** @type{?proto.sensors.IMUData} */ (
    jspb.Message.getWrapperField(this, proto.sensors.IMUData, 2)
  );
};

/**
 * @param {?proto.sensors.IMUData|undefined} value
 * @return {!proto.sensors.RecordingEntry} returns this
 */
proto.sensors.RecordingEntry.prototype.setImu = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.sensors.RecordingEntry.oneofGroups_[0],
    value,
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.sensors.RecordingEntry} returns this
 */
proto.sensors.RecordingEntry.prototype.clearImu = function () {
  return this.setImu(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.RecordingEntry.prototype.hasImu = function () {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.sensors.saveFileRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.sensors.saveFileRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.sensors.saveFileRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.sensors.saveFileRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        filename: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
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
 * @return {!proto.sensors.saveFileRequest}
 */
proto.sensors.saveFileRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sensors.saveFileRequest();
  return proto.sensors.saveFileRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sensors.saveFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sensors.saveFileRequest}
 */
proto.sensors.saveFileRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setFilename(value);
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
proto.sensors.saveFileRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.sensors.saveFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sensors.saveFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sensors.saveFileRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
};

/**
 * optional string filename = 1;
 * @return {string}
 */
proto.sensors.saveFileRequest.prototype.getFilename = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.sensors.saveFileRequest} returns this
 */
proto.sensors.saveFileRequest.prototype.setFilename = function (value) {
  return jspb.Message.setField(this, 1, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.sensors.saveFileRequest} returns this
 */
proto.sensors.saveFileRequest.prototype.clearFilename = function () {
  return jspb.Message.setField(this, 1, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sensors.saveFileRequest.prototype.hasFilename = function () {
  return jspb.Message.getField(this, 1) != null;
};

goog.object.extend(exports, proto.sensors);
