import axios from "axios";
import express from "express";
import { getHeader } from "./functions.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/translation", async (req, res) => {
  const header = getHeader();
  const query = req.query;
  const url = new URL(
    "https://t11.freetranslations.org/freetranslationsorg.php"
  );
  url.search = new URLSearchParams(query);
  const data = await axios.get(url, {
    headers: header,
    responseType: "text",
  });
  return res.send(data.data);
});

app.get("/speak", async (req, res) => {
  const header = getHeader();
  const query = req.query;
  const url = new URL("https://www.freetranslations.org/speak.php");
  url.search = new URLSearchParams(query);
  const response = await axios.get(url, {
    headers: header,
    responseType: "stream",
  });
  res.setHeader("Content-Type", response.headers.get("Content-Type"));
  response.data.pipe(res);
});

app.listen(5000, () => {
  console.log("Server start port 5000");
});
