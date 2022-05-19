"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bannerList: [{
        url: "http://file.shopro.top/uploads/20210522/89e158b63896889422342043af5e741f.png",
        to: ""
      }],
      options: [{
        icon: "chat",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ]
    };
  },
  onLoad(e) {
    console.log(e);
  },
  methods: {
    onClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    }
  }
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bannerList, (item, index, i0) => {
      return {
        a: item.url,
        b: index,
        c: common_vendor.o(($event) => _ctx.toPage(item.to))
      };
    }),
    b: common_vendor.o($options.onClick),
    c: common_vendor.o($options.buttonClick),
    d: common_vendor.p({
      options: $data.options,
      fill: true,
      ["button-group"]: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/pages/shop/shop-info.vue"]]);
wx.createPage(MiniProgramPage);
