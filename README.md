# Connecting React Frontend to Express API Using Axios

This project demonstrates how to connect a React frontend to an Express.js backend using Axios. The backend exposes a simple `/api/products` endpoint that returns a static list of products. The frontend fetches that list when the application loads and renders the products in a simple card layout with loading and error states.

## Project Structure

- `backend/` – Express API serving product data
- `frontend/` – React application created with Vite

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or later recommended)

## Setup

1. Install backend dependencies:

   ```powershell
   cd "backend"
   npm install
   ```

2. Install frontend dependencies:

   ```powershell
   cd "../frontend"
   npm install
   ```

## Running the Applications

1. Start the Express API:

   ```powershell
   cd "backend"
   npm run dev
   ```

   The API listens on `http://localhost:5000`.

2. In a separate terminal, start the React app:

   ```powershell
   cd "frontend"
   npm run dev
   ```

   Vite will print a local development URL (default `http://localhost:5173`).

The React app automatically fetches data from `http://localhost:5000/api/products`. To change the API location, create an `.env` file in `frontend/` with `VITE_API_URL="http://<your-api-host>/api/products"`.

## Testing the Integration

1. Ensure the API server is running and returning JSON from `http://localhost:5000/api/products`.
2. Open the frontend URL in your browser. The product cards should appear once the data is fetched. Loading and error messages will appear if the API is slow or unavailable.

## Further Exploration

- Replace the static array in `backend/server.js` with a database query or external API call.
- Extend the frontend to allow creating or updating products by adding POST/PUT requests.
- Add automated tests (e.g., using Jest or Vitest) for both client and server logic.
