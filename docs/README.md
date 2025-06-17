This documentation provides:
- Comprehensive overview of the application
- Detailed breakdown of all dashboard sections
- Technical stack information
- Setup instructions
- Project structure
- Contributing guidelines# Brewery Dashboard Documentation

A comprehensive brewery management system built with Next.js and TypeScript.

## Overview

The Brewery Dashboard is a modern web application designed to provide real-time monitoring and management capabilities for brewery operations. It includes various dashboards for different aspects of brewery management, from production to distribution.

## Core Components

### 1. Main Dashboard Layout
- Responsive sidebar navigation
- Real-time alert system
- Section-specific dashboards
- Modern UI components using shadcn/ui

### 2. Dashboard Sections

#### Overview Dashboard
- System alerts (critical and warning)
- Daily production statistics
- Active batches information
- Equipment status
- Quality metrics

#### Production Dashboard
- Real-time brewing status
- Temperature control monitoring
- Batch progress tracking
- Production timeline
- Recipe management

#### Quality Dashboard
- Recent test results
- Quality metrics
- Laboratory schedule
- Sensory evaluation
- Compliance tracking

#### Inventory Dashboard
- Real-time inventory levels
- Low stock alerts
- Purchase orders and deliveries
- Inventory alerts
- Stock management

#### Equipment Dashboard
- Equipment status monitoring
- Maintenance schedule
- Equipment performance metrics
- Calibration tracking
- Maintenance history

#### Distribution Dashboard
- Pending orders tracking
- Delivery schedule
- Shipping analytics
- Route optimization
- Distribution metrics

#### Analytics Dashboard
- Monthly production analysis
- Revenue tracking
- Efficiency metrics
- Waste reduction analysis
- Production trends
- Cost analysis
- Performance reports

#### Staff Dashboard
- Current shift management
- Shift schedule
- Training schedule
- Performance metrics
- Certifications and compliance

## Technical Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (LTS version)
- npm or pnpm

### Installation
```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Open http://localhost:3000 in your browser



brewery-dashboard/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions and shared logic
├── public/            # Static assets
└── styles/           # Global styles and theme configuration
