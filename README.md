# TRBlink — Connecting Education & Careers

منصة رقمية تربط الطلبة بالتربصات وفرص العمل والتكوينات المهنية في الجزائر. Arabic-first (RTL) with French support, built on React + Vite + Tailwind + Supabase.

## Roles

| Role | Access |
| --- | --- |
| Student | فرص / تربصات، عروض عمل، ورشات، طلبات، مفضلة، ملف، شهادات، إشعارات، إعدادات |
| Teacher | الطلبة، متابعة التربصات، التقييمات، الورشات، الأرباح، الملف، الإشعارات |
| Company | العروض، المتقدمون والترشحات، الملف، الإشعارات، الإعدادات |
| Admin | نظرة عامة، المستخدمون، الأساتذة، المؤسسات، الكتالوج (جامعات/كليات/تخصصات/مستويات)، الفرص، الطلبات، الورشات، المدفوعات، الشهادات، الإعدادات |

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` (see `.env.example` — do not commit real keys):

```
VITE_SUPABASE_URL=https://itqzbcoroehkoofmqmys.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

3. Open the Supabase Dashboard → **SQL Editor** and run the migrations **in order**:

```
supabase/migrations/0000_cleanup.sql
supabase/migrations/0001_catalog.sql
supabase/migrations/0002_profiles_roles.sql
supabase/migrations/0003_opportunities.sql
supabase/migrations/0004_applications.sql
supabase/migrations/0005_workshops.sql
supabase/migrations/0006_notifications_payments.sql
supabase/migrations/0007_rls.sql
supabase/migrations/0008_storage.sql
supabase/migrations/0009_seed.sql
```

4. Run the app:

```bash
npm run dev
```

## Demo accounts (seed)

- Admin — `admin@trblink.dz` / `Admin123!`
- Student — `student@trblink.dz` / `Student123!`
- Teacher — `teacher@trblink.dz` / `Teacher123!` (status `pending` until approved by admin — part of the demo flow)
- Company — `company@trblink.dz` / `Company123!`

## Demo workflows

1. **Student applies → Company accepts → Certificate**
   Login as student → apply to an opportunity → login as company → open applicants → accept → the student receives a notification → admin issues a certificate → student verifies it on `/certificates/:id`.

2. **Teacher approval (RLS demo)**
   Register as teacher → admin approves in `Admin → Teachers` → teacher gets push notification → full access unlocked.

3. **Workshop payment split**
   Student registers for a (paid) workshop → a `payments` row is created with platform fee + instructor share → teacher sees earnings; admin manages payments.

4. **Catalog / RLS**
   Admin manages universities/faculties/specializations/levels; only admins can delete (audit-logged). Regular users can only edit their own profile via the `update_own_profile` helper.

## Scripts

```bash
npm run dev        # Vite dev server
npm run typecheck  # tsc --noEmit
npm run build      # type-check + production build
npm run preview    # preview the production build
```

## Opening from `index.html` (single file)

The build uses `vite-plugin-singlefile` + relative paths + `HashRouter`, so the output is a
self-contained static site you can open with a double-click:

1. `npm run build`
2. Open `dist/index.html` in the browser (keep `logo.jpg` next to it).

## Deploy to Netlify (no config needed)

Because routing is hash-based and the build is a single file:

- **Option A — Netlify Drop:** drag the whole `dist` folder onto https://app.netlify.com/drop
- **Option B — Git/Cli:** set **Build command** to `npm run build` and **Publish directory** to `dist`

No redirects, no `_redirects` file required.

> Note: signing in / data require the Supabase migrations to be applied (see Setup).

## Tech stack

React 18, TypeScript (strict), Vite, Tailwind CSS (RTL, Cairo font), React Router, TanStack Query, React Hook Form + Zod, i18next (ar/fr), Recharts, Radix UI, Supabase (Auth + Postgres + RLS + Storage), sonner.