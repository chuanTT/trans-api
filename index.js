import axios from "axios";
import express from "express";
import { getHeader, sliceExtendFile } from "./functions.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/translation", async (req, res) => {
  const header = getHeader();
  const query = req.query;
  const url = new URL(
    "https://t11.freetranslations.org/freetranslationsorg.php"
  );
  url.searchParams.append("p1", query?.p1);
  url.searchParams.append("p2", query?.p2);
  url.searchParams.append("p3", query?.p3);
  const data = await axios.get(url, {
    headers: header,
    responseType: "text"
  });
  return res.send(data.data);
});

app.get("/speak", async (req, res) => {
  const header = getHeader();
  const query = req.query;
  const url = new URL(
    "https://www.freetranslations.org/speak.php"
  );
  url.searchParams.append("word", query?.word);
  url.searchParams.append("lang", query?.lang);
  const data = await axios.get(url, {
    headers: header,
    responseType: "arraybuffer"
  });
  const extension = sliceExtendFile(data.headers.get("Content-Type"));
  if (extension) {
    // res.header("Content-Type", data.headers.get("Content-Type"));
    // const download = Buffer.from(data.data, "base64");
    return res.sendFile(data.data);
  }
});

app.listen(3001);
