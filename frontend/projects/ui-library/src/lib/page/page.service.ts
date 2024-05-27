import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private titleSub = new BehaviorSubject<TemplatePortal | null>(null);
  title = toSignal(this.titleSub);
  setTitle(portal: TemplatePortal) {
    this.titleSub.next(portal);
  }

}
