import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmallSharedModule } from 'app/shared';
import {
    ShipmentComponent,
    ShipmentDetailComponent,
    ShipmentUpdateComponent,
    ShipmentDeletePopupComponent,
    ShipmentDeleteDialogComponent,
    shipmentRoute,
    shipmentPopupRoute
} from './';

const ENTITY_STATES = [...shipmentRoute, ...shipmentPopupRoute];

@NgModule({
    imports: [EmallSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ShipmentComponent,
        ShipmentDetailComponent,
        ShipmentUpdateComponent,
        ShipmentDeleteDialogComponent,
        ShipmentDeletePopupComponent
    ],
    entryComponents: [ShipmentComponent, ShipmentUpdateComponent, ShipmentDeleteDialogComponent, ShipmentDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmallShipmentModule {}
