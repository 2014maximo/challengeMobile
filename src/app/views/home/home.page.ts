import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';

import { HeroesService } from '../../core/services/heroes.service';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

import { Device } from '@capacitor/device';
import { ES } from 'src/assets/i18n/es';
import { EN } from 'src/assets/i18n/en';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, HeroesListComponent],
})
export class HomePage {
  private heroes = inject(HeroesService);
  language:any;
  characteres:any[]=[];
  constructor() {
    this.getHeroes();
    Device.getLanguageCode().then((resp:any)=> {
      console.log(resp, 'RESP');
      if(resp.value === 'es'){
        this.language = ES;
      } else if(resp.value === 'en'){
        this.language = EN;
      }
    });
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getHeroes(){
    this.heroes.getHeroes().subscribe({
      next:(res:any) => {
        this.characteres = res.data.results;
        console.log(res, 'RESPUESTA')
      }
    });
  }
}
