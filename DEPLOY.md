# Deployment Guide — Christopher R. Bridge & Co.

## Stack
- **Frontend** → Vercel (static HTML/CSS/JS)
- **Backend API** → Render (Node.js/Express)
- **Database** → MongoDB Atlas (free M0 cluster)

---

## Step 1 — MongoDB Atlas

1. Go to https://cloud.mongodb.com → create a free account
2. Create a **free M0 cluster** (any region)
3. Under **Database Access** → Add a user (e.g. `bridgelaw`) with a strong password
4. Under **Network Access** → Add IP `0.0.0.0/0` (allow all — Render uses dynamic IPs)
5. Click **Connect** → **Drivers** → copy the connection string:
   ```
   mongodb+srv://bridgelaw:<password>@cluster0.xxxxx.mongodb.net/bridgelaw?retryWrites=true&w=majority
   ```

---

## Step 2 — Deploy Backend to Render

1. Push this project to a GitHub repo (if not already)
2. Go to https://render.com → New → **Web Service**
3. Connect your GitHub repo
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Add these **Environment Variables**:

   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | your Atlas connection string |
   | `JWT_SECRET` | a long random string (run: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`) |
   | `ADMIN_USERNAME` | `admin` |
   | `ADMIN_PASSWORD` | a strong password of your choice |
   | `FRONTEND_URL` | your Vercel URL (add after step 3) |
   | `NODE_ENV` | `production` |

6. Click **Deploy** — note your Render URL (e.g. `https://bridge-law-api.onrender.com`)

---

## Step 3 — Seed the Database

Once Render is running, open a terminal in the `backend/` folder:

```bash
cd backend
cp .env.example .env
# Fill in .env with your MONGODB_URI, JWT_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD
npm install
node seed.js
```

This populates MongoDB with all default attorneys, news, practice areas, etc.

---

## Step 4 — Update Frontend API URL

Open `js/config.js` and update the production URL:

```js
return 'https://bridge-law-api.onrender.com/api';  // ← your Render URL
```

---

## Step 5 — Deploy Frontend to Vercel

1. Go to https://vercel.com → New Project
2. Import your GitHub repo
3. **No build command needed** — it's plain HTML
4. **Output Directory**: leave empty (root)
5. Click **Deploy** — note your Vercel URL

---

## Step 6 — Connect Frontend URL in Render

Back in Render → your service → Environment:
- Set `FRONTEND_URL` to your Vercel URL (e.g. `https://bridge-law.vercel.app`)
- Render will redeploy automatically

---

## Admin Access

- URL: `https://your-site.vercel.app/admin/login`
- Username: whatever you set as `ADMIN_USERNAME`
- Password: whatever you set as `ADMIN_PASSWORD`

---

## Local Development

```bash
# Terminal 1 — Backend
cd backend
cp .env.example .env   # fill in values
npm install
npm run dev            # runs on http://localhost:5000

# Terminal 2 — Frontend
cd ..
python -m http.server 3000   # serves on http://localhost:3000
```
