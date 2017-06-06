import { Component } from '@angular/core';
import { BootstrapGrowlService, BootstrapAlertTypes } from './example-growl-notification/index';

@Component({
    selector: 'my-app',
    template: `
        <div>Hello Angular 4</div>

        <mousewheel-directive-example-component></mousewheel-directive-example-component>

        <dynamic-component-main></dynamic-component-main>

        <bootstrap-growl [alertCount]="3" [autoClose]="10000"></bootstrap-growl>

        <button (click)="addGrowlAlert()">Test</button>
    `,
    styleUrls: []
})
export class AppComponent {
    constructor(private bootstrapGrowlService: BootstrapGrowlService) {

    }
    addGrowlAlert() {
        this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.SUCCESS);
        this.bootstrapGrowlService.addAlert("any custom message <b>with</b> HTML", BootstrapAlertTypes.INFO);
        this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.WARNING);
        this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.DANGER, false);
    }
}
