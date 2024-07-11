import UserAgent from "user-agents";

export const getHeader = () => {
  const userAgent = new UserAgent();
  const headers = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: "t11.freetranslations.org",
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    "user-agent": userAgent.toString(),
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  };
  return headers;
};

export const sliceExtendFile = (name) => {
  let str = "";

  if (name) {
    const newArrName = String(name).split("/");
    if (newArrName.length > 1) {
      str = newArrName[newArrName.length - 1];
    }
  }

  return str;
};

export const translateLanguage = (target_lang) => {
  switch (target_lang) {
    case "zh-CHS":
      target_lang = "zh-CN";
      break;
    case "zh-CHT":
      target_lang = "zh-TW";
      break;

    case "nb":
      target_lang = "no";
      break;

    case "kmr":
      target_lang = "ku";
      break;

    case "mn-Cyrl":
      target_lang = "mn";
      break;

    case "mww":
      target_lang = "hmn";
      break;
  }
};
