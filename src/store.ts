interface Log {
    logs : string[];
    subscribers : string[];
    id : string;
}

export const logs : Log[] = []


export class LogManager{
    logs:Log[] = []
    constructor(){
      this.logs = []
    }
    
    addLog(id:string,log:string){
      console.log(`adding logId ${id} to add the log - ${log}`)
      const logObj = this.logs.find((ins:Log)=>ins.id === id)
      logObj?.logs.push(log)
    }

    startLog(id:string){
        const log: Log = {
           id:id,
           subscribers:[`user${Math.random().toString()}`],
           logs:[]
        }

        this.logs.push(log)
    }

}