import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class OpsBasicPrService {
    constructor() { }
}
OpsBasicPrService.ɵprov = ɵɵdefineInjectable({ factory: function OpsBasicPrService_Factory() { return new OpsBasicPrService(); }, token: OpsBasicPrService, providedIn: "root" });
OpsBasicPrService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OpsBasicPrService.ctorParameters = () => [];

class OpsBasicPrComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpsBasicPrComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ops-basic-pr',
                template: `
    <p>
      ops-basic-pr works!
    </p>
  `
            },] }
];
OpsBasicPrComponent.ctorParameters = () => [];

class OpsBasicPrModule {
}
OpsBasicPrModule.decorators = [
    { type: NgModule, args: [{
                declarations: [OpsBasicPrComponent],
                imports: [],
                exports: [OpsBasicPrComponent]
            },] }
];

/*
 * Public API Surface of ops-basic-pr
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OpsBasicPrComponent, OpsBasicPrModule, OpsBasicPrService };
//# sourceMappingURL=ops-basic-pr.js.map
