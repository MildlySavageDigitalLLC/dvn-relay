import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const DVN_URL = "https://struck-elvis-rounds-bobby.trycloudflare.com";

app.get("/api/status", async (req, res) => {
  try {
    const r = await fetch(`${DVN_URL}/status`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get("/api/blocks", async (req, res) => {
  try {
    const r = await fetch(`${DVN_URL}/blocks`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "DVN Relay",
    endpoints: ["/api/status", "/api/blocks"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DVN Relay running on port ${PORT}`);
});
