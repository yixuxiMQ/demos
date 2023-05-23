const contentItemOne = {
  zh: "为了向您提供部分功能/服务，例如电站地理视图功能、电站天气等，我们需要将您的个人信息提供给第三方。为了保障您的数据安全和隐私，我们与合作伙伴签订了数据安全保护协议，明确了合作伙伴对您的数据的保护责任、义务和要求。",
  en: "",
};
const contentItemTow = {
  zh: {
    item1: {
      key: "数据最小化：",
      value: "坚持进采集实现啊哈哈哈啊哈哈哈哈哈v哈哈v和",
    },
    item2: {
      key: "数据最小化：",
      value: "坚持进采集实现啊哈哈哈啊哈哈哈哈哈v哈哈v和",
    },
    item3: {
      key: "数据最小化：",
      value: "坚持进采集实现啊哈哈哈啊哈哈哈哈哈v哈哈v和",
    },
    item4: {
      key: "数据最小化：",
      value: "坚持进采集实现啊哈哈哈啊哈哈哈哈哈v哈哈v和",
    },
    item5: {
      key: "数据最小化：",
      value: "坚持进采集实现啊哈哈哈啊哈哈哈哈哈v哈哈v和",
    },
  },
};
const headOne = {
  zh: "第三方SDK名称",
  en: "",
};
const headTow = {
  zh: "公司名称",
  en: "",
};
const headThree = {
  zh: "收集个人信息目的",
  en: "",
};
const headFour = {
  zh: "收集个人数据类型",
  en: "",
};
const headFive = {
  zh: "第三方SDK隐私声明",
  en: "",
};
// 要改
const bodyOne = {
  zh: "华为地图",
  en: "",
};
const bodyTow = {
  zh: "用在地图上展示电站信息",
  en: "",
};
const bodyThree = {
  zh: "位置信息",
  en: "",
};
const bodyFour = {
  zh: "位置信息",
  en: "",
};
const bodyFive = {
  zh: "华为推送",
  en: "",
};
const bodySix = {
  zh: "帮助改善APP的用户使用体验",
  en: "",
};
const bodySeven = {
  zh: "设备信息、网络信息、应用使用信息",
  en: "",
};
const bodyEight = {
  zh: "设备信息、网络信息、应用使用信息",
  en: "",
};
const bodyNine = {
  zh: "华为推送",
  en: "",
};
const body10 = {
  zh: "华为推送",
  en: "",
};
const body11 = {
  zh: "设备信息",
  en: "",
};
const body12 = {
  zh: "设备信息",
  en: "",
};
const body13 = {
  zh: "设备信息、网络信息、应用使用信息",
  en: "",
};
const body14 = {
  zh: "华为推送",
  en: "",
};
const body15 = {
  zh: "华为推送",
  en: "",
};
const body16 = {
  zh: "设备信息",
  en: "",
};
const body17 = {
  zh: "设备信息",
  en: "",
};
const body18 = {
  zh: "设备信息、网络信息、应用使用信息",
  en: "",
};
const body19 = {
  zh: "华为推送",
  en: "",
};
const body20 = {
  zh: "华为推送",
  en: "",
};
const body21 = {
  zh: "设备信息",
  en: "",
};
const body22 = {
  zh: "设备信息",
  en: "",
};
const body23 = {
  zh: "设备信息、网络信息、应用使用信息",
  en: "",
};
const body24 = {
  zh: "华为推送",
  en: "",
};
const body25 = {
  zh: "华为推送",
  en: "",
};

const contentItem1 = document.querySelector(".info-list-content-item-1");
const contentItem2 = document.querySelector(".info-list-content-item-2");
const th1 = document.querySelector(".th-1");
const th2 = document.querySelector(".th-2");
const th3 = document.querySelector(".th-3");
const th4 = document.querySelector(".th-4");
const th5 = document.querySelector(".th-5");
const td1 = document.querySelector(".td-1");
const td2 = document.querySelector(".td-2");
const td3 = document.querySelector(".td-3");
const td4 = document.querySelector(".td-4");
const td5 = document.querySelector(".td-5");
const td6 = document.querySelector(".td-6");
const td7 = document.querySelector(".td-7");
const td8 = document.querySelector(".td-8");
const td9 = document.querySelector(".td-9");
const td10 = document.querySelector(".td-10");
const td11 = document.querySelector(".td-11");
const td12 = document.querySelector(".td-12");
const td13 = document.querySelector(".td-13");
const td14 = document.querySelector(".td-14");
const td15 = document.querySelector(".td-15");
const td16 = document.querySelector(".td-16");
const td17 = document.querySelector(".td-17");
const td18 = document.querySelector(".td-18");
const td19 = document.querySelector(".td-19");
const td20 = document.querySelector(".td-20");
const td21 = document.querySelector(".td-21");
const td22 = document.querySelector(".td-22");
const td23 = document.querySelector(".td-23");
const td24 = document.querySelector(".td-24");
const td25 = document.querySelector(".td-25");

contentItem1.innerText = contentItemOne.zh;
contentItem2.innerHTML = `<div><b>${contentItemTow.zh.item1.key}</b>${contentItemTow.zh.item1.value}</div>
                          <div><b>${contentItemTow.zh.item2.key}</b>${contentItemTow.zh.item2.value}</div>
                          <div><b>${contentItemTow.zh.item3.key}</b>${contentItemTow.zh.item3.value}</div>
                          <div><b>${contentItemTow.zh.item4.key}</b>${contentItemTow.zh.item4.value}</div>
                          <div><b>${contentItemTow.zh.item5.key}</b>${contentItemTow.zh.item5.value}</div>`;
th1.innerText = headOne.zh;
th2.innerText = headTow.zh;
th3.innerText = headThree.zh;
th4.innerText = headFour.zh;
th5.innerText = headFive.zh;
td1.innerText = bodyOne.zh;
td2.innerText = bodyTow.zh;
td3.innerText = bodyThree.zh;
td4.innerText = bodyFour.zh;
td5.innerHTML = bodyFive.zh;
td6.innerText = bodySix.zh;
td7.innerText = bodySeven.zh;
td8.innerHTML = bodyEight.zh;
td9.innerText = bodyNine.zh;
td10.innerHTML = body10.zh;
td11.innerText = body11.zh;
td12.innerHTML = body12.zh;
td13.innerHTML = body13.zh;
td14.innerHTML = body14.zh;
td15.innerHTML = body15.zh;
td16.innerText = body16.zh;
td17.innerHTML = body17.zh;
td18.innerHTML = body18.zh;
td19.innerHTML = body19.zh;
td20.innerHTML = body20.zh;
td21.innerText = body21.zh;
td22.innerHTML = body22.zh;
td23.innerHTML = body23.zh;
td24.innerHTML = body24.zh;
td25.innerHTML = body25.zh;
