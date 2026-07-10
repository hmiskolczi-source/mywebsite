/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  area: string;
  createdAt: string;
}

export interface AcademyLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  course: string;
  createdAt: string;
}

export interface OptimizedImage {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  sizes?: string;
  loading: 'eager' | 'lazy';
  decoding: 'sync' | 'async';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export interface Review {
  id: string;
  title: string;
  quote: string;
  author: string;
  badge?: string;
  tag: 'Time' | 'Painlessness' | 'OlderDemographic' | 'Corrections' | 'NaturalLook' | 'Artistry';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
