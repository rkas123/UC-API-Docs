const myForm = document.querySelector(".tryitform");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let parameter = "";
  const platform = document.querySelector("#platforms").value;
  const start_gte = Date.parse(document.querySelector("#start_gte").value);
  const start_lte = Date.parse(document.querySelector("#start_lte").value);
  const end_gte = Date.parse(document.querySelector("#end_gte").value);
  const end_lte = Date.parse(document.querySelector("#end_lte").value);
  const duration_lte = document.querySelector("#duration_lte").value;
  const duration_gte = document.querySelector("#duration_gte").value;
  const pagenumber = document.querySelector("#pagenumber").value;
  const itemsperpage = document.querySelector("#itemsperpage").value;
  if (platform) {
    parameter += `&platforms=${platform}`;
  }
  if (start_lte) {
    parameter += `&start_lte=${start_lte}`;
  }
  if (start_gte) {
    parameter += `&start_gte=${start_gte}`;
  }
  if (end_gte) {
    parameter += `&end_gte=${end_gte}`;
  }
  if (end_lte) {
    parameter += `&end_lte=${end_lte}`;
  }
  if (duration_gte) {
    parameter += `&duration_gte=${duration_gte}`;
  }
  if (duration_lte) {
    parameter += `&duration_lte=${duration_lte}`;
  }
  if (pagenumber) {
    parameter += `&pagenumber=${pagenumber}`;
  }
  if (itemsperpage) {
    parameter += `&itemsperpage=${itemsperpage}`;
  }
  const len = parameter.length;
  if (parameter.length !== 0) parameter = parameter.slice(1, len);

  const url = `https://uc-api.herokuapp.com/list/fetch?${parameter}`;
  document.querySelector(
    "#urlpara"
  ).innerHTML = `<a target="_blank" href=${url}>${url}</a>`;
});
