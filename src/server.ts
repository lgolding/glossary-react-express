import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from ExpressJS + TypeScript.");
});

app.listen(port, () => {
  console.log(`[Server]: Running on http://localhost:${port}...`);
});
