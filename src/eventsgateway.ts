import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3001, { cors: { origin: '*' }})
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    handleConnection(client: Socket) {}

    handleDisconnect(client: Socket) {}
}    