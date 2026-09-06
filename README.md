# ClothMarket

ClothMarket is a fashion deal discovery layer: search once, compare clothing offers across stores, inspect price context, then continue to the originating retailer.

## Run locally

```powershell
cd frontend; npm install; npm run dev
docker compose up -d postgres
cd backend; .\mvnw.cmd spring-boot:run
```

The frontend uses demo data today. Backend mock endpoints are available under `/api/v1`; no retailer API or payment integration is claimed.

## Structure

- `frontend/` — Next.js customer experience
- `backend/` — Spring Boot modular-monolith API foundation
- `docs/` — product, UI/UX, architecture, and roadmap documentation
