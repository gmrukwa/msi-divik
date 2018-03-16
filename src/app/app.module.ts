/*
 * app.module.ts
 * Main module of the application.
 *
   Copyright 2017 Sebastian Pustelnik, Grzegorz Mrukwa

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PreparationListComponent } from './preparations/preparation-list/preparation-list.component';
import { PreparationService } from './preparations/shared/preparation.service';
import { PreparationsModule } from './preparations/preparations.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlotlyModule } from './plotly/plotly.module';
import { SpectrumService } from './spectra/shared/spectrum.service';
import { HeatmapService } from './heatmaps/shared/heatmap.service';
import 'hammerjs';
import { DivikService } from './divik-results/shared/divik.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MainPageComponent } from './main-page/main-page.component';
import { UploadService } from './upload/shared/upload.service';
import { UploadComponent } from './upload/upload.component';
import {AnalysisTypesListModule} from "./analysis-types-list/analysis-types-list.module";
import { AnalysisViewModule } from './analysis-view/analysis-view.module';
import { NewAnalysisViewModule } from './new-analysis-view/new-analysis-view.module';

@NgModule({
  providers: [
      HeatmapService,
      SpectrumService,
      DivikService,
      UploadService
  ],
  declarations: [
    AppComponent,
    PreparationListComponent,
    PageNotFoundComponent,
    MainPageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    PlotlyModule,
    BrowserAnimationsModule,
    PreparationsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    routing,
    AnalysisViewModule,
    AnalysisTypesListModule
    NewAnalysisViewModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
