import { getPropByPath, isFunction } from "../components/_utils";
import { Locale, useCurrentLang } from "./locale.mjs";
export function useTranslate(compName) {
  function translate(keyPath, ...args) {
    const { languages } = Locale;
    const text = getPropByPath(languages(), `${compName.split("-").slice(1).join("-").replace("-", "")}.${keyPath}`) || getPropByPath(languages(), keyPath);
    return isFunction(text) ? text(...args) : text;
  }
  return {
    translate
  };
}
export function translateChange() {
  let href = "";
  const { location } = window.parent;
  const currentLang = useCurrentLang();
  if (currentLang.value === "zh-CN") {
    href = location.href.replace("zh-CN", "en-US");
    Locale.use("en-US");
  } else {
    href = location.href.replace("en-US", "zh-CN");
    Locale.use("zh-CN");
  }
  location.href = href;
}
