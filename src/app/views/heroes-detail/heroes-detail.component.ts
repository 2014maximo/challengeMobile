import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote, IonTitle, IonAvatar, IonItemGroup, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { Result, RootObject } from 'src/app/core/models/hero.model';
import { HeroesService } from 'src/app/core/services/heroes.service';

import { Device } from '@capacitor/device';
import { ES } from 'src/assets/i18n/es';
import { EN } from 'src/assets/i18n/en';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss'],
  standalone: true,
  imports: [IonList, IonItemGroup, IonTitle, CommonModule, IonHeader, IonToolbar, IonButtons, IonAvatar,IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote],
})
export class HeroesDetailComponent  {

  public hero!: Result;
  public img:string = '';
  language:any;
  public comics:number = 0;
  private heroes = inject(HeroesService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle });
    Device.getLanguageCode().then((resp:any)=> {
      if(resp.value === 'es'){
        this.language = ES;
      } else if(resp.value === 'en'){
        this.language = EN;
      }
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.heroes.getHeroesById(id).subscribe({
      next:(resp:RootObject) => {
        this.hero = resp.data.results[0];
        this.img = resp.data.results[0].thumbnail.path.includes('not_available')? '': resp.data.results[0].thumbnail.path;
        console.log(resp, 'HERO');
      }
    });
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
