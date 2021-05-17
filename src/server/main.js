const bytenode = require("bytenode");
const prompts = require("prompts");
const jsson2csv = require("json2csv");
const csv2json = require("csvtojson");
const { allGstNumbValidator } = require("../jsmodules/validators");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.text());

app.post("/gstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await allGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});

app.listen("3030", (req, res) => {
  console.log("server started");
});
