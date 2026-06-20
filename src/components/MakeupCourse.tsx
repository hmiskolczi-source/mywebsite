/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AcademyHero from './academy/AcademyHero';
import AcademyProblem from './academy/AcademyProblem';
import AcademyValueProps from './academy/AcademyValueProps';
import AcademyProcess from './academy/AcademyProcess';
import AcademyFounder from './academy/AcademyFounder';
import AcademyOtherCourses from './academy/AcademyOtherCourses';
import AcademyReviews from './academy/AcademyReviews';
import AcademyFAQ from './academy/AcademyFAQ';
import AcademyPricing from './academy/AcademyPricing';
import AcademyCloser from './academy/AcademyCloser';

export default function MakeupCourse() {
  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Academy Hero Section */}
      <AcademyHero />

      {/* Academy PAS Fork (Problem & Solution) Section */}
      <AcademyProblem />

      {/* Academy Value Propositions and minor features Section */}
      <AcademyValueProps />

      {/* Academy 4-Step Process Pipeline Section */}
      <AcademyProcess />

      {/* Academy Biography / Meet the Founder Section */}
      <AcademyFounder />

      {/* Academy Pricing & Monetization Section */}
      <AcademyPricing />

      {/* Academy Other Programs / Courses Section */}
      <AcademyOtherCourses />

      {/* Academy Student Review / Wall of Love Section */}
      <AcademyReviews />

      {/* Academy FAQ Accordion Section */}
      <AcademyFAQ />

      {/* Academy Closer Form & Registration Section */}
      <AcademyCloser />
    </div>
  );
}
