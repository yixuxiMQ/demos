const contentItemOne = {
  zh: "为了向您提供部分功能/服务，例如电站地理视图功能、电站天气等，我们需要将您的个人信息提供给第三方。为了保障您的数据安全和隐私，我们与合作伙伴签订了数据安全保护协议，明确了合作伙伴对您的数据的保护责任、义务和要求。",
  en: "",
};
const contentItemTow = {
  zh: "我们在引入合作伙伴之前会严格进行隐私安全尽职调查，并通过合同约束要求合作伙伴采取严格的措施来保护您的个人信息，在满足新的服务需求及业务功能变更时，我们可能会调整我们的合作伙伴，并及时在本政策中向您公开说明最新情况。请注意，共享信息合作伙伴具体使用情况请仔细阅读合作伙伴的隐私政策。目前本应用（或服务）涉及共享信息合作伙伴列表如下：",
  en: "",
};
const headOne = {
  zh: "第三方名称",
  en: "",
};
const headTow = {
  zh: "处理目的和方式",
  en: "",
};
const headThree = {
  zh: "涉及个人信息种类",
  en: "",
};
const headFour = {
  zh: "第三方官网链接和隐私声明链接",
  en: "",
};
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
  zh: {
    p1: "第三方官网链接：",
    a1: "https://developer.huawei.com/",
    p2: "隐私声明链接",
    a2: "https://developer.huawei.com/consumer/cn/doc/develpoment/aaaaaaa/aaaaa//aaaaaa",
  },
  en: {},
};
const bodyFive = {
  zh: "华为分析",
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
  zh: {
    p1: "第三方官网链接：",
    a1: "https://developer.huawei.com/",
    p2: "隐私声明链接",
    a2: "https://developer.huawei.com/consumer/cn/doc/develpoment/aaaaaaa/aaaaa//aaaaaa",
  },
  en: {},
};
const bodyNine = {
  zh: "华为推送",
  en: "",
};
const bodyTen = {
  zh: "用于推送告警信息、健康报告、维保信息",
  en: "",
};
const bodyEleven = {
  zh: "设备信息",
  en: "",
};
const bodyTwelve = {
  zh: {
    p1: "第三方官网链接：",
    a1: "https://developer.huawei.com/",
    p2: "隐私声明链接",
    a2: "https://developer.huawei.com/consumer/cn/doc/develpoment/aaaaaaa/aaaaa//aaaaaa",
  },
  en: {},
};

const contentItem1 = document.querySelector(".info-list-content-item-1");
const contentItem2 = document.querySelector(".info-list-content-item-2");
const th1 = document.querySelector(".th-1");
const th2 = document.querySelector(".th-2");
const th3 = document.querySelector(".th-3");
const th4 = document.querySelector(".th-4");
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

contentItem1.innerText = contentItemOne.zh;
contentItem2.innerText = contentItemTow.zh;
th1.innerText = headOne.zh;
th2.innerText = headTow.zh;
th3.innerText = headThree.zh;
th4.innerText = headFour.zh;
td1.innerText = bodyOne.zh;
td2.innerText = bodyTow.zh;
td3.innerText = bodyThree.zh;
td4.innerHTML = `<div>
                    <p>${bodyFour.zh.p1}</p>
                    <a href=${bodyFour.zh.a1}>${bodyFour.zh.a1}</a>
                    <p>${bodyFour.zh.p2}</p>
                    <a href=${bodyFour.zh.a2}>${bodyFour.zh.a2}</a>
                  </div>`;
td5.innerText = bodyFive.zh;
td6.innerText = bodySix.zh;
td7.innerText = bodySeven.zh;
td8.innerHTML = `<div>
                    <p>${bodyEight.zh.p1}</p>
                    <a href=${bodyEight.zh.a1}>${bodyEight.zh.a1}</a>
                    <p>${bodyEight.zh.p2}</p>
                    <a href=${bodyEight.zh.a2}>${bodyEight.zh.a2}</a>
                  </div>`;
td9.innerText = bodyNine.zh;
td10.innerText = bodyTen.zh;
td11.innerText = bodyEleven.zh;
td12.innerHTML = `<div>
                    <p>${bodyTwelve.zh.p1}</p>
                    <a href=${bodyTwelve.zh.a1}>${bodyTwelve.zh.a1}</a>
                    <p>${bodyTwelve.zh.p2}</p>
                    <a href=${bodyTwelve.zh.a2}>${bodyTwelve.zh.a2}</a>
                  </div>`;
