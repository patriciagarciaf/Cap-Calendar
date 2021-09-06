class PubSub{
    emit(chanel,data){

    }
    on(chanel, handler){
        return ()=>{}
    }
}

pubsub=new PubSub(); 
dispose=pubsub.on("cambio de dia", (date)=>{})
dispose();