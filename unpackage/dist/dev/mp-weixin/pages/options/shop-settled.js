"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        id_card: "",
        license_name: "",
        license_no: "",
        license_img: ""
      }
    };
  },
  methods: {
    select(e) {
      console.log("\u9009\u62E9\u6587\u4EF6\uFF1A", e);
    },
    progress(e) {
      console.log("\u4E0A\u4F20\u8FDB\u5EA6\uFF1A", e);
    },
    success(e) {
      console.log("\u4E0A\u4F20\u6210\u529F", e);
    },
    fail(e) {
      console.log("\u4E0A\u4F20\u5931\u8D25\uFF1A", e);
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_file_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_file_picker + _easycom_uni_forms)();
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
      label: "\u6CD5\u4EBA\u59D3\u540D",
      name: "name"
    }),
    d: common_vendor.o(($event) => $data.formData.phone = $event),
    e: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u6CD5\u4EBA\u624B\u673A\u53F7",
      modelValue: $data.formData.phone
    }),
    f: common_vendor.p({
      label: "\u6CD5\u4EBA\u624B\u673A\u53F7",
      name: "phone"
    }),
    g: common_vendor.o(($event) => $data.formData.id_card = $event),
    h: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u6CD5\u4EBA\u8EAB\u4EFD\u8BC1",
      modelValue: $data.formData.id_card
    }),
    i: common_vendor.p({
      label: "\u6CD5\u4EBA\u8EAB\u4EFD\u8BC1",
      name: "id_card"
    }),
    j: common_vendor.o(($event) => $data.formData.license_name = $event),
    k: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8425\u4E1A\u6267\u7167",
      modelValue: $data.formData.license_name
    }),
    l: common_vendor.p({
      label: "\u8425\u4E1A\u6267\u7167\u540D\u79F0",
      name: "license_name"
    }),
    m: common_vendor.o(($event) => $data.formData.license_no = $event),
    n: common_vendor.p({
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u8425\u4E1A\u6267\u7167\u53F7",
      modelValue: $data.formData.license_no
    }),
    o: common_vendor.p({
      label: "\u8425\u4E1A\u6267\u7167\u53F7",
      name: "license_no"
    }),
    p: common_vendor.o($options.select),
    q: common_vendor.o($options.progress),
    r: common_vendor.o($options.success),
    s: common_vendor.o($options.fail),
    t: common_vendor.o(($event) => $data.formData.license_img = $event),
    v: common_vendor.p({
      fileMediatype: "image",
      mode: "grid",
      limit: 1,
      modelValue: $data.formData.license_img
    }),
    w: common_vendor.p({
      label: "\u8425\u4E1A\u6267\u7167\u56FE\u7247",
      name: "license_img"
    }),
    x: common_vendor.p({
      modelValue: $data.formData
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangkunhao/WebstormProjects/mbg-shop/pages/options/shop-settled.vue"]]);
wx.createPage(MiniProgramPage);
