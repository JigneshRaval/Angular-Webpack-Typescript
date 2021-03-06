import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { BootstrapGrowlService, BootstrapAlertTypes } from './example-growl-notification/index';

import { DialogComponent } from './dynamic-dialog-component/dialog.component';
import { DialogAnchorDirective } from './dynamic-dialog-component/dialog-anchor.directive';

import { MyComponent } from 'npm-link-test';

@Component({
	selector: 'my-app',
	template: `
        <div>Hello Angular 4</div>

        <mousewheel-directive-example-component></mousewheel-directive-example-component>

        <dynamic-component-main></dynamic-component-main>

		<dynamic-component-main2></dynamic-component-main2>

		<bootstrap-growl [alertCount]="3" [autoClose]="10000"></bootstrap-growl>

        <button (click)="addGrowlAlert()">Test</button>

		<div dialogAnchor></div>
        <div class="open-button" (click)='openDialogBox()'>Open dialog box</div>
		<my-component></my-component>
    `,
	styleUrls: [],
	entryComponents: [DialogComponent]
})
export class AppComponent {
	constructor(private bootstrapGrowlService: BootstrapGrowlService) {
		//service.setRootViewContainerRef(viewContainerRef)
		//service.addDynamicComponent()
	}

	@ViewChild(DialogAnchorDirective) dialogAnchor: DialogAnchorDirective;

	openDialogBox() {
		this.dialogAnchor.createDialog(DialogComponent);
	}

	addGrowlAlert() {
		this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.SUCCESS);
		this.bootstrapGrowlService.addAlert("any custom message <b>with</b> HTML", BootstrapAlertTypes.INFO);
		this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.WARNING);
		this.bootstrapGrowlService.addAlert("any custom message", BootstrapAlertTypes.DANGER, false);
	}
}
