import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomOnHoover]',
  standalone: true
})
export class ZoomOnHooverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.elRef.nativeElement.style.transform = 'scale(1.03)';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.elRef.nativeElement.style.transform = 'scale(1)';
  }
}
