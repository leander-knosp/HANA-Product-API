# Stage 1: Build React frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/webapp
COPY webapp/package*.json ./
RUN npm ci
COPY webapp/ ./
RUN npm run build

# Stage 2: Run Express backend + serve built frontend
FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --omit=dev
COPY backend/ ./
COPY --from=frontend-build /app/webapp/dist ./public
EXPOSE 3000
CMD ["node", "server.js"]
