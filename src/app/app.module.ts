import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Example Imports
//===================================================
import { MouseWheelDirective } from './example-directive-mouse-events/mousewheel.directive'; // Directive Example using HostListener
import { MouseWheelDirectiveExampleComponent } from './example-directive-mouse-events/mousewheel.component';

// Example : Dynamic Component
//===================================================
import HelloWorldComponent from './example-dynamic-component/hello-world.component';
import WorldHelloComponent from './example-dynamic-component/world-hello.component';
import DynamicComponent from './example-dynamic-component/dynamic.component';
import MainDynamicComponent from './example-dynamic-component/dynamic-component.main';

// Example : Bootstrap Growl Notifications
//===================================================
import { BootstrapGrowlModule } from "./example-growl-notification/bootstrap-growl.module";

@NgModule({
    imports: [
        // Imports Metadata tells the angular list of other modules used by this module.
        BrowserModule,
        BootstrapGrowlModule
    ],
    declarations: [
        // Declaration Metadata lists the components, directives , services etc that are part of this module.
        AppComponent,
        MouseWheelDirective, MouseWheelDirectiveExampleComponent,
        HelloWorldComponent, WorldHelloComponent, DynamicComponent, MainDynamicComponent
    ],
    providers: [
    ],
    bootstrap: [
        // Bootstrap Metadata identifies the root component of the module. 
        // When Angular loads the appModule it looks for bootstrap Metadata and loads all the components listed here.
        // We want our module to AppComponent , hence we have listed it here
        AppComponent
    ]
})
export class AppModule { }