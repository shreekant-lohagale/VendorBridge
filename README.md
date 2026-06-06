# VendorBridge

VendorBridge is a modern, production-grade **Procurement & Vendor Management ERP** platform designed to digitize and automate procurement operations. The platform connects organizations and vendors under a unified workspace, enabling seamless communication and tracking from initial RFQ through to final payment settlement.

## ✨ Features

- **Multi-Role Workspace**: Custom UI/UX, permission limits, and active dashboard panels tailored for **Admins**, **Procurement Officers**, **Vendors**, and **Managers**.
- **Vendor Directory**: Manage partner verified listings, store compliance certificates, and audit trust ratings.
- **RFQ Multi-Step Wizard**: Design procurement checklists, set submission deadlines, and invite specific vendor pools.
- **Quotation Comparison Matrix**: Analyze supplier bids side-by-side. Ranks cost bids, highlights the lowest quote in success green, compares timelines, and calculates price scores.
- **Manager Approval Timelines**: Multi-level cost authorization sign-offs, history logs, and remarks tracking.
- **Purchase Orders (PO)**: Auto-generated PO sheets with vendor acknowledgement triggers.
- **Tax Invoices**: Dynamic CGST/SGST tax calculators (9% each), high-fidelity browser print templates, and simulated email composers.
- **Auditing & Analytics**: Filterable operational transaction audit trails and spend analytics dashboards powered by Recharts.

## 🛠️ Technology Stack

- **Framework**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS
- **State Engine**: Zustand (with localStorage persistence)
- **Forms & Verification**: React Hook Form, Zod
- **Visual Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Routing**: React Router

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shreekant-lohagale/VendorBridge.git
   cd VendorBridge
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Spin up the development server:
   ```bash
   npm run dev
   ```

4. Compile the production bundle:
   ```bash
   npm run build
   ```
