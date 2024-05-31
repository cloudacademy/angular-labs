import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input('appTooltip') tooltipText!: string;
  tooltipElement = this.renderer.createElement('span');
  

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.listen(this.el.nativeElement, 'mouseover', () => {
      this.showTooltip();
    });
    this.renderer.listen(this.el.nativeElement, 'mouseout', () => {
      this.hideTooltip();
    });
  }

  showTooltip() {
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    this.renderer.setProperty(this.tooltipElement, 'textContent', this.tooltipText);

    const tooltipStyle: any = {
      'position': 'absolute',
      'padding': '10px',
      'border-radius': '5px',
      'background-color': '#333',
      'color': '#fff',
      'font-size': '14px'
     };
    Object.keys(tooltipStyle).forEach(style => {
      this.renderer.setStyle(this.tooltipElement, style, tooltipStyle[style]);
    });
  }

  hideTooltip() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
  }
}
