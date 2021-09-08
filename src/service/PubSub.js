class PubSub{

    constructor(){
        this._suscriptors= new Map();
    }
    emit(chanel,data){
       const suscriptorsChanel = this._suscriptors.get(chanel);
       if(suscriptorsChanel){
           suscriptorsChanel.forEach(suscriptor => {
               suscriptor(data);
           });
       }
   }
    on(chanel, handler){
        let suscriptorsChanel=this._suscriptors.get(chanel);
        if(!suscriptorsChanel){
            suscriptorsChanel=[handler];
            this._suscriptors.set(suscriptorsChanel);
        } else {
            suscriptorsChanel.push(handler);
        }
       return ()=>{
           const index=suscriptorsChanel.indexOf(handler);
           if(index>-1){
               suscriptorsChanel.splice(index,1);
               if(suscriptorsChanel.length===0){
                   this._suscriptors.delete(chanel);
               }
           }
       }
   }
}

export default new PubSub(); 
// dispose=pubsub.on("cambio de dia", (date)=>{})
// dispose();