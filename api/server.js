// api/server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const OPENAI_KEY = process.env.OPENAI_API_KEY; // set this on Railway

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Example with OpenAI API — change model if you want
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: message }],
      }),
    });

 const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, }); 
 const response = await openai.responses.create({ prompt: { "id": "pmpt_68ddf7ee5ff48196b76b973347e938c90ff3f32be50cf86d", "version": "1" } });

    
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "ALPACA is speechless...";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something broke on the server." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
