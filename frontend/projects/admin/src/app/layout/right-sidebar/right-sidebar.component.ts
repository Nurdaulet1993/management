import {
  booleanAttribute,
  Component,
  inject,
  input,
  OnInit,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import { CdkConnectedOverlay, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CdkConnectedOverlay, PortalModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss',
  exportAs: 'rightSidebar'
})
export class RightSidebarComponent implements OnInit {
  private overlay = inject(Overlay);
  private overlayPositionBuilder = inject(OverlayPositionBuilder);
  private template = viewChild<TemplateRef<any>>('sidebar');
  private vcr = inject(ViewContainerRef);
  private positionStrategy = this.overlayPositionBuilder
    .global()
    .right()
    .top()

  private overlayRef = this.overlay.create({
    positionStrategy: this.positionStrategy,
    hasBackdrop: true,
  })

  backdropClick$ = this.overlayRef.backdropClick()
    .pipe(takeUntilDestroyed())

  opened = input(true, { transform: booleanAttribute });
  isOpen = this.opened();

  ngOnInit(): void {
    if (this.opened()) this.open();
    this.backdropClick$.subscribe(() => {
      this.close();
    })
  }

  open(): void {
    const sidebarPortal = new TemplatePortal(this.template()!, this.vcr);
    this.overlayRef.attach(sidebarPortal);
    this.isOpen = true;
  }

  close(): void {
    this.overlayRef.detach();
    this.isOpen = false;
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }
}
