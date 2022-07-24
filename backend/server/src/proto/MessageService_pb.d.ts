// package: 
// file: MessageService.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PostMessageResponse extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): PostMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostMessageResponse): PostMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostMessageResponse;
    static deserializeBinaryFromReader(message: PostMessageResponse, reader: jspb.BinaryReader): PostMessageResponse;
}

export namespace PostMessageResponse {
    export type AsObject = {
        status: string,
    }
}

export class Message extends jspb.Message { 
    getText(): string;
    setText(value: string): Message;
    getCreateTime(): number;
    setCreateTime(value: number): Message;
    getAuthorName(): string;
    setAuthorName(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        text: string,
        createTime: number,
        authorName: string,
    }
}
