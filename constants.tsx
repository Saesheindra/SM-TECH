
import React from 'react';
import { ServiceCard, Industry, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'SAP Solutions', href: '#sap' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'automation',
    title: 'Engineering Automation',
    description: 'Advanced PLC, SCADA, and Industry 4.0 integration for smart manufacturing.',
    category: 'automation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['PLC Programming', 'SCADA Implementation', 'Robotics Integration', 'IoT Solutions'],
  },
  {
    id: 'fabrication',
    title: 'Fabrication Works',
    description: 'High-precision steel structures, pressure vessels, and custom metal fabrication.',
    category: 'fabrication',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Steel Structures', 'Pressure Vessels', 'Industrial Piping', 'Custom Welding'],
  },
  {
    id: 'mechanical',
    title: 'Mechanical Works',
    description: 'Specialized industrial machinery installation, maintenance, and precision machining.',
    category: 'mechanical',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Machine Installation', 'Preventive Maintenance', 'HVAC Systems', 'Precision Machining'],
  },
  {
    id: 'civil',
    title: 'Civil Works',
    description: 'Industrial infrastructure development, factory construction, and site preparation.',
    category: 'civil',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Factory Construction', 'Structural Engineering', 'Foundation Works', 'Drainage Systems'],
  },
  {
    id: 'software',
    title: 'SAP Software Solutions',
    description: 'Comprehensive SAP implementation, customization, and digital transformation for industry.',
    category: 'software',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['SAP S/4HANA', 'Business One', 'MES Integration', 'Supply Chain Management'],
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Food & Beverage', icon: '🍔' },
  { name: 'Pharmaceutical', icon: '💊' },
  { name: 'Energy', icon: '🔋' },
  { name: 'Logistics', icon: '📦' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Electronics', icon: '💻' },
];
