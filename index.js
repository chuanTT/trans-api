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
  url.search = new URLSearchParams(query);
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
  url.search = new URLSearchParams(query);
  const data = await axios.get(url, {
    headers: header,
    responseType: "arraybuffer"
  });
  const extension = sliceExtendFile(data.headers.get("Content-Type"));
  if (extension) {
    req.headers = data.headers
    return res.send(data.data);
  }
});

app.listen(5000, () => {
  console.log('Server start port 5000')
});
