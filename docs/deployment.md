# Deployment Guide: ClothMarket

This guide walks through deploying the ClothMarket application to **Netlify** (and other modern hosting providers).

---

## 1. Deploying the Frontend to Netlify

ClothMarket's frontend is built with Next.js (App Router). The repository is pre-configured with [`netlify.toml`](file:///c:/Users/Gowdham%20B/Documents/ClothMarket/netlify.toml), so Netlify detects the subfolder and build parameters automatically.

### Option A: Via Netlify Web Dashboard (Recommended)

1. Push your repository to **GitHub** (or GitLab/Bitbucket).
2. Go to [app.netlify.com](https://app.netlify.com) and click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub account and select your **ClothMarket** repository.
4. Netlify will read [`netlify.toml`](file:///c:/Users/Gowdham%20B/Documents/ClothMarket/netlify.toml) automatically:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. *(Optional)* If you have hosted the Spring Boot backend, add an environment variable in **Site configuration > Environment variables**:
   - `BACKEND_URL` = `https://your-backend-api.onrender.com`
6. Click **Deploy Site**. Netlify will build and provide a live `*.netlify.app` URL.

---

### Option B: Via Netlify CLI (Direct from Terminal)

You can also deploy directly from your local machine without pushing to Git:

```powershell
# Navigate to frontend
cd frontend

# Deploy using Netlify CLI
npx netlify deploy --build --prod
```

Follow the interactive prompts to log in and select or create a Netlify site.

---

## 2. Deploying to Vercel (Alternative)

The repository also includes [`vercel.json`](file:///c:/Users/Gowdham%20B/Documents/ClothMarket/vercel.json) at the root:

1. Import your Git repository on [vercel.com/new](https://vercel.com/new).
2. Vercel will automatically detect Next.js with root directory set to `frontend`.
3. Click **Deploy**.

---

## 3. Deploying the Backend API (Spring Boot + PostgreSQL)

*Note: Netlify is a serverless frontend platform and does not host long-running Java JVM containers or relational databases.*

To host the backend API alongside your Netlify frontend:

### Recommended Free/Low-Cost Cloud Hosts:
- **[Render](https://render.com)** (Free tier Web Service + Managed PostgreSQL)
- **[Railway](https://railway.app)** (Deploy Dockerfile + PostgreSQL with 1 click)
- **[Fly.io](https://fly.io)** (Global container hosting)

### Steps with Render / Railway:
1. Create a **PostgreSQL** database on the platform and copy the connection string.
2. Create a new **Web Service** pointing to this repository:
   - **Root directory:** `backend`
   - **Runtime:** `Docker` (uses [`backend/Dockerfile`](file:///c:/Users/Gowdham%20B/Documents/ClothMarket/backend/Dockerfile))
3. Set the environment variables on the backend service:
   - `CLOTHMARKET_DB_URL`: `jdbc:postgresql://<host>:<port>/<dbname>`
   - `CLOTHMARKET_DB_USERNAME`: `<db_username>`
   - `CLOTHMARKET_DB_PASSWORD`: `<db_password>`
   - `PORT`: `8080`
4. Once deployed, copy your backend URL (e.g., `https://clothmarket-api.onrender.com`) and paste it as `BACKEND_URL` in your Netlify site settings.
