const {
  gstinAll,
  gstinDeptid,
  gstinNRI_id,
  gstinNormal,
  gstinOIDAR,
  gstinTCS,
  gstinTDS,
  gstinUnbody,
} = require("./regexPatterns");

const allGstNumbValidator = async (usergst) => {
  const result = gstinAll.test(usergst);
  if (result) return true;
  else return false;
};
const deptidGstNumberValidator = async (usergst) => {
  const result = gstinDeptid.test(usergst);
  if (result) return true;
  else return false;
};

const nriidGstNumbValidator = async (usergst) => {
  const result = gstinNRI_id.test(usergst);
  if (result) return true;
  else return false;
};

const normalGstNumbValidator = async (usergst) => {
  const result = gstinNormal.test(usergst);
  if (result) return true;
  else return false;
};

const unbodyGstNumbValidator = async (usergst) => {
  const result = gstinUnbody.test(usergst);
  if (result) return true;
  else return false;
};

const tdsGstNumbValidator = async (usergst) => {
  const result = gstinTDS.test(usergst);
  if (result) return true;
  else return false;
};

const tcsGstNumbValidator = async (usergst) => {
  const result = gstinTCS.test(usergst);
  if (result) return true;
  else return false;
};

const oidarGstNumbValidator = async (usergst) => {
  const result = gstinOIDAR.test(usergst);
  if (result) return true;
  else return false;
};

module.exports = {
  allGstNumbValidator,
  tcsGstNumbValidator,
  tdsGstNumbValidator,
  oidarGstNumbValidator,
  normalGstNumbValidator,
  nriidGstNumbValidator,
  unbodyGstNumbValidator,
  deptidGstNumberValidator,
};
