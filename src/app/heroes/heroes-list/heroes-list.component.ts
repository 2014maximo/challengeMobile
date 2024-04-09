import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonNote, IonIcon, Platform, IonAvatar } from '@ionic/angular/standalone';
import { chevronForward } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Result } from 'src/app/core/models/heroes.model';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonAvatar, CommonModule, RouterLink, IonItem, IonLabel, IonNote, IonIcon],
})
export class HeroesListComponent {

  private platform = inject(Platform);
  language:any;
  @Input() heroe?: Result;
  isIos() {
    return this.platform.is('ios')
  }
  constructor() {
    addIcons({ chevronForward });
  }

}
