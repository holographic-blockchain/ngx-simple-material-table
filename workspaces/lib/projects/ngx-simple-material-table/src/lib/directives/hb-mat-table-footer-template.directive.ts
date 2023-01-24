import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[hbMatTableFooterTemplate]'
})
export class HbMatTableFooterTemplateDirective {

    constructor(public templateRef: TemplateRef<HbMatTableFooterTemplateContext>) { }

    static ngTemplateContextGuard(directive: HbMatTableFooterTemplateDirective, context: unknown): context is HbMatTableFooterTemplateContext {
        return true;
    }

}

class HbMatTableFooterTemplateContext {
    $implicit: any;
}
