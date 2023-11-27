import { reactive, ref } from "vue";
import { deepAssign } from "../components/_utils";
import { ZhCNLang } from "./lang/zh-CN.mjs";
import { EnUSLang } from "./lang/en-US.mjs";
import { ZhTWLang } from "./lang/zh-TW.mjs";
import { IdIDLang } from "./lang/id-ID.mjs";
export { ZhCNLang, EnUSLang, IdIDLang, ZhTWLang };
const currentLang = ref("zh-CN");
const langs = reactive({
  "zh-CN": ZhCNLang(),
  "en-US": EnUSLang()
});
export const useCurrentLang = () => currentLang;
export const Locale = {
  languages() {
    return langs[currentLang.value];
  },
  use(lang, Languages) {
    currentLang.value = lang;
    if (Languages)
      langs[lang] = Languages;
  },
  merge(Languages) {
    deepAssign(this.languages(), Languages);
  }
};
