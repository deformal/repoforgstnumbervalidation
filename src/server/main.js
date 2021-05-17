const bytenode = require("bytenode");
const prompts = require("prompts");
const jsson2csv = require("json2csv");
const csv2json = require("csvtojson");
const {
  allGstNumbValidator,
  nriidGstNumbValidator,
  normalGstNumbValidator,
  oidarGstNumbValidator,
  deptidGstNumberValidator,
  tcsGstNumbValidator,
  tdsGstNumbValidator,
  unbodyGstNumbValidator,
} = require("../jsmodules/validators");

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
app.post("/normalgstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await normalGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});

app.post("/deptidgstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await deptidGstNumberValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});
app.post("/nriidgstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await nriidGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});
app.post("/oidargstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await oidarGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});
app.post("/tcsgstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await tcsGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});
app.post("/tdsgstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await tdsGstNumbValidator(usergst);
  if (result)
    return res
      .status(200)
      .json({ status: "OK", msg: `Your gst number ${usergst} is correct` });
  return res.status(400).json({
    status: "bad",
    msg: `your gst number ${usergst} is in incorrect format`,
  });
});
app.post("/unbodygstValidator", async (req, res) => {
  const usergst = req.body.gstnumber;
  const result = await unbodyGstNumbValidator(usergst);
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
