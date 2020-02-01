import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { BlockUIInstanceService } from './services/block-ui-instance.service';
import { BlockUISettings } from './models/block-ui-settings.model';
export declare const BlockUIServiceInstance: BlockUIInstanceService;
export declare const BlockUIModuleSettings: InjectionToken<string>;
export declare function provideInstance(settings: BlockUISettings): any;
export declare class BlockUIModule {
    static forRoot(settings?: BlockUISettings): ModuleWithProviders;
}
