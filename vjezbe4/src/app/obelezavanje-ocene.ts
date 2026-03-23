import { Directive, ElementRef, HostListener, inject, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appObelezavanjeOcene]',
})
export class ObelezavanjeOcene implements OnInit, OnChanges{

  @Input()
  appObelezavanjeOcene: any; 
  color: string = "";
  
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  @Input()
  porukaTemplate? : TemplateRef<any>;

  constructor() {
    console.log(this.appObelezavanjeOcene);
  }

  ngOnInit(): void {
    //console.log(this.appObelezavanjeOcene);
    //console.log(this.viewContainerRef);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes["appObelezavanjeOcene"].currentValue != changes["appObelezavanjeOcene"].previousValue){
      this.viewContainerRef.clear();
      if(this.appObelezavanjeOcene == undefined || this.appObelezavanjeOcene < 6){

        if(this.porukaTemplate){
          this.viewContainerRef.createEmbeddedView(this.porukaTemplate);
        }
      }
      else{
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
    
    console.log(this.templateRef);



    // if(changes["appObelezavanjeOcene"].currentValue != changes["appObelezavanjeOcene"].previousValue){
    //   if(this.appObelezavanjeOcene == undefined || this.appObelezavanjeOcene < 6){
    //     this.color = "#ff0000"
    //   }
    //   else this.color = ""
    // } 
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    //this.element.nativeElement.style.backgroundColor = "#99bbff"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    //this.element.nativeElement.style.backgroundColor = this.color;
  }
}
