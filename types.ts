import React from 'react';

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  // Fix: React import needed to use React.ReactNode type
  icon: React.ReactNode;
  features: string[];
  category: 'automation' | 'fabrication' | 'mechanical' | 'civil' | 'software';
}

export interface Industry {
  name: string;
  // Fix: React import needed to use React.ReactNode type
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}