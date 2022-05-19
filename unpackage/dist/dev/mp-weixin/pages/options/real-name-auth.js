"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        name: "",
        id_card: "",
        mobile: "",
        code: ""
      }
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.name = $event),
    b: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
      modelValue: $data.formData.name
    }),
    c: common_vendor.p({
      label: "\u59D3\u540D",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.id_card = $event),
    e: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7",
      modelValue: $data.formData.id_card
    }),
    f: common_vendor.p({
      label: "\u8EAB\u4EFD\u8BC1\u53F7",
      name: "id_card"
    }),
    g: common_vendor.o(($event) => $data.formData.mobile = $event),
    h: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      modelValue: $data.formData.mobile
    }),
    i: common_vendor.p({
      label: "\u624B\u673A\u53F7",
      name: "mobile"
    }),
    j: common_vendor.o(($event) => $data.formData.code = $event),
    k: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
      modelValue: $data.formData.code
    }),
    l: common_vendor.o((...args) => _ctx.getCode && _ctx.getCode(...args)),
    m: common_vendor.p({
      label: "\u9A8C\u8BC1\u7801",
      name: "code"
    }),
    n: common_vendor.o((...args) => _ctx.submit && _ctx.submit(...args)),
    o: common_vendor.p({
      modelValue: $data.formData,
      rules: _ctx.rules
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/pages/options/real-name-auth.vue"]]);
wx.createPage(MiniProgramPage);
