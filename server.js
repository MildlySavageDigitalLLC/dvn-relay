import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------
// DVN NODE URL (Motorola device)
// -----------------------------
const DVN_NODE_URL = process.env.DVN_NODE_URL;

// -----------------------------
// READ ENDPOINTS (already working)
// -----------------------------
app.get("/api/status", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/status`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get("/api/blocks", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/blocks`);
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// -----------------------------
// WRITE ENDPOINTS (NEW)
// -----------------------------

// Create Post
app.post("/api/dvt/create-post", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/dvt/create-post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Update Profile
app.post("/api/dvt/update-profile", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/dvt/update-profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// React
app.post("/api/dvt/react", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/dvt/react`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Comment
app.post("/api/dvt/comment", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/dvt/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Report Content
app.post("/api/dvt/report", async (req, res) => {
  try {
    const r = await fetch(`${DVN_NODE_URL}/dvt/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });
    const data = await r.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// -----------------------------
// ROOT
// -----------------------------
app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "DVN Relay",
    endpoints: [
      "/api/status",
      "/api/blocks",
      "/api/dvt/create-post",
      "/api/dvt/update-profile",
      "/api/dvt/react",
      "/api/dvt/comment",
      "/api/dvt/report"
    ]
  });
});

// -----------------------------
// START SERVER
// -----------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`DVN Relay running on port ${PORT}`);
});
