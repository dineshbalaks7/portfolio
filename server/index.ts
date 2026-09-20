import express, { type Request, type Response } from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public (whether run from dist/ or server/)
  const localPublic = path.resolve(currentDir, "public");
  const distPublic = path.resolve(currentDir, "..", "dist", "public");
  const staticPath = fs.existsSync(localPublic) ? localPublic : distPublic;

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res
        .status(404)
        .send("Build output not found. Please run 'npm run build' first.");
    }
  });

  const port = Number(process.env.PORT) || 5000;

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
