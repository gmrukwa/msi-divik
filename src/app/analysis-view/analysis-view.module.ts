/*
 * analysis-view.module.ts
 * Module responsible for analysis view.
 *
   Copyright 2018 Grzegorz Mrukwa

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
} from '@angular/material';

import { AnalysisViewComponent } from './analysis-view/analysis-view.component';
import { FinishedAnalysesService } from './finished-analyses.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    AnalysisViewComponent,
  ],
  exports: [
    AnalysisViewComponent,
  ],
  providers: [
    FinishedAnalysesService,
  ]
})
export class AnalysisViewModule { }
