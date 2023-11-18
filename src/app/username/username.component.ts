import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styles: ['.div { padding: 10px; }']
})
export class UsernameComponent implements OnInit{
    allowReset = false;
    username = '';

    constructor(){
        this.resetUsername()
    }

    ngOnInit(){}

    resetUsername(){
        if(this.username.length > 0)
            this.allowReset = true;
        else
            this.allowReset = false;
    }

    onResetUsername(){
        if(this.allowReset){
            this.username = '';
            this.resetUsername();
        }
    }

    onInputChange(){
        this.resetUsername();
    }

}