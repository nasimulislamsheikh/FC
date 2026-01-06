
// Added import for React to ensure the React namespace is available for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}
