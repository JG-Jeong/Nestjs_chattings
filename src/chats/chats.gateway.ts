import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: 'chattings' })
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('chat');

  constructor() {
    this.logger.log('constructor');
  }

  //lifecycle hooks
  //1. OnGatewayInit -> afterInit() 메소드를 강제로 사용하게 함.
  //2. OnGatewayConnection -> handleConnection()
  //3. OnGatewayDisconnection -> handleDisconnection()
  //이런식으로 implements를 함

  afterInit() {
    this.logger.log('init');
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
  }

  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
  }

  @SubscribeMessage('new_user')
  handleNewUser(
    @MessageBody() username: string,
    @ConnectedSocket() socket: Socket,
  ) {
    // username을 DB에 넣는거 작업 할예정 (10.13)
    // 연결된 모든 socket에 데이터를 보내는게 broadcast하는거
    socket.broadcast.emit('user_connected', username);
    return username;
  }
}
