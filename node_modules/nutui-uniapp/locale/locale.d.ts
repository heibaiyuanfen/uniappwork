import { ZhCNLang } from './lang/zh-CN';
import { EnUSLang } from './lang/en-US';
import { ZhTWLang } from './lang/zh-TW';
import { IdIDLang } from './lang/id-ID';
import type { BaseLang } from './lang/baseLang';
export type langKeys = 'zh-CN' | 'en-US' | 'zh-tw' | 'id-id';
export type Lang = Partial<Record<langKeys, any>>;
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Record<any, any> ? DeepPartial<T[K]> : T[K];
};
export { ZhCNLang, EnUSLang, IdIDLang, ZhTWLang };
export declare const useCurrentLang: () => import("vue").Ref<langKeys>;
export declare const Locale: {
    languages(): BaseLang;
    use(lang: keyof Lang, Languages?: DeepPartial<BaseLang>): void;
    merge(Languages: DeepPartial<BaseLang>): void;
};
