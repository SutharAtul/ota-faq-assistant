import { createApp } from './app.js';

const PORT = Number(process.env.PORT ?? 3000);

export function startServer(): void {
  const app = createApp();
  console.log(`[${app.name}] ready to listen on port ${PORT}`);
}

startServer();

