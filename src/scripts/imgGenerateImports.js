#!/usr/bin/env node

// image optimizations from
// https://developers.google.com/speed/docs/insights/OptimizeImages

const fs = require("fs");
const { images } = require("./images");

const imgDir = "../static/optimized/";

let outStr1 = [];
let outStr2 = ["export.photos = ["];

images.forEach(fileInfo => {
  const file = fileInfo.name;
  const baseFn = file.split(".")[0];
  outStr1.push(`const ${baseFn} = require("${imgDir}${file}");`);
  outStr2.push(`${baseFn}`);
});

outStr2.push("]");
const arr = outStr1.concat(outStr2);
const str = JSON.stringify(arr, null, 4);
console.log(str);

fs.writeFile("photos.js", str, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File written!");
  }
});
