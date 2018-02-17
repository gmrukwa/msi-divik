/*
 * analysis-form.component.ts
 * Component for choosing the preparation and analysis for it.
 *
 Copyright 2018 Roman Lisak

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

import { Component, OnInit } from '@angular/core';
import { PreparationService } from '../preparations/shared/preparation.service';
import { Preparation } from '../preparations/shared/preparation';
import { IAnalysisData } from './IAnalysisData';
import { HttpClient } from '@angular/common/http';
import { Service } from '../app.service';
import { environment } from '../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-analysis-form',
  templateUrl: './analysis-form.component.html',
  styleUrls: ['./analysis-form.component.css'],
  providers: [PreparationService]
})
export class AnalysisFormComponent implements OnInit {
  public AnalysisData: IAnalysisData;
  AnalysisName = '';
  preparations: Preparation[] = [];
  ChosenPreparation: string;
  ChosenAnalysis: string;
  OptionsVisible: boolean;
  MaxK = 10;
  Level = 3;
  UseLevels = true;
  PercentSizeLimit = 0.001;
  FeaturePreservationLimit = 0.05;
  Metric: Array<string>;
  MaxComponentsForDecomposition = 10;
  KMeansMaxIters = 100;
  ChosenMetric: string;

  public AnalysisToChoose = [
    { value: 'gmm', display: 'GMM' },
    { value: 'divik', display: 'DiviK' }
  ];

  constructor(private _preparationService: PreparationService, private http: HttpClient) {
  }

  ngOnInit() {
    this._preparationService
      .getAll()
      .subscribe(p => this.preparations = p);
    this.OptionsVisible = false;
    this.AnalysisData = {
      DatasetName: '',
      AnalysisName: '',
      MaxK: 10,
      Level: 3,
      UseLevels: true,
      PercentSizeLimit: 0.001,
      FeaturePreservationLimit: 0.05,
      Metric: '',
      MaxComponentsForDecomposition: 10,
      KmeansMaxIters: 100
    };
    this.Metric = ['euclidean', 'jaccard', 'cosine', 'correlation'];
  }

  public save() {
    this.AnalysisData = {
      DatasetName: this.ChosenPreparation,
      AnalysisName: this.ChosenAnalysis,
      MaxK: this.MaxK,
      Level: this.Level,
      UseLevels: this.UseLevels,
      PercentSizeLimit: this.PercentSizeLimit,
      FeaturePreservationLimit: this.FeaturePreservationLimit,
      Metric: this.ChosenMetric,
      MaxComponentsForDecomposition: this.MaxComponentsForDecomposition,
      KmeansMaxIters: this.KMeansMaxIters
    };


    console.log('name', this.AnalysisData.DatasetName);
    console.log('AnalysisName', this.AnalysisData.AnalysisName);
    console.log('MaxK', this.AnalysisData.MaxK);
    console.log('Level', this.AnalysisData.Level);
    console.log('UseLevels', this.AnalysisData.UseLevels);
    console.log('PercentSizeLimit', this.AnalysisData.PercentSizeLimit);
    console.log('FeaturePreservationLimit', this.AnalysisData.FeaturePreservationLimit);
    console.log('Metric', this.AnalysisData.Metric);
    console.log('MaxComponentsForDecomposition', this.AnalysisData.MaxComponentsForDecomposition);
    console.log('KMeansMaxIters', this.AnalysisData.KmeansMaxIters);

    const url = `${environment.apiUrl}:2003/schedule/divik`;
    this.http.post(url, {
        title: 'ChosenAnalysis',
        body: this.AnalysisData
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured', err);
        }
      );
  }
}