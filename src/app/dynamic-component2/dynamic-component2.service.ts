import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector
} from '@angular/core'

import { DynamicComponent2 } from './dynamic-component2.component'

@Injectable()
export class DynamicComp2Service {
    rootViewContainer: any;

    constructor(private factoryResolver: ComponentFactoryResolver) { }

    public setRootViewContainerRef(viewContainerRef:any) {
        this.rootViewContainer = viewContainerRef
    }

    public addDynamicComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent2)
        const component = factory.create(this.rootViewContainer.parentInjector)

        this.rootViewContainer.insert(component.hostView)
    }

}
