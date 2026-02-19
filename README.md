# 🩺 ArogyaVaani: AI-Powered Medical Voice Agents

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ArogyaVaani** (meaning "Voice of Health") is an enterprise-grade AI medical platform that provides 24/7 patient triage and consultation through specialized voice agents. Built with a focus on reliability, medical accuracy, and premium user experience.

---

## ✨ Key Features

-   **🎙️ Low-Latency Voice Interaction**: Powered by **Vapi.ai** for natural, human-like conversations with minimal delay.
-   **👨‍⚕️ 12+ AI Medical Specialists**: Specialized agents for diverse fields including:
    -   General Physician, Pediatrician, Dermatologist, Psychologist, Nutritionist.
    -   Cardiologist, ENT Specialist, Orthopedic, Gynecologist, Dentist.
    -   *Newly Added*: **Neurologist** and **Ophthalmologist**.
-   **🧠 Clinical Intelligence**: Context-aware agents trained on specialized medical prompts to provide accurate summaries and suggestions.
-   **📊 Real-time Medical Reports**: Automatically generates detailed consultation reports after every call.
-   **🔐 Secure & Compliant**: Architecture designed with data privacy in mind, utilizing **Clerk** for robust authentication.
-   **💎 Premium UI/UX**: A state-of-the-art dashboard built with **Framer Motion**, **Lucide Icons**, and a sleek Glassmorphism aesthetic.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)

### Backend & Infrastructure
- **Database**: [Neon PostgreSQL](https://neon.tech/) (Serverless)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Voice AI**: [Vapi.ai](https://vapi.ai/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm / pnpm / yarn
- A Neon PostgreSQL instance
- Vapi.ai API Key
- Clerk API Keys

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-medical-voice-agent.git
   cd ai-medical-voice-agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following (refer to `.env.example`):
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHED_KEY=...
   CLERK_SECRET_KEY=...
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=...
   VAPI_API_KEY=...
   DATABASE_URL=...
   ```

4. **Initialize Database**:
   ```bash
   npx drizzle-kit push
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 🏥 AI Specialists Overview

| Specialist | Description |
| :--- | :--- |
| **General Physician** | Everyday health concerns and common symptoms. |
| **Pediatrician** | Children's health from infants to teens. |
| **Psychologist** | Mental health and emotional well-being. |
| **Neurologist** | Brain, spinal cord, and nerve disorders. |
| **Cardiologist** | Heart health and blood pressure. |
| **Dermatologist** | Skin issues, rashes, and infections. |

