import axios from "axios";
import cors from "cors";
import express from "express";
import { funTmpnum, getHeader } from "./functions.js";
const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/translation", async (req, res) => {
  const query = req.query;
  const domain = `t${funTmpnum(query?.p2)}.freetranslations.org`
  const header = getHeader(domain);
  const url = new URL(
    `https://${domain}/freetranslationsorg.php`
  );
  url.search = new URLSearchParams(query);
  const data = await axios.get(url, {
    headers: header,
    responseType: "text",
  });
  console.log(domain)
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
