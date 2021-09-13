const Mixin=(classs, ...args)=> args.reduce((a,b)=> b(a), classs);

const MixinBase=Base=> class extends Base{

};

export {Mixin, MixinBase}