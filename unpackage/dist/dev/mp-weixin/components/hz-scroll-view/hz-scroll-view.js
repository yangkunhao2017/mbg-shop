"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "hz-scroll-view",
  data() {
    return {
      selectItem: 0
    };
  },
  methods: {
    changeSelect(index) {
      this.selectItem = index;
      this.$emit("changeSelect", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(this.selectItem == 0 ? "scroll-view-item_H-active" : ""),
    b: common_vendor.o(($event) => $options.changeSelect(0)),
    c: common_vendor.n(this.selectItem == 1 ? "scroll-view-item_H-active" : ""),
    d: common_vendor.o(($event) => $options.changeSelect(1)),
    e: common_vendor.n(this.selectItem == 2 ? "scroll-view-item_H-active" : ""),
    f: common_vendor.o(($event) => $options.changeSelect(2)),
    g: common_vendor.n(this.selectItem == 3 ? "scroll-view-item_H-active" : ""),
    h: common_vendor.o(($event) => $options.changeSelect(3)),
    i: common_vendor.n(this.selectItem == 4 ? "scroll-view-item_H-active" : ""),
    j: common_vendor.o(($event) => $options.changeSelect(4)),
    k: common_vendor.n(this.selectItem == 5 ? "scroll-view-item_H-active" : ""),
    l: common_vendor.o(($event) => $options.changeSelect(5)),
    m: common_vendor.n(this.selectItem == 6 ? "scroll-view-item_H-active" : ""),
    n: common_vendor.o(($event) => $options.changeSelect(6)),
    o: common_vendor.n(this.selectItem == 7 ? "scroll-view-item_H-active" : ""),
    p: common_vendor.o(($event) => $options.changeSelect(7))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3bd993f8"], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/components/hz-scroll-view/hz-scroll-view.vue"]]);
wx.createComponent(Component);
