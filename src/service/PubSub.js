export class PubSub{

    constructor(){
        this._suscriptors= new Map();
    }
    emit(chanel,data){

       const suscriptorsChanel = this._suscriptors.get(chanel);
       if(suscriptorsChanel){
           suscriptorsChanel.forEach(f => f(data));
       }
   }
    on(chanel, handler){


        const suscriptorsChanel=this._suscriptors.get(chanel);

        let suscriptorsChanel=this._suscriptors.get(chanel);

        if(!suscriptorsChanel){

            suscriptorsChanel=[handler];
            this._suscriptors.set(chanel, suscriptorsChanel);
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


