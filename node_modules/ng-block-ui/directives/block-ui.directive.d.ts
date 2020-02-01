import { OnInit, ComponentFactoryResolver, ViewContainerRef, TemplateRef, Renderer2 } from '@angular/core';
import { BlockUIInstanceService } from '../services/block-ui-instance.service';
export declare class BlockUIDirective implements OnInit {
    private blockUIService;
    private viewRef;
    private templateRef;
    private renderer;
    private componentFactoryResolver;
    private blockUIComponentRef;
    blockTarget: string;
    message: any;
    template: any;
    delayStart: any;
    delayStop: any;
    blockUI: any;
    blockUIMessage: any;
    blockUITemplate: any;
    blockUIDelayStart: any;
    blockUIDelayStop: any;
    constructor(blockUIService: BlockUIInstanceService, viewRef: ViewContainerRef, templateRef: TemplateRef<any>, renderer: Renderer2, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    private isComponentInTemplate(element);
    private findContentNode(element);
    private createComponent();
}
