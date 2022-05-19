"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "hz-shop-card",
  props: {
    shoplist: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    goToInfo(id) {
      common_vendor.index.navigateTo({
        url: "/pages/shop-info/shop-info?id=" + id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.shoplist, (shop, k0, i0) => {
      return {
        a: shop.image != null ? shop.image : "../../static/temp.png",
        b: common_vendor.t(shop.name != null ? shop.name : "\u5546\u54C1\u6807\u9898"),
        c: common_vendor.t(shop.price != null ? shop.price : "$600.0"),
        d: common_vendor.o(($event) => $options.goToInfo(shop.id))
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c055df8"], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/components/hz-shop-card/hz-shop-card.vue"]]);
wx.createComponent(Component);
