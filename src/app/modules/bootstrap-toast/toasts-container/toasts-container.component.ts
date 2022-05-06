import { Component, OnInit, TemplateRef } from '@angular/core';
import { BootstrapToastService } from '../bootstrap-toast.service';

@Component({
  selector: 'np-toasts-container',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [ngClass]="{'high-contrast-header': !autoHide}"
      [autohide]="autoHide"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
      [header]="toastService.header"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsContainerComponent implements OnInit {


  constructor(
    public toastService: BootstrapToastService
  ) {
  }

  get autoHide() {return this.toastService.autoHide}

  ngOnInit() {
  }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
