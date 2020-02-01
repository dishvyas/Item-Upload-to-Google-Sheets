import { OnInit } from '@angular/core';
import { BlockUIInstanceService } from '../../services/block-ui-instance.service';
export declare class BlockUIComponent implements OnInit {
    private blockUI;
    name: string;
    message: any;
    delayStart: number;
    delayStop: number;
    template: any;
    constructor(blockUI: BlockUIInstanceService);
    ngOnInit(): void;
}
