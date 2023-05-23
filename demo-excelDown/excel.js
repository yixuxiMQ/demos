const oBtn = document.getElementById("btnClick");
const oTb = document.getElementsByClassName("table")[0];
const tbData = [
  {
    name: "tober",
    age: 26,
    height: 180,
  },
  {
    name: "mibao",
    age: 1.5,
    height: 80,
  },
  {
    name: "yixuxi",
    age: 26,
    height: 180,
  },
];
oBtn.addEventListener(
  "click",
  function (e) {
    let str = "姓名,年龄,身高\n";
    tbData.forEach((item) => {
      for (const key in item) {
        str += item[key] + `\t,`;
      }
      str += `\n`;
    });
    const uri = "data:text/csv;charset=utf-8,\ufeff" + str;
    const excel = document.createElement("a");
    excel.href = uri;
    excel.download = "表格下载.csv";
    excel.click();
  },
  false
);
