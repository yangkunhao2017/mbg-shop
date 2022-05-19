"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "hz-search-input",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchValue);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "search",
      size: "20"
    }),
    b: $data.searchValue,
    c: common_vendor.o(($event) => $data.searchValue = $event.detail.value),
    d: common_vendor.o((...args) => $options.search && $options.search(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f7d8d4f4"], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/components/hz-search-input/hz-search-input.vue"]]);
wx.createComponent(Component);
