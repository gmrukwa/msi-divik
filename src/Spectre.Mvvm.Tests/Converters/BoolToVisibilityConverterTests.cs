﻿/*
 * BoolToVisibilityConverterTests.cs
 * Tests for BoolToVisibilityConverter.
 * 
   Copyright 2017 Grzegorz Mrukwa

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
using System;
using System.Globalization;
using System.Windows;
using NUnit.Framework;
using Spectre.Mvvm.Converters;

namespace Spectre.Mvvm.Tests.Converters
{
    [TestFixture, Category("MvvmFramework")]
    public class BoolToVisibilityConverterTests : SimpleConverterTestBase<BoolToVisibilityConverter, Visibility, bool>
    {
        [Test]
        public void ConvertTest()
        {
            ToGuiType(true, Visibility.Visible, "Conversion of true did not return Visibility", "True does not evalute to Visible.");

            ToGuiType(false, Visibility.Collapsed, "Conversion of false did not return Visibility", "False does not evalute to Collapsed.");

            Assert.Throws<InvalidCastException>(
                () => Converter.Convert("blah", typeof(Visibility), null, CultureInfo.CurrentCulture),
                "Converted string.");
        }

        [Test]
        public void ConvertBackTest()
        {
            ToBackendType(Visibility.Visible, true, "Conversion of Visibility.Visible did not return bool", "Visibility.Visible does not evalute to true.");

            ToBackendType(Visibility.Collapsed, false, "Conversion of Visibility.Collapsed did not return false", "Visibility.Collapsed does not evalute to false.");

            Assert.Throws<InvalidCastException>(
                () => Converter.ConvertBack("blah", typeof(bool), null, CultureInfo.CurrentCulture),
                "Converted string.");
        }
    }
}