/*
 * finished-analysis-view.module.ts
 * Module for visualization of all aspects of single finished analysis.
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

import { Service } from '../app.service';
import { QuerySchemaDownloadService } from './query-schema-download.service';

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    Service,
    QuerySchemaDownloadService,
  ],
})
export class FinishedAnalysisViewModule { }
