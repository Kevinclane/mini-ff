import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EncounterComponent } from './encounter/encounter.component';
import { CombatantsComponent } from './combatants/combatants.component';
import { CombatantComponent } from './combatant/combatant.component';
import { ImageAnimationComponent } from './image-animation/image-animation.component';
import { ResourceBarComponent } from './resource-bar/resource-bar.component';
import { CharactersService } from './psudoServer/services/charactersService';
import { CharactersRepository } from './psudoServer/repos/charactersRepo';
import { CharactersController } from './psudoServer/controllers/charactersController';
import { InitializationController } from './psudoServer/controllers/initializationController';
import { EnemiesRepository } from './psudoServer/repos/enemiesRepo';
import { EnemiesService } from './psudoServer/services/enemiesService';
import { EncountersController } from './psudoServer/controllers/encountersController';
import { EncountersService } from './psudoServer/services/encountersService';
import { CombatantInputComponent } from './combatant-input/combatant-input.component';
import { ActionFactory } from './functionalityFiles/actionFactory';
import { EncounterConsoleComponent } from './encounter-console/encounter-console.component';
import GameTimer from './functionalityFiles/gameTimer';

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    CombatantsComponent,
    CombatantComponent,
    ImageAnimationComponent,
    ResourceBarComponent,
    CombatantInputComponent,
    EncounterConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    InitializationController,
    CharactersController,
    CharactersService,
    CharactersRepository,
    EncountersController,
    EncountersService,
    EnemiesService,
    EnemiesRepository,
    ActionFactory,
    GameTimer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
