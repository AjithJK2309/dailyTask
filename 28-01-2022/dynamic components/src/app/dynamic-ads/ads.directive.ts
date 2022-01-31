import { Directive, ViewContainerRef } from "@angular/core";

@Directive ({
    selector : '[adsDynamic]'
})
export class AdsDynamic {
   
    constructor(public vcr:ViewContainerRef){}
}