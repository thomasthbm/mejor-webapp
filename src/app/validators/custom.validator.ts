import {FormControl} from '@angular/forms';

export class CustomValidator{
    static EmailValidator(control: FormControl){

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(control.value)){
            return{'Email inválido': true}
        }

        return null;
    }

    static SelectValidator(control: FormControl){
        var value: number = control.value.toString();

        if (value === 0){
            return{
                'Selecione uma opção': true
            };
        }
    }
}