
export const funTmpnum = (target_lang) => {
  let tmpnum;
  do {
    if (
      target_lang == "ay" ||
      target_lang == "bm" ||
      target_lang == "be" ||
      target_lang == "bn" ||
      target_lang == "bho" ||
      target_lang == "ceb" ||
      target_lang == "co" ||
      target_lang == "dv" ||
      target_lang == "doi" ||
      target_lang == "eo" ||
      target_lang == "ee" ||
      target_lang == "fy" ||
      target_lang == "gn" ||
      target_lang == "ha" ||
      target_lang == "haw" ||
      target_lang == "ig" ||
      target_lang == "ilo" ||
      target_lang == "jv" ||
      target_lang == "rw" ||
      target_lang == "gom" ||
      target_lang == "kri" ||
      target_lang == "ckb" ||
      target_lang == "la" ||
      target_lang == "ln" ||
      target_lang == "lg" ||
      target_lang == "lb" ||
      target_lang == "mai" ||
      target_lang == "mni-Mtei" ||
      target_lang == "lus" ||
      target_lang == "ny" ||
      target_lang == "or" ||
      target_lang == "om" ||
      target_lang == "qu" ||
      target_lang == "sa" ||
      target_lang == "gd" ||
      target_lang == "nso" ||
      target_lang == "st" ||
      target_lang == "sn" ||
      target_lang == "sd" ||
      target_lang == "si" ||
      target_lang == "su" ||
      target_lang == "tg" ||
      target_lang == "ti" ||
      target_lang == "ts" ||
      target_lang == "ak" ||
      target_lang == "xh" ||
      target_lang == "yi" ||
      target_lang == "yo"
    ) {
      tmpnum = Math.floor(Math.random() * 12) + 1;
    } else {
      tmpnum = Math.floor(Math.random() * 18) + 1;
    }
  } while ([17, 18, 15, 14, 13].includes(tmpnum));
  return tmpnum;
};

export const getHeader = (domain) => {
  const headers = {
    "sec-fetch-user": "?1",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-site": "none",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "cache-control": "max-age=0",
    authority: domain,
    "upgrade-insecure-requests": "1",
    "accept-language": "en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  };
  return headers
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
