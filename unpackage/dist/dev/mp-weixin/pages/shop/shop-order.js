"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listType: 0
    };
  },
  onLoad(e) {
    this.listType = e.type;
  },
  methods: {
    changeType(e) {
      this.listType = e;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(this.listType == 0 ? "active" : ""),
    b: common_vendor.o(($event) => $options.changeType(0)),
    c: common_vendor.n(this.listType == 1 ? "active" : ""),
    d: common_vendor.o(($event) => $options.changeType(1)),
    e: common_vendor.n(this.listType == 2 ? "active" : ""),
    f: common_vendor.o(($event) => $options.changeType(2)),
    g: common_vendor.n(this.listType == 3 ? "active" : ""),
    h: common_vendor.o(($event) => $options.changeType(3))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/pages/shop/shop-order.vue"]]);
wx.createPage(MiniProgramPage);
