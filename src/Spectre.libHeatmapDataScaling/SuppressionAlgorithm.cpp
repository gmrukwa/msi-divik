/*
* SupressionAlgorithm.cpp
* Class with suppresion algorithm implementation for contrast enhancement.
*
Copyright 2017 Daniel Babiak
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

#include "SuppressionAlgorithm.h"
#include <algorithm>

namespace Spectre::libHeatmapDataScaling
{
	SuppressionAlgorithm::SuppressionAlgorithm(double _topPercent)
		: topPercent(_topPercent) { }

	std::vector<double> *SuppressionAlgorithm::scaleData(const gsl::span<double> intensities)
	{
		std::vector<double> *newIntensities = new std::vector<double>();
		newIntensities->reserve(intensities.size());
		double maxIntensity = *max_element(std::begin(intensities), std::end(intensities));
		double cutoff = quantile(intensities, 1 - topPercent);
		for (int i = 0; i < newIntensities->size(); i++)
		{
			if (intensities[i] > cutoff)
				(*newIntensities)[i] = cutoff;
			(*newIntensities)[i] = maxIntensity * intensities[i] / cutoff;
		}
		return newIntensities;
	}

	double SuppressionAlgorithm::quantile(gsl::span<double> intensities, const double prob)
	{
		size_t size = intensities.size();
		double index = 1 + (size - 1) * prob;
		int lo = (int)floor(index);
		int hi = (int)ceil(index);
		std::sort(intensities.begin(), intensities.end());
		double qs = intensities[lo - 1];
		if ((index > lo) && (intensities[hi - 1] != qs))
		{
			double h = index - lo;
			qs = (1 - h) * qs + h * intensities[hi - 1];
		}
		return qs;
	}
}