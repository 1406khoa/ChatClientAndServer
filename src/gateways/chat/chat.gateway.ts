import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway({cors: true})
export class ChatGateway {
  @WebSocketServer() server: any;

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client ${client.id} connected`);
  }

  handleDisconnect(client: any) {
    console.log(`Client ${client.id} disconnected`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('message', payload);
    this.server.emit(`message-${payload.roomID}`, payload);
    return 'Hello world!';
  }
}
