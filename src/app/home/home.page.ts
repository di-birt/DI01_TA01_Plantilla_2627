import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonNote, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonBadge, IonAvatar, IonItem, IonList, IonNote, IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel],
})
export class HomePage {
  constructor() {}

  // INTERPOLACIÓN: Valores que se mostrarán en el template con {{ }}
  titulo: string = "Segunda Aplicación";
  descripcion: string = "Aprendiendo Ionic y Angular";

  
  // PROPERTY BINDING: Variables que se vinculan a propiedades de componentes con [ ]
  colorBoton: string = "primary";
  botonDeshabilitado: boolean = false;


  // EVENT BINDING: 
  contador: number = 0;

  incrementar():void{
    this.contador++;
    this.colorBoton = this.contador >= 5 ? "danger" : "primary";
  }

  resetear():void{
    this.contador=0;
    this.colorBoton="primary";
  }

  // ION-LIST y lógica
  alumnos = [
    {nombre: "Ana Garcia", nota: 9},
    {nombre: "Luis Martínez", nota: 7},
    {nombre: "María López", nota: 8},
    {nombre: "Pedro Sánchez", nota: 5},
  ];

  colorNota (nota: number): string {
    if (nota >= 9) return "success";
    if (nota >=6) return "warning";
    return "danger";
  }



}