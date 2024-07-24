import { WebSocketServer,WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const subscritions:{[key:string]:{
    socket:WebSocket,
    rooms: string[],
    logs : string[]
}}={}


wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  const id = Math.random()
  subscritions[id] = {
      socket : ws,
      rooms: [],
      logs: []
  }
  ws.on('message', function message(data) {
    const userMessage = JSON.parse(data as unknown as string)
    if(userMessage.type === 'SUBSCRIBE'){
            
     subscritions[id].rooms.push(userMessage.roomId)
     Object.keys(subscritions).forEach(function  loop(userId){
        
        if(subscritions[userId].rooms.includes(userMessage.roomId)){
            subscritions[id].socket.send(JSON.stringify( subscritions[userId].logs))
            return;
        }
     })
        
    }
    if(userMessage.type === 'SEND_LOG'){
      console.log(id,subscritions[id].logs)
      subscritions[id].logs.push(userMessage.message)
      console.log(id,subscritions[id].logs)
      Object.keys(subscritions).forEach((userId)=>{
        const { rooms , socket} = subscritions[userId]
        subscritions[userId].logs = subscritions[id].logs

        if(rooms.includes(userMessage.roomId)){
            socket.send(JSON.stringify(subscritions[id].logs))
        }
      })  
    }

    
    console.log('received: %s', data);
  });

  ws.send('something');
});