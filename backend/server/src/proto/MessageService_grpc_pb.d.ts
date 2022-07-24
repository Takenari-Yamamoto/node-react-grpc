// package: 
// file: MessageService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as MessageService_pb from "./MessageService_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMessageStream: IMessageServiceService_IGetMessageStream;
    postMessage: IMessageServiceService_IPostMessage;
}

interface IMessageServiceService_IGetMessageStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, MessageService_pb.Message> {
    path: "/MessageService/GetMessageStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<MessageService_pb.Message>;
    responseDeserialize: grpc.deserialize<MessageService_pb.Message>;
}
interface IMessageServiceService_IPostMessage extends grpc.MethodDefinition<MessageService_pb.Message, MessageService_pb.PostMessageResponse> {
    path: "/MessageService/PostMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<MessageService_pb.Message>;
    requestDeserialize: grpc.deserialize<MessageService_pb.Message>;
    responseSerialize: grpc.serialize<MessageService_pb.PostMessageResponse>;
    responseDeserialize: grpc.deserialize<MessageService_pb.PostMessageResponse>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer {
    getMessageStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, MessageService_pb.Message>;
    postMessage: grpc.handleUnaryCall<MessageService_pb.Message, MessageService_pb.PostMessageResponse>;
}

export interface IMessageServiceClient {
    getMessageStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    getMessageStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMessageStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public getMessageStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MessageService_pb.Message>;
    public postMessage(request: MessageService_pb.Message, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
    public postMessage(request: MessageService_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MessageService_pb.PostMessageResponse) => void): grpc.ClientUnaryCall;
}
