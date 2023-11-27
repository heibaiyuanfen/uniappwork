import { defineLocaleConfig } from "./baseLang.mjs";
export function ZhTWLang() {
  return defineLocaleConfig({
    save: "\u4FDD\u5B58",
    confirm: "\u78BA\u8A8D",
    cancel: "\u53D6\u6D88",
    done: "\u5B8C\u6210",
    noData: "\u66AB\u7121\u6578\u64DA",
    placeholder: "\u8ACB\u8F38\u5165",
    select: "\u8ACB\u9078\u64C7",
    video: {
      errorTip: "\u8996\u983B\u52A0\u8F09\u5931\u6557",
      clickRetry: "\u9EDE\u64CA\u91CD\u8A66"
    },
    fixednav: {
      activeText: "\u6536\u8D77\u5C0E\u822A",
      unActiveText: "\u5FEB\u901F\u5C0E\u822A"
    },
    pagination: {
      prev: "\u4E0A\u4E00\u9801",
      next: "\u4E0B\u4E00\u9801"
    },
    calendaritem: {
      weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
      end: "\u7D50\u675F",
      start: "\u958B\u59CB",
      title: "\u884C\u4E8B\u66C6\u9078\u64C7",
      monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
      today: "\u4ECA\u5929"
    },
    shortpassword: {
      title: "\u8ACB\u8F38\u5165\u5BC6\u78BC",
      desc: "\u60A8\u4F7F\u7528\u4E86\u865B\u64EC\u8CC7\u7522,\u8ACB\u9032\u884C\u9A57\u8B49",
      tips: "\u5FD8\u8A18\u5BC6\u78BC"
    },
    uploader: {
      ready: "\u6E96\u5099\u5B8C\u6210",
      readyUpload: "\u6E96\u5099\u4E0A\u50B3",
      waitingUpload: "\u7B49\u5F85\u4E0A\u50B3",
      uploading: "\u4E0A\u50B3\u4E2D",
      success: "\u4E0A\u50B3\u6210\u529F",
      error: "\u4E0A\u50B3\u5931\u6557"
    },
    countdown: {
      day: "\u5929",
      hour: "\u6642",
      minute: "\u5206",
      second: "\u79D2"
    },
    address: {
      selectRegion: "\u8ACB\u9078\u64C7\u6240\u5728\u5730\u5340",
      deliveryTo: "\u914D\u9001\u81F3",
      chooseAnotherAddress: "\u9078\u64C7\u5176\u4ED6\u5730\u5740"
    },
    signature: {
      reSign: "\u91CD\u7C3D",
      unSupportTpl: "\u5C0D\u4E0D\u8D77,\u7576\u524D\u700F\u89BD\u5668\u4E0D\u652F\u6301Canvas,\u7121\u6CD5\u4F7F\u7528\u672C\u63A7\u5236\u9805\uFF01"
    },
    ecard: {
      chooseText: "\u8ACB\u9078\u64C7\u96FB\u5B50\u5361\u9762\u503C",
      otherValueText: "\u5176\u4ED6\u9762\u503C",
      placeholder: "\u8ACB\u8F38\u51651-5000\u6574\u6578"
    },
    timeselect: {
      pickupTime: "\u53D6\u4EF6\u6642\u9593"
    },
    sku: {
      buyNow: "\u7ACB\u5373\u8CFC\u8CB7",
      buyNumber: "\u8CFC\u8CB7\u6578\u91CF",
      addToCart: "\u52A0\u5165\u8CFC\u7269\u8ECA"
    },
    skuheader: {
      skuId: "\u5546\u54C1\u7DE8\u865F"
    },
    addresslist: {
      addAddress: "\u65B0\u5EFA\u5730\u5740",
      default: "\u9ED8\u8BA4"
    },
    comment: {
      complaintsText: "\u6211\u8981\u6295\u8A34",
      additionalReview: (day) => `\u8CFC\u8CB7${day}\u5929\u5F8C\u8FFD\u8A55`,
      additionalImages: (length) => `${length}\u5F35\u8FFD\u8A55\u5716\u7247`
    },
    infiniteloading: {
      loading: "\u52A0\u8F09\u4E2D...",
      pullTxt: "\u9B06\u958B\u5237\u65B0",
      loadMoreTxt: "\u54CE\u5440\uFF0C\u9019\u88E1\u662F\u5E95\u90E8\u4E86\u5566"
    },
    datepicker: {
      year: "\u5E74",
      month: "\u6708",
      day: "\u65E5",
      hour: "\u6642",
      min: "\u5206",
      seconds: "\u79D2"
    },
    audiooperate: {
      back: "\u5012\u9000",
      start: "\u958B\u59CB",
      pause: "\u66AB\u505C",
      forward: "\u5FEB\u9032",
      mute: "\u975C\u97F3"
    },
    pullrefresh: {
      pulling: "\u4E0B\u62C9\u5237\u65B0",
      loosing: "\u91CB\u653E\u5237\u65B0",
      loading: "\u52A0\u8F09\u4E2D..."
    }
  });
}
