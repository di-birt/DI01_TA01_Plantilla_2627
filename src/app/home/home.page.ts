import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonBadge, IonAvatar, IonItem, IonList, IonNote, IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel],
})
export class HomePage {
  constructor() {}

  // INTERPOLACIÓN: Valores que se mostrarán en el template con {{ }}

  
  // PROPERTY BINDING: Variables que se vinculan a propiedades de componentes con [ ]


  // EVENT BINDING: 


  // ION-LIST y lógica



}