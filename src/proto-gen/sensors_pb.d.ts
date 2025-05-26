import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Point3 extends jspb.Message {
  getX(): number;
  setX(value: number): Point3;

  getY(): number;
  setY(value: number): Point3;

  getZ(): number;
  setZ(value: number): Point3;

  getR(): number;
  setR(value: number): Point3;
  hasR(): boolean;
  clearR(): Point3;

  getG(): number;
  setG(value: number): Point3;
  hasG(): boolean;
  clearG(): Point3;

  getB(): number;
  setB(value: number): Point3;
  hasB(): boolean;
  clearB(): Point3;

  getIntensity(): number;
  setIntensity(value: number): Point3;
  hasIntensity(): boolean;
  clearIntensity(): Point3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point3.AsObject;
  static toObject(includeInstance: boolean, msg: Point3): Point3.AsObject;
  static serializeBinaryToWriter(message: Point3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point3;
  static deserializeBinaryFromReader(message: Point3, reader: jspb.BinaryReader): Point3;
}

export namespace Point3 {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    r?: number,
    g?: number,
    b?: number,
    intensity?: number,
  }

  export enum RCase { 
    _R_NOT_SET = 0,
    R = 4,
  }

  export enum GCase { 
    _G_NOT_SET = 0,
    G = 5,
  }

  export enum BCase { 
    _B_NOT_SET = 0,
    B = 6,
  }

  export enum IntensityCase { 
    _INTENSITY_NOT_SET = 0,
    INTENSITY = 7,
  }
}

export class PointCloud3 extends jspb.Message {
  getPointsList(): Array<Point3>;
  setPointsList(value: Array<Point3>): PointCloud3;
  clearPointsList(): PointCloud3;
  addPoints(value?: Point3, index?: number): Point3;

  getTimestamp(): number;
  setTimestamp(value: number): PointCloud3;
  hasTimestamp(): boolean;
  clearTimestamp(): PointCloud3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloud3.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloud3): PointCloud3.AsObject;
  static serializeBinaryToWriter(message: PointCloud3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloud3;
  static deserializeBinaryFromReader(message: PointCloud3, reader: jspb.BinaryReader): PointCloud3;
}

export namespace PointCloud3 {
  export type AsObject = {
    pointsList: Array<Point3.AsObject>,
    timestamp?: number,
  }

  export enum TimestampCase { 
    _TIMESTAMP_NOT_SET = 0,
    TIMESTAMP = 2,
  }
}

export class IMUData extends jspb.Message {
  getAx(): number;
  setAx(value: number): IMUData;

  getAy(): number;
  setAy(value: number): IMUData;

  getAz(): number;
  setAz(value: number): IMUData;

  getGx(): number;
  setGx(value: number): IMUData;

  getGy(): number;
  setGy(value: number): IMUData;

  getGz(): number;
  setGz(value: number): IMUData;

  getTimestamp(): number;
  setTimestamp(value: number): IMUData;
  hasTimestamp(): boolean;
  clearTimestamp(): IMUData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IMUData.AsObject;
  static toObject(includeInstance: boolean, msg: IMUData): IMUData.AsObject;
  static serializeBinaryToWriter(message: IMUData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IMUData;
  static deserializeBinaryFromReader(message: IMUData, reader: jspb.BinaryReader): IMUData;
}

export namespace IMUData {
  export type AsObject = {
    ax: number,
    ay: number,
    az: number,
    gx: number,
    gy: number,
    gz: number,
    timestamp?: number,
  }

  export enum TimestampCase { 
    _TIMESTAMP_NOT_SET = 0,
    TIMESTAMP = 7,
  }
}

export class RecordingEntry extends jspb.Message {
  getScan(): PointCloud3 | undefined;
  setScan(value?: PointCloud3): RecordingEntry;
  hasScan(): boolean;
  clearScan(): RecordingEntry;

  getImu(): IMUData | undefined;
  setImu(value?: IMUData): RecordingEntry;
  hasImu(): boolean;
  clearImu(): RecordingEntry;

  getEntryCase(): RecordingEntry.EntryCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordingEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RecordingEntry): RecordingEntry.AsObject;
  static serializeBinaryToWriter(message: RecordingEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordingEntry;
  static deserializeBinaryFromReader(message: RecordingEntry, reader: jspb.BinaryReader): RecordingEntry;
}

export namespace RecordingEntry {
  export type AsObject = {
    scan?: PointCloud3.AsObject,
    imu?: IMUData.AsObject,
  }

  export enum EntryCase { 
    ENTRY_NOT_SET = 0,
    SCAN = 1,
    IMU = 2,
  }
}

export class saveFileRequest extends jspb.Message {
  getFilename(): string;
  setFilename(value: string): saveFileRequest;
  hasFilename(): boolean;
  clearFilename(): saveFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): saveFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: saveFileRequest): saveFileRequest.AsObject;
  static serializeBinaryToWriter(message: saveFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): saveFileRequest;
  static deserializeBinaryFromReader(message: saveFileRequest, reader: jspb.BinaryReader): saveFileRequest;
}

export namespace saveFileRequest {
  export type AsObject = {
    filename?: string,
  }

  export enum FilenameCase { 
    _FILENAME_NOT_SET = 0,
    FILENAME = 1,
  }
}

