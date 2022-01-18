import { Pipe ,PipeTransform} from "@angular/core";

@Pipe ({
    name : 'append'
})

export class AppendNum implements PipeTransform {
    constructor(){}
    transform(value: any) {
        return '+91'+value;
    }
}