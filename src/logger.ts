import { logs } from "./store"; 

export  function startlogger(){

     setInterval(()=>console.log(logs),5000)
}