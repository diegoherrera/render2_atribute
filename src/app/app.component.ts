import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('contenedorPadre')
  private contenedorPadre: ElementRef;

  @ViewChild('identificador')
  private identificador: ElementRef;
  
  constructor(private rendered: Renderer2) {     
  }

  onClickEvent1() {
    this.rendered.setAttribute(
      this.contenedorPadre.nativeElement, "miatributo", "mi valor");
    this.rendered.setAttribute(
      this.identificador.nativeElement, "value", "Hola mundo");

  }

  onClickEvent2() {
     this.rendered.removeAttribute(
       this.contenedorPadre.nativeElement, "miatributo");
     this.rendered.removeAttribute(
       this.identificador.nativeElement, "value");
    
  }

  onClickEvent3() {
    this.rendered.setProperty(this.identificador.nativeElement,"value","desde propiedad");
    this.rendered.setProperty(this.identificador.nativeElement,"disabled","true");
   
 }

}
