import { EventEmitter } from 'events';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from 'grpc';
import { IMessageServiceServer } from './proto/MessageService_grpc_pb';
import { Message, PostMessageResponse } from './proto/MessageService_pb';

class MessageService implements IMessageServiceServer {
  private readonly messageEventEmitter = new EventEmitter();

  // 過去ログを保存する配列
  private readonly pastMessageList: Message[] = [];

  // メッセージの取得
  public getMessageStream(call: grpc.ServerWriteableStream<Empty>) {
    // 過去ログをstreamに流し込む
    this.pastMessageList.forEach((message) => call.write(message));

    // PostMessageが実行されるたびに、そのメッセージをstreamに流し込む
    const handler = (message: Message) => call.write(message);
    this.messageEventEmitter.on('post', handler);

    // streamが切断された時、上記Listenerを消去する
    call.on('close', () => {
      this.messageEventEmitter.removeListener('post', handler);
    });
  }

  public postMessage(
    call: grpc.ServerUnaryCall<Message>,
    callback: grpc.sendUnaryData<PostMessageResponse>
  ) {
    // 受け取ったメッセージを過去ログに保存する
    const message = call.request;
    this.pastMessageList.push(message);

    // messageEventEmitter経由で、getMessageStreamで返却するstreamにメッセージを送る
    this.messageEventEmitter.emit('post', message);

    // レスポンスを返す
    const response = new PostMessageResponse();
    response.setStatus('ok');
    callback(null, response);
  }
}

export default MessageService;
