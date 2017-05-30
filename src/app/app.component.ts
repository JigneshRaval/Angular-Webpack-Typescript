import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>Hello Angular 4</div>

        <mousewheel-directive-example-component></mousewheel-directive-example-component>

        <dynamic-component-main></dynamic-component-main>
    `,
    styleUrls: []
}) 
export class AppComponent { }
 