import axios from "axios";
import cors from "cors";
import express from "express";
import fs from "fs";
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
  const url = new URL("https://www.freetranslations.org/wp-admin/admin-ajax.php");
  url.search = new URLSearchParams(query);
  url.searchParams.append('action', 'gt_speak_tts')
  const response = await axios.get(url, {
    headers: header,
    responseType: "stream",
  });
  res.setHeader("Content-Type", response.headers.get("Content-Type"));
  response.data.pipe(res);
});

app.get("/lang-support", async (_req, res) => {
  return res.json(JSON.parse(fs.readFileSync("./lang.json")))
})

app.listen(5000, () => {
  console.log("Server start port 5000");
});
