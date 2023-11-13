import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[hbMatTableColumnTemplate]'
})
export class HbMatTableColumnTemplateDirective {

    constructor(public templateRef: TemplateRef<HbMatTableColumnTemplateContext>) { }

    static ngTemplateContextGuard(directive: HbMatTableColumnTemplateDirective, context: unknown): context is HbMatTableColumnTemplateContext {
        return true;
    }
}

class HbMatTableColumnTemplateContext {
    $implicit: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
