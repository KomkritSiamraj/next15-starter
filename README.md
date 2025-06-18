# Next.js 15 Starter Project

โปรเจคเริ่มต้นสำหรับ Next.js 15 ที่ใช้ Bun เป็น package manager

## 🚀 การติดตั้ง

```bash
# ติดตั้ง dependencies
bun install

# รัน development server
bun dev

# build สำหรับ production
bun build

# รัน production server
bun start
```

## 📁 โครงสร้างโปรเจค

```
.
├── src/
│   ├── app/                 # App router และ pages
│   ├── components/          # Shared components
│   ├── lib/                 # Utility functions และ configurations
│   ├── styles/             # Global styles
│   ├── mocks/              # API mocking handlers
│   │   ├── handlers/       # MSW request handlers
│   │   └── browser.ts      # MSW browser setup
│   └── features/           # Feature-based modules
│       ├── auth/           # Authentication feature
│       │   ├── components/ # Auth-specific components
│       │   ├── hooks/      # Auth-specific hooks
│       │   ├── api/        # Auth API endpoints
│       │   └── types/      # Auth-related types
│       └── [feature]/      # Other features following same pattern
├── public/                 # Static files
├── components.json         # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🏗️ Modular Architecture

โปรเจคนี้ถูกออกแบบด้วยแนวคิด Modular Architecture เพื่อให้:

- **แยกความรับผิดชอบ** - แต่ละ feature มีการจัดการโค้ดของตัวเอง
- **ลดการพึ่งพา** - ลดการ import ข้าม feature
- **ง่ายต่อการบำรุงรักษา** - ทีมสามารถทำงานบน feature เดียวกันได้โดยไม่กระทบส่วนอื่น

### ตัวอย่างโครงสร้าง Feature Module

```
features/auth/
├── components/     # Components เฉพาะของ auth
├── hooks/         # Custom hooks สำหรับ auth
├── api/           # API endpoints และ handlers
├── types/         # TypeScript types และ interfaces
└── index.ts       # Public API ของ feature
```

### การใช้งาน Feature Module

```typescript
// ตัวอย่างการ import จาก feature module
import { useAuth } from '@/features/auth';
import { LoginForm } from '@/features/auth/components';
```

## 🎭 API Mocking

โปรเจคนี้ใช้ [MSW (Mock Service Worker)](https://mswjs.io/) สำหรับการ mock API requests ในระหว่างการพัฒนา

### โครงสร้าง Mocks

```
src/mocks/
├── handlers/              # API request handlers
│   ├── auth.ts           # Auth-related mocks
│   └── [feature].ts      # Other feature mocks
└── browser.ts            # MSW browser setup
```

### การใช้งาน Mocks

```typescript
// ตัวอย่างการสร้าง mock handler
import { http, HttpResponse } from 'msw'

export const authHandlers = [
  http.post('/api/auth/login', () => {
    return HttpResponse.json({
      user: { id: 1, name: 'Test User' },
      token: 'mock-jwt-token'
    })
  })
]
```

### การเปิดใช้งาน Mocks

```typescript
// src/app/layout.tsx
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@/mocks/browser')
  worker.start()
}
```

## ✨ Features และ Libraries ที่สำคัญ

### UI และ Styling
- **shadcn/ui** - Component library ที่ใช้ Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Internationalization
- **next-intl** - Internationalization สำหรับ Next.js

### State Management & Data Fetching
- **TanStack Query** - Data fetching และ caching

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **MSW** - API mocking

## 🔧 การตั้งค่าเพิ่มเติม

### Environment Variables
สร้างไฟล์ `.env.local` และกำหนดค่าต่อไปนี้:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Theme Configuration
โปรเจคนี้ใช้ `next-themes` สำหรับ dark/light mode สามารถปรับแต่งได้ใน `src/lib/theme.ts`

## 📝 License

MIT
