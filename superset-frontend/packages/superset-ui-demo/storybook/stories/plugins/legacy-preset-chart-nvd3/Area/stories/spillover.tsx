/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { SuperChart } from '@superset-ui/core';
import dummyDatasource from '../../../../../shared/dummyDatasource';
import data from '../data-spillover';

export const spillover = () => (
  <SuperChart
    chartType="area"
    datasource={dummyDatasource}
    width={800}
    height={400}
    queriesData={[{ data }]}
    formData={{
      bottomMargin: 'auto',
      colorScheme: 'techminers',
      contribution: false,
      groupby: ['region'],
      lineInterpolation: 'linear',
      metrics: ['sum__SP_POP_TOTL'],
      richTooltip: true,
      showBrush: 'auto',
      showControls: false,
      showLegend: true,
      vizType: 'area',
      xAxisFormat: '%b',
      xAxisLabel: '',
      xAxisShowminmax: false,
      xTicksLayout: 'auto',
      yAxisBounds: [null, null],
      yAxisFormat: ',d',
      yLogScale: false,
    }}
  />
);
