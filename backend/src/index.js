import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

app.get("/health",(req, res) => {
  res.json({status: "ok"})
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend running on port ${port}`));

