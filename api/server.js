// api/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const OPENAI_KEY = process.env.OPENAI_API_KEY;

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const res = await fetch("https://davicombs-production.up.railway.app/chat", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
        model: "gpt-4.1",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "ALPACA is speechless...";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server broke." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "../public")));
