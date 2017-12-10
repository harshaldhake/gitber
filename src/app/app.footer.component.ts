import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div   style="bottom: 0px; position: fixed">
            <div fxLayout="row" fxLayoutAlign="space-between center">
                <div><span class="footer-text-left">GitBer Developed by Harshal</span></div>
                <div><span class="footer-text-right"><span class="ui-icon ui-icon-copyright"></span>  <span>All Rights Reserved</span></span></div>
            </div>
        </div>
    `
})
export class AppFooter {

}