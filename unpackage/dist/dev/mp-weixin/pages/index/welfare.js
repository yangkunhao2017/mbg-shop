"use strict";
var common_vendor = require("../../common/vendor.js");
const HzShopCard = () => "../../components/hz-shop-card/hz-shop-card.js";
const HzSearchInput = () => "../../components/hz-search-input/hz-search-input.js";
const HzScrollView = () => "../../components/hz-scroll-view/hz-scroll-view.js";
const _sfc_main = {
  components: { HzScrollView, HzSearchInput, HzShopCard },
  data() {
    return {
      shopList: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    changeSelect(e) {
      console.log(e);
    },
    search(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_hz_search_input2 = common_vendor.resolveComponent("hz-search-input");
  const _easycom_hz_scroll_view2 = common_vendor.resolveComponent("hz-scroll-view");
  const _easycom_hz_shop_card2 = common_vendor.resolveComponent("hz-shop-card");
  (_easycom_hz_search_input2 + _easycom_hz_scroll_view2 + _easycom_hz_shop_card2)();
}
const _easycom_hz_search_input = () => "../../components/hz-search-input/hz-search-input.js";
const _easycom_hz_scroll_view = () => "../../components/hz-scroll-view/hz-scroll-view.js";
const _easycom_hz_shop_card = () => "../../components/hz-shop-card/hz-shop-card.js";
if (!Math) {
  (_easycom_hz_search_input + _easycom_hz_scroll_view + _easycom_hz_shop_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(3, (index, k0, i0) => {
      return {};
    }),
    b: common_vendor.o($options.search),
    c: common_vendor.o($options.changeSelect),
    d: common_vendor.p({
      shoplist: $data.shopList
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/pages/index/welfare.vue"]]);
wx.createPage(MiniProgramPage);
