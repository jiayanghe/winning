import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootstrapToastService {

  toasts: any[] = [];
  defaultHeader = null
  header = null
  defaultDelay = 4000
  autoHide = true

  show(textOrTpl: string | TemplateRef<any>, classNames: string, header = this.defaultHeader, options: any = {}) {
    this.header = header
    this.toasts.push({ textOrTpl, delay: this.defaultDelay, classname: classNames, ...options });
  }

  showSuccess(textOrTpl: string | TemplateRef<any>, header = this.defaultHeader, options: any = {}) {
    this.show(textOrTpl, 'green-toast fade-in', header, options,)
  }

  showWarning(textOrTpl: string | TemplateRef<any>, header = this.defaultHeader, options: any = {}) {
    this.show(textOrTpl, 'bg-warning black-text', header, options,)
  }

  showError(textOrTpl: string | TemplateRef<any>, header = this.defaultHeader, options: any = {}) {
    this.show(textOrTpl, 'bg-danger white-text', header, options,)
  }
  

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
