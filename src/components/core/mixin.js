const Mixin=(classs, ...args)=> args.reduce((a,b)=> b(a), classs);

import { BaseDateComponent } from "./basedatecomponent";
import { StyleComponent } from "./styleComponent";

const MixinBase=Base=> class extends Base{

};



export {Mixin, MixinBase}

export function classMixin(classs, ...src){
    for (let _cls of src){
        for (let key of Object.getOwnPropertyNames(_cls.prototype)){
            classs.prototype[key]=_cls.prototype[key];
        }
    }
}

const mixinStyle=classMixin(BaseDateComponent,StyleComponent);
export{
    mixinStyle
}