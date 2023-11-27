import * as vue from 'vue';
import { PropType, ExtractPropTypes, CSSProperties, SetupContext, ComputedRef, VNode, RendererNode, RendererElement, VNodeChild } from 'vue';
import { ButtonOpenType, ButtonLang, ButtonOnGetphonenumberEvent, ButtonOnErrorEvent, ButtonOnOpensettingEvent, ButtonOnLaunchappEvent, ButtonOnChooseavatarEvent, ButtonOnAgreeprivacyauthorizationEvent, ButtonOnAddgroupappEvent, ButtonOnChooseaddressEvent, ButtonOnChooseinvoicetitleEvent, ButtonOnSubscribeEvent, ButtonOnLoginEvent } from '@uni-helper/uni-app-types';
import { ComponentResolver } from '@uni-helper/vite-plugin-uni-components';

/**
 * prop type helpers
 * help us to write less code and reduce bundle size
 * copy from https://github.com/youzan/vant/blob/main/packages/vant/src/utils/props.ts
 */

type ClassType = string | object | Array<ClassType>;

declare function isDate(val: unknown): val is Date;

type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;

interface ActionSheetOption {
    disable?: boolean;
    loading?: boolean;
    color?: string;
    name: string;
    subname?: string;
}
declare const actionsheetProps: {
    cancelTxt: {
        type: StringConstructor;
        default: string;
    };
    optionTag: {
        type: PropType<keyof ActionSheetOption>;
        default: string;
    };
    optionSubTag: {
        type: PropType<keyof ActionSheetOption>;
        default: string;
    };
    chooseTagValue: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    menuItems: {
        type: PropType<ActionSheetOption[]>;
        default: () => never[];
    };
    closeAbled: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<vue.CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type ActionsheetProps = ExtractPropTypes<typeof actionsheetProps>;
declare const actionsheetEmits: {
    close: () => boolean;
    'update:visible': (val: boolean) => boolean;
    cancel: () => boolean;
    choose: (item: ActionSheetOption, index: any) => {
        item: ActionSheetOption;
        index: any;
    };
};
type ActionsheetEmits = typeof actionsheetEmits;

type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
type ButtonSize = 'large' | 'normal' | 'small' | 'mini';
type ButtonShape = 'square' | 'round';
type ButtonFormType = 'button' | 'submit' | 'reset';

declare const buttonProps: {
    customColor: StringConstructor;
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    formType: {
        type: PropType<ButtonFormType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    openType: {
        type: PropType<ButtonOpenType>;
        default: string;
    };
    lang: {
        type: PropType<ButtonLang>;
        default: string;
    };
    sessionFrom: {
        type: StringConstructor;
        default: string;
    };
    sendMessageTitle: {
        type: StringConstructor;
        default: string;
    };
    sendMessagePath: {
        type: StringConstructor;
        default: string;
    };
    sendMessageImg: {
        type: StringConstructor;
        default: string;
    };
    showMessageCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    groupId: {
        type: StringConstructor;
        default: string;
    };
    guildId: {
        type: StringConstructor;
        default: string;
    };
    publicId: {
        type: StringConstructor;
        default: string;
    };
    dataImId: {
        type: StringConstructor;
        default: string;
    };
    dataImType: {
        type: StringConstructor;
        default: string;
    };
    dataGoodsId: {
        type: StringConstructor;
        default: string;
    };
    dataOrderId: {
        type: StringConstructor;
        default: string;
    };
    dataBizLine: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
declare const buttonEmits: {
    click: (evt: MouseEvent) => MouseEvent;
    getphonenumber: (evt: ButtonOnGetphonenumberEvent) => ButtonOnGetphonenumberEvent;
    getuserinfo: (evt: any) => any;
    error: (evt: ButtonOnErrorEvent) => ButtonOnErrorEvent;
    opensetting: (evt: ButtonOnOpensettingEvent) => ButtonOnOpensettingEvent;
    launchapp: (evt: ButtonOnLaunchappEvent) => ButtonOnLaunchappEvent;
    contact: (evt: any) => any;
    chooseavatar: (evt: ButtonOnChooseavatarEvent) => ButtonOnChooseavatarEvent;
    agreeprivacyauthorization: (evt: ButtonOnAgreeprivacyauthorizationEvent) => ButtonOnAgreeprivacyauthorizationEvent;
    addgroupapp: (evt: ButtonOnAddgroupappEvent) => ButtonOnAddgroupappEvent;
    chooseaddress: (evt: ButtonOnChooseaddressEvent) => ButtonOnChooseaddressEvent;
    chooseinvoicetitle: (evt: ButtonOnChooseinvoicetitleEvent) => ButtonOnChooseinvoicetitleEvent;
    subscribe: (evt: ButtonOnSubscribeEvent) => ButtonOnSubscribeEvent;
    login: (evt: ButtonOnLoginEvent) => ButtonOnLoginEvent;
    im: (evt: any) => any;
};
type ButtonEmits = typeof buttonEmits;
type ButtonProps = ExtractPropTypes<typeof buttonProps>;

declare const cellProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    to: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundRadius: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type CellProps = ExtractPropTypes<typeof cellProps>;
declare const cellEmits: {
    click: (event: Event) => Event;
};
type CellEmits = typeof cellEmits;

declare const cellgroupProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
};
type CellGroupProps = ExtractPropTypes<typeof cellgroupProps>;

declare const configProviderProps: {
    theme: {
        type: PropType<string>;
        default: string;
    };
    themeVars: {
        type: ObjectConstructor;
        default: {};
    };
};
type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

declare const countdownProps: {
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    paused: {
        default: boolean;
        type: BooleanConstructor;
    };
    startTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    endTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    millisecond: {
        default: boolean;
        type: BooleanConstructor;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
declare const countdownEmits: {
    input: (val: string | {
        d: number;
        h: number;
        m: number;
        s: number;
        ms: number;
    }) => true | ObjectConstructor;
    updateModelValue: (val: string | {
        d: number;
        h: number;
        m: number;
        s: number;
        ms: number;
    }) => true | ObjectConstructor;
    onEnd: () => boolean;
    onRestart: (val: number) => boolean;
    onPaused: (val: number) => boolean;
};
type CountdownEmits = typeof countdownEmits;
interface CountdownInst {
    start: () => void;
    pause: () => void;
    reset: () => void;
}
type CountDownPropsProps = ExtractPropTypes<typeof countdownProps>;

type TextAlign = 'left' | 'center' | 'right' | 'top';
type FooterDirection = 'horizontal' | 'vertical';
declare const dialogProps: {
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: PropType<string>;
        default: string;
    };
    noFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOkBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCancelBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    okAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    cancelAutoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    textAlign: {
        type: PropType<TextAlign>;
        default: string;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: boolean;
    };
    footerDirection: {
        type: PropType<FooterDirection>;
        default: string;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    popStyle: {
        type: PropType<CSSProperties>;
    };
    beforeClose: PropType<Interceptor>;
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
    };
};
type DialogProps = ExtractPropTypes<typeof dialogProps>;
declare const dialogEmits: {
    update: (val: boolean) => boolean;
    'update:visible': (val: boolean) => boolean;
    ok: () => boolean;
    cancel: () => boolean;
    opened: () => boolean;
    closed: () => boolean;
};
type DialogEmits = typeof dialogEmits;

declare const defaultAnimations: NutAnimations;
declare function isKeyOfAnimations(value: string): boolean;
interface IClassNames {
    enter: string;
    enterActive: string;
    enterTo: string;
    leave: string;
    leaveActive: string;
    leaveTo: string;
}
interface IClassNameProps {
    enterClass?: string;
    enterActiveClass?: string;
    enterToClass?: string;
    leaveClass?: string;
    leaveActiveClass?: string;
    leaveToClass?: string;
}
declare function getClassNames(name: string, { enterClass, enterActiveClass, enterToClass, leaveClass, leaveActiveClass, leaveToClass, }: IClassNameProps): IClassNames;
declare function useTransition(props: TransitionProps, emit: SetupContext<TransitionEmits>['emit']): {
    display: vue.Ref<boolean>;
    animationClass: vue.Ref<string>;
    clickHandler: (evt: MouseEvent) => void;
};

type TransitionName = keyof typeof defaultAnimations;
interface NutAnimation {
    enter: string;
    leave: string;
}
type NutAnimationName = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'none';
type NutAnimationtimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
interface NutAnimations {
    [key: string]: NutAnimation;
}

declare const transitionProps: {
    name: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    show: BooleanConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    timingFunction: {
        type: PropType<NutAnimationtimingFunction>;
        default: string;
    };
    enterFromClass: StringConstructor;
    enterActiveClass: StringConstructor;
    enterToClass: StringConstructor;
    leaveFromClass: StringConstructor;
    leaveActiveClass: StringConstructor;
    leaveToClass: StringConstructor;
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
declare const transitionEmits: {
    beforeEnter: () => boolean;
    enter: () => boolean;
    afterEnter: () => boolean;
    beforeLeave: () => boolean;
    leave: () => boolean;
    afterLeave: () => boolean;
    click: (evt: MouseEvent) => MouseEvent;
};
type TransitionProps = ExtractPropTypes<typeof transitionProps>;
type TransitionEmits = typeof transitionEmits;

interface DialogOptions {
    title?: string;
    content?: string;
    noFooter?: boolean;
    noOkBtn?: boolean;
    noCancelBtn?: boolean;
    cancelText?: string;
    okText?: string;
    textAlign?: TextAlign;
    footerDirection?: FooterDirection;
    transition?: NutAnimationName;
    closeOnClickOverlay?: boolean;
    okAutoClose?: boolean;
}
interface DialogInst {
    showDialog: (options: DialogOptions) => void;
    onOk: () => void;
    onCancel: () => void;
}

declare function useDialog(props: DialogProps, emit: SetupContext<DialogEmits>['emit']): {
    contentStyle: vue.ComputedRef<CSSProperties>;
    showPopup: vue.Ref<boolean>;
    onClickOverlay: () => void;
    onCancel: () => void;
    onOk: () => void;
    closed: (action?: string) => void;
    classes: vue.ComputedRef<{
        [x: string]: boolean;
        "nut-dialog": boolean;
    }>;
    showDialog: (options: DialogOptions) => void;
    dialogStatus: vue.Ref<{
        title?: string | undefined;
        content?: string | undefined;
        noFooter?: boolean | undefined;
        noOkBtn?: boolean | undefined;
        noCancelBtn?: boolean | undefined;
        cancelText?: string | undefined;
        okText?: string | undefined;
        textAlign?: TextAlign | undefined;
        footerDirection?: FooterDirection | undefined;
        transition?: NutAnimationName | undefined;
        closeOnClickOverlay?: boolean | undefined;
        okAutoClose?: boolean | undefined;
    }>;
};

declare const iconProps: {
    popClass: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    fontClassName: {
        type: StringConstructor;
        default: string;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type IconProps = ExtractPropTypes<typeof iconProps>;
declare const iconEmits: {
    click: (evt: Event) => boolean;
};
type IconEmits = typeof iconEmits;

declare const overlayProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type OverlayProps = ExtractPropTypes<typeof overlayProps>;
declare const overlayEmits: {
    'update:visible': (visible: boolean) => boolean;
    click: (evt: any) => boolean;
};
type OverlayEmits = typeof overlayEmits;

type ToastType = 'success' | 'loading' | 'fail' | 'warn' | 'text';
interface ToastOptions {
    msg?: string;
    duration?: number;
    type?: ToastType;
    title?: string;
    iconSize?: string | number;
    icon?: string;
    bgColor?: string;
    size?: string | number;
    bottom?: string;
}
interface ToastInst {
    showToast: {
        text(msg: string, options?: ToastOptions): void;
        success(msg: string, options?: ToastOptions): void;
        fail(msg: string, options?: ToastOptions): void;
        warn(msg: string, options?: ToastOptions): void;
        loading(msg: string, options?: ToastOptions): void;
    };
    hideToast: () => void;
}

declare const toastProps: {
    msg: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ToastType>;
    };
    bottom: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    textAlignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingRotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    onClose: FunctionConstructor;
    unmount: FunctionConstructor;
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    coverColor: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type ToastProps = ExtractPropTypes<typeof toastProps>;
declare const toastEmits: {
    'update:visible': (visible: boolean) => boolean;
    closed: () => boolean;
};
type ToastEmits = typeof toastEmits;

declare function useToast(props: ToastProps, emit: SetupContext<ToastEmits>['emit']): {
    clickCover: () => void;
    hasIcon: vue.ComputedRef<boolean>;
    iconName: vue.ComputedRef<string>;
    toastBodyClass: vue.ComputedRef<ClassType[]>;
    Style: vue.ComputedRef<{
        bottom: string | undefined;
        'background-color': string;
    }>;
    onAfterLeave: () => void;
    toastStatus: vue.Ref<{
        msg?: string | undefined;
        duration?: number | undefined;
        type?: ToastType | undefined;
        title?: string | undefined;
        iconSize?: string | number | undefined;
        icon?: string | undefined;
        bgColor?: string | undefined;
        size?: string | number | undefined;
        bottom?: string | undefined;
    }>;
    isShowToast: vue.Ref<boolean>;
    showToast: {
        text(msg: string, options?: ToastOptions): void;
        success(msg: string, options?: ToastOptions): void;
        fail(msg: string, options?: ToastOptions): void;
        warn(msg: string, options?: ToastOptions): void;
        loading(msg: string, options?: ToastOptions): void;
    };
    hideToast: () => void;
};

declare const popupProps: {
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<vue.CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type PopupProps = ExtractPropTypes<typeof popupProps>;
declare const popupEmits: {
    'update:visible': (visible: boolean) => boolean;
    'click-pop': (evt?: any) => boolean;
    'click-close-icon': () => boolean;
    open: () => boolean;
    close: () => boolean;
    opend: () => boolean;
    closed: () => boolean;
    'click-overlay': () => boolean;
};
type PopupEmits = typeof popupEmits;

declare function usePopup(props: PopupProps, emit: SetupContext<PopupEmits>['emit']): {
    popStyle: ComputedRef<any>;
    transitionName: ComputedRef<any>;
    classes: ComputedRef<{
        [x: string]: boolean;
        "nut-popup": boolean;
        round: boolean;
    }>;
    onClick: (e: Event) => void;
    onClickCloseIcon: (e: Event) => void;
    onClickOverlay: () => void;
    onOpened: () => void;
    onClosed: () => void;
    zIndex: vue.Ref<string | number>;
    showSlot: vue.Ref<boolean>;
    closed: vue.Ref<boolean>;
};

declare const animationName: {
    center: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
};
type Position = (keyof typeof animationName);

type NotifyType = 'primary' | 'success' | 'danger' | 'warning';
interface NotifyOptions {
    type?: NotifyType;
    msg: string;
    customColor?: string;
    background?: string;
    duration?: number;
    position?: Position;
    safeAreaInsetTop?: boolean;
}
interface NotifyInst {
    showNotify: (options: NotifyOptions) => void;
    hideNotify: () => void;
}

declare const notifyProps: {
    customColor: {
        type: StringConstructor;
        default: string;
    };
    msg: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<NotifyType>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeHeight: {
        type: NumberConstructor;
    };
    onClose: FunctionConstructor;
    onClick: FunctionConstructor;
};
type NotifyProps = ExtractPropTypes<typeof notifyProps>;
declare const notifyEmits: {
    'update:visible': (val: boolean) => boolean;
};
type NotifyEmits = typeof notifyEmits;

declare function useNotify(props: NotifyProps, emit: SetupContext<NotifyEmits>['emit']): {
    clickCover: () => void;
    showNotify: (option: NotifyOptions) => void;
    hideNotify: () => void;
    notifyStatus: vue.Ref<{
        type?: NotifyType | undefined;
        msg: string;
        customColor?: string | undefined;
        background?: string | undefined;
        duration?: number | undefined;
        position?: "left" | "right" | "center" | "top" | "bottom" | undefined;
        safeAreaInsetTop?: boolean | undefined;
    }>;
    isShowPopup: vue.Ref<boolean>;
};

declare const dragProps: {
    attract: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    boundary: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type DragProps = ExtractPropTypes<typeof dragProps>;

declare const swipeProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type SwipeProps = ExtractPropTypes<typeof swipeProps>;
type SwipePosition = 'left' | 'right' | '';
declare const swipeEmits: {
    open: (info: {
        name: string;
        position: SwipePosition;
    }) => {
        name: string;
        position: SwipePosition;
    };
    close: (info: {
        name: string;
        position: SwipePosition;
    }) => {
        name: string;
        position: SwipePosition;
    };
    click: (val: any) => boolean;
};
type SwipeEmits = typeof swipeEmits;
interface SwipeInts {
    open: (position?: SwipePosition) => void;
    close: () => void;
}

declare const swipegroupProps: {
    lock: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type SwipeGroupProps = ExtractPropTypes<typeof swipegroupProps>;

declare const switchProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type SwitchProps = ExtractPropTypes<typeof switchProps>;
declare const switchEmits: {
    'update:modelValue': (val: string | number | boolean) => boolean;
    change: (val: any, evt?: Event) => {
        val: any;
        evt: Event | undefined;
    };
};
type SwitchEmits = typeof switchEmits;

declare const backtopProps: {
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
};
type BacktopProps = ExtractPropTypes<typeof backtopProps>;
declare const backtopEmits: {
    click: (evt: MouseEvent) => MouseEvent;
};
type BacktopEmits = typeof backtopEmits;

declare const infiniteloadingProps: {
    hasMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    upperThreshold: {
        type: NumberConstructor;
        default: number;
    };
    pullIcon: {
        type: StringConstructor;
        default: string;
    };
    pullTxt: {
        type: StringConstructor;
        default: string;
    };
    loadIcon: {
        type: StringConstructor;
        default: string;
    };
    loadTxt: {
        type: StringConstructor;
        default: string;
    };
    loadMoreTxt: {
        type: StringConstructor;
        default: string;
    };
    useWindow: {
        type: BooleanConstructor;
        default: boolean;
    };
    containerId: {
        type: StringConstructor;
        default: string;
    };
    useCapture: {
        type: BooleanConstructor;
        default: boolean;
    };
    isOpenRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type InfiniteLoadingProps = ExtractPropTypes<typeof infiniteloadingProps>;
declare const infiniteloadingEmits: {
    scrollChange: (val: number) => boolean;
    loadMore: (val: () => void) => boolean;
    refresh: (val: () => void) => boolean;
};
type InfiniteLoadingEmits = typeof infiniteloadingEmits;

declare const dividerProps: {
    contentPosition: {
        type: PropType<"left" | "right" | "center">;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type DividerProps = ExtractPropTypes<typeof dividerProps>;

declare const GRID_KEY: unique symbol;
type GridDirection = 'horizontal' | 'vertical';
declare const gridProps: {
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: vue.PropType<GridDirection>;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type GridProps = ExtractPropTypes<typeof gridProps>;

declare const gridItemProps: {
    text: {
        type: StringConstructor;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type GridItemProps = ExtractPropTypes<typeof gridItemProps>;
declare const gridItemEmits: {
    click: (evt: Event) => boolean;
};
type GridItemEmits = typeof gridItemEmits;

declare const rowProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    flexWrap: {
        type: StringConstructor;
        default: string;
    };
};
type RowProps = ExtractPropTypes<typeof rowProps>;

declare const colProps: {
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
};
type ColProps = ExtractPropTypes<typeof colProps>;

declare const stickyProps: {
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    offsetTop: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customNavHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    index: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type StickyProps = ExtractPropTypes<typeof stickyProps>;

interface ElevatorData {
    name?: string;
    id?: number | string;
    [key: string]: any;
}
interface ElevatorInst {
    scrollTo: (val: number) => void;
}

declare const elevatorProps: {
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    acceptKey: {
        type: StringConstructor[];
        default: string;
    };
    indexList: {
        type: PropType<ElevatorData[]>;
        default: () => never[];
    };
    isSticky: {
        type: BooleanConstructor[];
        default: boolean;
    };
    spaceHeight: {
        type: NumberConstructor[];
        default: number;
    };
    titleHeight: {
        type: NumberConstructor[];
        default: number;
    };
};
type ElevatorProps = ExtractPropTypes<typeof elevatorProps>;
declare const elevatorEmits: {
    clickItem: (key: string, item: any) => {
        key: string;
        item: any;
    };
    clickIndex: (key: string) => boolean;
    change: (val: number) => boolean;
};
type ElevatorEmits = typeof elevatorEmits;

declare const fixednavProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<any[]>;
    };
    activeColor: {
        default: string;
        type: StringConstructor;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
};
type FixednavProps = ExtractPropTypes<typeof fixednavProps>;
declare const fixednavEmits: {
    'update:visible': (val: boolean) => boolean;
    selected: (val: {
        item: any;
        event: Event;
    }) => {
        item: any;
        event: Event;
    };
};
type FixednavEmits = typeof fixednavEmits;

type IndicatorAlign = 'left' | 'center' | 'right';
declare const indicatorProps: {
    size: {
        type: NumberConstructor;
        default: number;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<IndicatorAlign>;
        default: string;
    };
    fillZero: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type IndicatorProps = ExtractPropTypes<typeof indicatorProps>;

declare const menuProps: {
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: true;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleIcon: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    scrollFixed: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    titleClass: StringConstructor[];
    upIcon: {
        type: StringConstructor;
        default: string;
    };
    downIcon: {
        type: StringConstructor;
        default: string;
    };
};
type MenuProps = ExtractPropTypes<typeof menuProps>;

interface MenuItemOption {
    text: string;
    value: number | string;
}
declare const menuitemProps: {
    title: StringConstructor;
    options: {
        type: PropType<MenuItemOption[]>;
        default: never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: PropType<unknown>;
    cols: {
        type: NumberConstructor;
        default: number;
    };
    activeTitleClass: StringConstructor;
    inactiveTitleClass: StringConstructor;
    optionIcon: {
        type: StringConstructor;
        default: string;
    };
};
type MenuItemProps = ExtractPropTypes<typeof menuitemProps>;
declare const menuitemEmits: {
    'update:modelValue': (val: string | number) => boolean;
    change: (val: string | number) => boolean;
};
type MenuitemEmits = typeof menuitemEmits;
interface MenuItemInst {
    change: (val?: any) => any;
    toggle: (show?: boolean) => boolean;
    open: () => void;
    close: () => void;
}

declare const navbarProps: {
    customColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
    };
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titleIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftText: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type NavBarProps = ExtractPropTypes<typeof navbarProps>;
declare const navbarEmits: {
    clickBack: () => boolean;
    clickTitle: () => boolean;
    clickIcon: () => boolean;
    clickRight: () => boolean;
    /**
     * will be deprecated
     */
    onClickBack: () => boolean;
    onClickTitle: () => boolean;
    onClickIcon: () => boolean;
    onClickRight: () => boolean;
};
type NavBarEmits = typeof navbarEmits;

declare const paginationProps: {
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<"simple" | "multi">;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    forceEllipses: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type PaginationProps = ExtractPropTypes<typeof paginationProps>;
declare const paginationEmits: {
    'update:modelValue': (val: number) => boolean;
    change: (val: number) => boolean;
};
type PaginationEmits = typeof paginationEmits;

declare const SIDEN_NAVBAR_KEY: unique symbol;
declare const sidenavbarProps: {
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type SidenavbarProps = ExtractPropTypes<typeof sidenavbarProps>;

declare const sidenavbaritemProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    ikey: {
        type: StringConstructor;
        default: string;
    };
};
type SideNavbaritemProps = ExtractPropTypes<typeof sidenavbaritemProps>;
declare const sidenavbaritemEmits: {
    click: () => boolean;
};
type SideNavbaritemEmits = typeof sidenavbaritemEmits;

declare const subsidenavbarProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    ikey: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type SubSidenavbarProps = ExtractPropTypes<typeof subsidenavbarProps>;
declare const subsidenavbarEmits: {
    titleClick: () => boolean;
};
type SubSidenavbarEmits = typeof subsidenavbarEmits;

declare const tabbarProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type TabBarProps = ExtractPropTypes<typeof tabbarProps>;
declare const tabbarEmits: {
    tabSwitch: (val: any, index: number | string) => {
        val: any;
        index: string | number;
    };
    'update:modelValue': (val: string | number) => boolean;
};
type TabBarEmits = typeof tabbarEmits;

declare const tabbaritemProps: {
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    icon: {
        type: StringConstructor;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: (NumberConstructor | StringConstructor)[];
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    bubble: {
        type: BooleanConstructor;
        default: boolean;
    };
    badgeHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
};
type TabBarItemProps = ExtractPropTypes<typeof tabbaritemProps>;

declare const badgeProps: {
    value: {
        type: (NumberConstructor | StringConstructor)[];
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    bubble: {
        type: BooleanConstructor;
        default: boolean;
    };
    badgeHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    right: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
};
type BadgeProps = ExtractPropTypes<typeof badgeProps>;

type AvatarSize = 'large' | 'normal' | 'small';
type AvatarShape = 'round' | 'square';
declare const avatarProps: {
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type AvatarProps = ExtractPropTypes<typeof avatarProps>;

declare const AVATAR_KEY: unique symbol;
declare const avatargroupProps: {
    maxContent: {
        type: StringConstructor;
        default: string;
    };
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maxBgColor: {
        type: StringConstructor;
        default: string;
    };
    maxColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<AvatarSize>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    span: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: StringConstructor;
        default: string;
    };
};
type AvatarGroupProps = ExtractPropTypes<typeof avatargroupProps>;

type TabsSize = 'large' | 'normal' | 'small';
declare const TAB_KEY: unique symbol;
declare const tabsProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: PropType<TabsSize>;
        default: string;
    };
    type: {
        type: PropType<"line" | "card" | "smile">;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type TabsProps = ExtractPropTypes<typeof tabsProps>;
declare const tabsEmits: {
    click: (val: Title) => Title;
    change: (val: Title) => Title;
    'update:modelValue': (val: string) => boolean;
};
type TabsEmits = typeof tabsEmits;
declare class Title {
    title: string;
    titleSlot?: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    paneKey: string;
    disabled: boolean;
    constructor();
}

declare const tabpaneProps: {
    title: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    paneKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type TabPaneProps = ExtractPropTypes<typeof tabpaneProps>;
declare const tabpaneEmits: {
    click: () => boolean;
};
type TabPaneEmits = typeof tabpaneEmits;

declare const calendarProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    position: {
        type: vue.PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: vue.PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: vue.PropType<vue.CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type CalendarProps = ExtractPropTypes<typeof calendarProps>;
declare const calendarEmits: {
    choose: (val: any) => any;
    close: () => boolean;
    'update:visible': (val: boolean) => boolean;
    select: (val: any) => any;
};
type CalendarEmits = typeof calendarEmits;

declare const calendaritemProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
};
declare const calendaritemEmits: {
    choose: (val: any) => any;
    close: () => boolean;
    update: () => boolean;
    select: (val: any) => any;
};
type CalendarItemEmits = typeof calendaritemEmits;
type CalendarItemProps = ExtractPropTypes<typeof calendaritemProps>;

interface CascaderOption {
    text?: string;
    value?: number | string;
    disabled?: boolean;
    children?: CascaderOption[];
    leaf?: boolean;
    level?: number;
    loading?: boolean;
    [key: PropertyKey]: any;
}
type CascaderValue = CascaderOption['value'][];

declare const cascaderProps: {
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    title: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertConfig: ObjectConstructor;
    titleSize: {
        type: PropType<TabsSize>;
        default: string;
    };
    titleType: {
        type: PropType<"line" | "card" | "smile">;
        default: string;
    };
    titleEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<vue.CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
declare const cascaderEmits: {
    'update:modelValue': (val: CascaderValue) => CascaderValue;
    change: (val: CascaderValue, val2: CascaderOption[]) => {
        val: CascaderValue;
        val2: CascaderOption[];
    };
    'update:visible': (val: boolean) => boolean;
    pathChange: (val: CascaderOption[]) => CascaderOption[];
};
type CascaderEmits = typeof cascaderEmits;

declare const cascaderitemProps: {
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
    titleSize: {
        type: PropType<TabsSize>;
        default: string;
    };
    titleType: {
        type: PropType<"line" | "card" | "smile">;
        default: string;
    };
    titleEllipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type CascaderItemProps = ExtractPropTypes<typeof cascaderitemProps>;
declare const cascaderitemEmits: {
    'update:modelValue': (val: CascaderValue, val2?: CascaderOption[]) => {
        val: CascaderValue;
        val2: CascaderOption[] | undefined;
    };
    change: (val: CascaderValue, val2: CascaderOption[]) => {
        val: CascaderValue;
        val2: CascaderOption[];
    };
    pathChange: (val: CascaderOption[]) => CascaderOption[];
};
type CascaderItemEmits = typeof cascaderitemEmits;

declare const checkboxProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: PropType<"round" | "button">;
        default: string;
    };
};
type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
declare const checkboxEmits: {
    change: (val: boolean | string, val2?: string) => boolean;
    'update:modelValue': (val: boolean | string) => boolean;
};
type CheckboxEmits = typeof checkboxEmits;

declare const checkboxgroupProps: {
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
};
type CheckboxGroupProps = ExtractPropTypes<typeof checkboxgroupProps>;
declare const checkboxgroupEmits: {
    change: (val: any[]) => {
        val: any[];
    };
    'update:modelValue': (val: any[]) => boolean;
};
type CheckboxGroupEmits = typeof checkboxgroupEmits;
interface CheckBoxInst {
    toggleAll: (val: boolean) => void;
    toggleReverse: () => void;
}

interface PickerOption {
    [key: PropertyKey]: any;
    text: string | number;
    value: string | number;
    disabled?: string;
    children?: PickerOption[];
    className?: string | number;
}
interface PickerColumnOption {
    text: string;
    value: string;
    disabled: string;
    children: PickerOption[];
    className: string;
}
interface TouchParams {
    startY: number;
    endY: number;
    startTime: number;
    endTime: number;
    lastY: number;
    lastTime: number;
}
interface PickerFieldNames {
    text?: string;
    value?: string;
    children?: string;
}

declare const pickerProps: {
    modelValue: {
        type: PropType<(string | number)[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: PropType<(PickerOption | PickerOption[])[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fieldNames: {
        type: PropType<PickerFieldNames>;
        default: () => {};
    };
};
type PickerProps = ExtractPropTypes<typeof pickerProps>;
declare const pickerEmits: {
    cancel: (val: {
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    }) => {
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    };
    change: (val: {
        columnIndex: number;
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    }) => {
        columnIndex: number;
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    };
    confirm: (val: {
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    }) => {
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    };
    'update:modelValue': (val: (string | number)[]) => (string | number)[];
};
type PickerEmits = typeof pickerEmits;

declare const pickercolumnProps: {
    value: (NumberConstructor | StringConstructor)[];
    columnsType: StringConstructor;
    column: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fieldNames: {
        type: PropType<Required<PickerFieldNames>>;
        default: () => {};
    };
    uni: {
        type: BooleanConstructor;
        defualt: boolean;
    };
};
type PickerColumnProps = ExtractPropTypes<typeof pickercolumnProps>;
declare const pickercolumnEmits: {
    click: () => boolean;
    change: (val: PickerOption) => boolean;
};
type PickerColumnEmits = typeof pickercolumnEmits;

type Formatter = (type: string, option: PickerOption) => PickerOption;
type Filter = (columnType: string, options: PickerOption[]) => PickerOption[];

declare const currentYear: number;
declare const datepickerProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor | DateConstructor)[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    isShowChinese: {
        type: BooleanConstructor;
        default: boolean;
    };
    minuteStep: {
        type: NumberConstructor;
        default: number;
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    formatter: {
        type: PropType<Formatter>;
        default: null;
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    filter: PropType<Filter>;
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type DatePickerProps = ExtractPropTypes<typeof datepickerProps>;
declare const datepickerEmits: {
    click: () => boolean;
    cancel: (val: any) => any;
    confirm: (val: any) => any;
    change: (val: {
        columnIndex: number;
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    }) => {
        columnIndex: number;
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    };
    'update:modelValue': (val: any) => any;
};
type DatePickerEmits = typeof datepickerEmits;

type InputAlignType = 'left' | 'center' | 'right';
type InputFormatTrigger = 'onChange' | 'onBlur';
type InputType$1 = 'tel' | 'url' | 'date' | 'file' | 'text' | 'time' | 'week' | 'color' | 'digit' | 'email' | 'image' | 'month' | 'radio' | 'range' | 'reset' | 'button' | 'hidden' | 'number' | 'search' | 'submit' | 'checkbox' | 'password' | 'textarea' | 'datetime-local' | 'idcard' | 'safe-password' | 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname';
type UniInputType = 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname';
interface InputRule {
    pattern?: RegExp;
    message?: string;
    required?: boolean;
}
type ConfirmTextType$1 = 'send' | 'search' | 'next' | 'go' | 'done';
interface InputTarget extends HTMLInputElement {
    composing?: boolean;
}
type InputMode = 'search' | 'tel' | 'url' | 'text' | 'email' | 'none' | 'decimal' | 'numeric';

declare const inputProps: {
    type: {
        type: PropType<InputType$1>;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    placeholderStyle: {
        type: StringConstructor;
        default: string;
    };
    placeholderClass: {
        type: StringConstructor;
        default: string;
    };
    inputAlign: {
        type: PropType<InputAlignType>;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTrigger: {
        type: PropType<InputFormatTrigger>;
        default: string;
    };
    formatter: {
        type: PropType<(value: string) => string>;
        default: null;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmType: {
        type: PropType<ConfirmTextType$1>;
        default: string;
    };
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysSystem: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputMode: {
        type: PropType<InputMode>;
        default: string;
    };
    cursorSpacing: {
        type: NumberConstructor;
        default: number;
    };
    alwaysEmbed: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmHold: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursor: {
        type: NumberConstructor;
    };
    selectionStart: {
        type: NumberConstructor;
        default: number;
    };
    selectionEnd: {
        type: NumberConstructor;
        default: number;
    };
    holdKeyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
declare const inputEmits: {
    click: (evt: any) => boolean;
    clickInput: (evt: any) => boolean;
    blur: (evt: any) => boolean;
    focus: (evt: any) => boolean;
    clear: () => boolean;
    keypress: () => boolean;
    confirm: (evt: any) => boolean;
    'update:modelValue': (_val1?: string, _val2?: any) => boolean;
};
type InputEmits = typeof inputEmits;
type InputProps = ExtractPropTypes<typeof inputProps>;

type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done' | 'return';
type AdjustKeyboardTo = 'cursor' | 'bottom';

declare const textareaProps: {
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorSpacing: {
        type: NumberConstructor;
        default: number;
    };
    cursor: {
        type: NumberConstructor;
        default: number;
    };
    showConfirmBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectionStart: {
        type: NumberConstructor;
        default: number;
    };
    selectionEnd: {
        type: NumberConstructor;
        default: number;
    };
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    holdKeyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableDefaultPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmType: {
        type: PropType<ConfirmTextType>;
        default: string;
    };
    confirmHold: {
        type: BooleanConstructor;
        default: boolean;
    };
    adjustKeyboardTo: {
        type: PropType<AdjustKeyboardTo>;
        default: string;
    };
};
type TextareaProps = ExtractPropTypes<typeof textareaProps>;
declare const textareaEmits: {
    blur: (evt: Event) => Event;
    focus: (evt: Event) => Event;
    change: (val1?: string, val2?: string | Event) => boolean;
    'update:modelValue': (val1?: string, val2?: string | Event) => boolean;
    confirm: (evt: any) => boolean;
};
type TextareaEmits = typeof textareaEmits;

declare const inputnumberProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    buttonSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalPlaces: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type InputNumberProps = ExtractPropTypes<typeof inputnumberProps>;
declare const inputnumberEmits: {
    blur: (evt: any) => any;
    focus: (evt: any) => any;
    reduce: (_evt: any | number) => boolean;
    add: (_evt: any | number) => boolean;
    overlimit: (_evt: any, _type: 'reduce' | 'add') => boolean;
    change: (_val1: string | number, _val2?: any) => boolean;
    'update:modelValue': (_val1?: string, _val2?: string | any) => boolean;
};
type InputNumberEmits = typeof inputnumberEmits;

declare const numberkeyboardProps: {
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"default" | "rightColumn">;
        default: string;
    };
    customKey: {
        type: ArrayConstructor;
        default: () => never[];
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    randomKeys: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
};
type NumberKeyBoardProps = ExtractPropTypes<typeof numberkeyboardProps>;
declare const numberkeyboardEmits: {
    input: (val: string | number) => boolean;
    delete: () => boolean;
    close: () => boolean;
    'update:visible': (visible: boolean) => boolean;
    'update:modelValue': (val: string | number) => boolean;
};
type NumberKeyBoardEmits = typeof numberkeyboardEmits;

declare const radioProps: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: PropType<"round" | "button">;
        default: string;
    };
    label: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
};
type RadioProps = ExtractPropTypes<typeof radioProps>;

declare const radiogroupProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: string;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
};
type RadioGroupProps = ExtractPropTypes<typeof radiogroupProps>;
declare const radiogroupEmits: {
    change: (val: string | number | boolean) => boolean;
    'update:modelValue': (val: string | boolean | number) => boolean;
};
type RadioGroupEmits = typeof radiogroupEmits;

type SliderValue = number | number[];
declare const rangeProps: {
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    buttonColor: StringConstructor;
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    marks: {
        type: ObjectConstructor;
        default: {};
    };
    hiddenRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    hiddenTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: PropType<SliderValue>;
        default: number;
    };
};
type RangeProps = ExtractPropTypes<typeof rangeProps>;
declare const rangeEmits: {
    'update:modelValue': (val: SliderValue) => boolean;
    dragStart: () => boolean;
    change: (val: SliderValue) => boolean;
    dragEnd: () => boolean;
};
type RangeEmits = typeof rangeEmits;

declare const rateProps: {
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customIcon: {
        type: StringConstructor;
        default: () => string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
};
type RateProps = ExtractPropTypes<typeof rateProps>;
declare const rateEmits: {
    'update:modelValue': (val: number) => boolean;
    change: (val: number) => boolean;
};
type RateEmits = typeof rateEmits;

type InputTextAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
type confirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';
type InputType = 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname';
declare const searchbarProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputType: {
        type: PropType<InputType>;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    inputBackground: {
        type: StringConstructor;
        default: string;
    };
    focusStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAlign: {
        type: StringConstructor;
        default: string;
    };
    confirmType: {
        type: PropType<confirmTextType>;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    cursorSpacing: {
        type: NumberConstructor;
        default: number;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type SearchbarProps = ExtractPropTypes<typeof searchbarProps>;
declare const searchbarEmits: {
    'update:modelValue': (_val: string | number, _event: Event) => boolean;
    change: (_val: string | number, _event: Event) => boolean;
    blur: (_val: string | number, _event: Event) => boolean;
    focus: (_val: string | number, _event: Event) => boolean;
    clear: (_val: string | number) => boolean;
    search: (_val: string | number) => boolean;
    clickInput: (_event: Event) => boolean;
    clickLeftIcon: (_val: string | number, _event: Event) => boolean;
    clickRightIcon: (_val: string | number, _event: Event) => boolean;
};
type SearchbarEmits = typeof searchbarEmits;

declare const shortpasswordProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    tips: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    errorMsg: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    length: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type ShortPasswordProps = ExtractPropTypes<typeof shortpasswordProps>;
declare const shortpasswordEmits: {
    'update:modelValue': (val: string | number, event: Event) => boolean;
    'update:visible': (val: boolean) => boolean;
    complete: (val: string) => boolean;
    tips: () => boolean;
    close: () => boolean;
    focus: () => boolean;
};
type ShortPasswordEmits = typeof shortpasswordEmits;

type SizeType = 'original' | 'compressed';
type SourceType = 'album' | 'camera';
type AcceptType = 'image' | 'media' | 'video' | 'all';
type MediaType = 'image' | 'video' | 'mix';
type FileType = 'image' | 'video' | 'audio';
type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error';
interface FileItem {
    status: FileItemStatus;
    message: string;
    uid?: string;
    name: string;
    url?: string;
    type?: FileType;
    path?: string;
    percentage?: string | number;
    formData?: any;
}

interface ChooseFile {
    size: number;
    type?: FileType;
    fileType?: FileType;
    originalFileObj?: any;
    tempFilePath?: string;
    thumbTempFilePath?: string;
    path?: string;
    name: string;
    thumb?: string;
    url?: string;
    [k: string]: unknown;
}
interface ChooseFileOptions {
    accept: AcceptType;
    multiple: boolean;
    capture: boolean;
    maxDuration: number;
    sizeType: SizeType[];
    camera?: 'back' | 'front';
    maxCount: number;
}
declare function chooseFile({ accept, multiple, capture, maxDuration, sizeType, camera, maxCount, }: ChooseFileOptions, props: UploaderProps, fileList: any[]): Promise<ChooseFile[]>;
type OnProgressUpdateResult = UniApp.OnProgressUpdateResult;
type UploadFileSuccessCallbackResult = UniApp.UploadFileSuccessCallbackResult;
type GeneralCallbackResult = UniApp.GeneralCallbackResult;
type UploadOptions = UniNamespace.UploadFileOption & {
    xhrState?: number;
    onStart?: (option: UploadOptions) => void;
    onProgress?: (result: UniApp.OnProgressUpdateResult, option: UploadOptions) => void;
    onSuccess?: (result: UniApp.UploadFileSuccessCallbackResult, option: UploadOptions) => void;
    onFailure?: (result: UniApp.GeneralCallbackResult | UniApp.UploadFileSuccessCallbackResult, option: UploadOptions) => void;
};
declare function createUploader(options: UploadOptions): {
    upload: () => void;
};

declare const uploaderProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    sourceType: {
        type: PropType<SourceType[]>;
        default: () => string[];
    };
    mediaType: {
        type: PropType<MediaType[]>;
        default: () => string[];
    };
    timeout: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fileList: {
        type: {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => never[];
    };
    isPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    isDeletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    capture: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maximum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    clearInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: PropType<AcceptType>;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: {};
    };
    data: {
        type: ObjectConstructor;
        default: {};
    };
    xhrState: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeDelete: {
        type: PropType<Interceptor>;
        default: (file: FileItem, files: FileItem[]) => boolean;
    };
    onChange: {
        type: FunctionConstructor;
    };
    /**
     * 当accept为video时生效，是否压缩视频，默认为true（默认 true ）
     * compressed: { type: Boolean, default: true },
     * 当accept为video时生效，拍摄视频最长拍摄时间，单位秒（默认 60 ）
     */
    maxDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    /**
     * 所选的图片的尺寸, 可选值为original compressed
     */
    sizeType: {
        type: PropType<SizeType[]>;
        default: string[];
    };
    /**
     * 当accept为video时生效，可选值为back或front
     */
    camera: {
        type: PropType<"back" | "front" | undefined>;
        default: string;
    };
    mode: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom" | "aspectFit" | "scaleToFill" | "aspectFill" | "widthFix" | "heightFix" | "top left" | "top right" | "bottom left" | "bottom right">;
        default: string;
    };
};
type UploaderProps = ExtractPropTypes<typeof uploaderProps>;
declare const uploaderEmits: {
    start: (option: UploadOptions) => UploadOptions;
    progress: (val: {
        event: any;
        option: UploadOptions;
        percentage: string | number;
    }) => boolean;
    'update:fileList': (val: FileItem[]) => boolean;
    oversize: (val: any[]) => boolean;
    success: (val: any) => any;
    failure: (err: any) => any;
    change: (val: {
        fileList: FileItem[];
        event?: any;
    }) => {
        fileList: FileItem[];
        event?: any;
    };
    delete: (val: {
        file: FileItem;
        fileList: FileItem[];
        index: number;
    }) => {
        file: FileItem;
        fileList: FileItem[];
        index: number;
    };
    fileItemClick: (val: any) => boolean;
};
type UploaderEmits = typeof uploaderEmits;
interface UploaderInst {
    submit: () => void;
    chooseImage: () => void;
    clearUploadQueue: (index: number) => void;
}

declare class FormItemRuleWithoutValidator {
    regex?: RegExp;
    required?: boolean;
    message: string;
    [key: string]: any;
}
declare class FormItemRule extends FormItemRuleWithoutValidator {
    validator?: (value: any, ruleCfg?: FormItemRuleWithoutValidator) => Promise<string | boolean>;
}

interface FormRules {
    [key: string]: FormItemRule[];
}
interface FormRule {
    prop: string;
    rules: FormItemRule[];
}
interface ErrorMessage {
    prop: string;
    message: string;
}
interface FormInst {
    reset: () => void;
    submit: () => void;
    validate: (customProp?: any) => Promise<any>;
}

declare const FORM_KEY: unique symbol;
declare const formProps: {
    modelValue: {
        type: ObjectConstructor;
        default: {};
    };
    rules: {
        type: PropType<FormRules>;
        default: {};
    };
};
type FormProps = ExtractPropTypes<typeof formProps>;
declare const formEmits: {
    validate: (msg: ErrorMessage) => ErrorMessage;
};
type FormEmits = typeof formEmits;

declare const formitemProps: {
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<FormItemRule[]>;
        default: () => never[];
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    errorMessageAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
};
type FormItemProps = ExtractPropTypes<typeof formitemProps>;

type ProgressSize = 'small' | 'base' | 'large';
type ProgressStatus = 'text' | 'active' | 'icon';

declare const progressProps: {
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: boolean;
    };
    size: {
        type: PropType<ProgressSize>;
        default: string;
    };
    status: {
        type: PropType<ProgressStatus>;
        default: string;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    textBackground: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type ProgressProps = ExtractPropTypes<typeof progressProps>;

type CircleProgressStrokeLinecap = 'butt' | 'round' | 'square';
declare const circleprogressProps: {
    progress: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    radius: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: {
        type: PropType<CircleProgressStrokeLinecap>;
        default: string;
    };
    customColor: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    pathColor: {
        type: StringConstructor;
        default: string;
    };
    clockwise: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type CircleProgressProps = ExtractPropTypes<typeof circleprogressProps>;

declare const collapseProps: {
    modelValue: {
        type: (NumberConstructor | StringConstructor | {
            (arrayLength: number): (string | number)[];
            (...items: (string | number)[]): (string | number)[];
            new (arrayLength: number): (string | number)[];
            new (...items: (string | number)[]): (string | number)[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: string;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type CollapseProps = ExtractPropTypes<typeof collapseProps>;
declare const collapseEmits: {
    change: (val: string | number | (string | number)[], name: string | number, status: boolean) => boolean;
    'update:modelValue': (val: string | number | (string | number)[]) => boolean;
};
type CollapseEmits = typeof collapseEmits;

declare const collapseitemProps: {
    collapseRef: {
        type: ObjectConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type CollapseItemProps = ExtractPropTypes<typeof collapseitemProps>;

type AnimateType = 'shake' | 'ripple' | 'breath' | 'float' | 'slide-right' | 'slide-left' | 'slide-top' | 'slide-bottom' | 'jump' | 'twinkle' | 'flicker';
type AnimateAction = 'initial' | 'click' | '';

declare const animateProps: {
    type: {
        type: PropType<AnimateType>;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    action: {
        type: PropType<AnimateAction>;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type AnimateProps = ExtractPropTypes<typeof animateProps>;
declare const animateEmits: {
    click: (evt: Event) => Event;
    animate: () => boolean;
};
type AnimateEmits = typeof animateEmits;

declare const countupProps: {
    initNum: {
        type: NumberConstructor;
        default: number;
    };
    endNum: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    toFixed: {
        type: NumberConstructor;
        default: number;
    };
    during: {
        type: NumberConstructor;
        default: number;
    };
    startFlag: {
        type: BooleanConstructor;
        default: boolean;
    };
    numWidth: {
        type: NumberConstructor;
        default: number;
    };
    numHeight: {
        type: NumberConstructor;
        default: number;
    };
    scrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    customBgImg: {
        type: StringConstructor;
        default: string;
    };
    customSpacNum: {
        type: NumberConstructor;
        default: number;
    };
    customChangeNum: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    machineNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeLevel: {
        type: NumberConstructor;
        default: number;
    };
    machineTrunMore: {
        type: NumberConstructor;
        default: number;
    };
};
type CountUpProps = ExtractPropTypes<typeof countupProps>;
declare const countupEmits: {
    click: () => boolean;
    scrollEnd: (val?: boolean) => boolean;
};
type CountUpEmits = typeof countupEmits;
interface IData {
    valFlag: boolean;
    current: number;
    sortFlag: string;
    initDigit1: number;
    initDigit2: number;
    to0_10: number[];
    to10_0: Array<number>;
    timer: null | any;
    totalCount: number;
    pointNum: number;
    numberVal: number;
    num_total_len: number;
    relNum: number;
    customNumber: number;
    prizeLevelTrun: number;
    prizeY: Array<any>;
    prizeYPrev: Array<any>;
    finshMachine: number;
    notPrize: Array<any>;
    typeMachine: string;
}
interface CountUpInst {
    machineLuck: () => void;
}

type Direction = 'start' | 'end' | 'middle';
interface EllipsisedValue {
    leading?: string;
    tailing?: string;
}
declare const ellipsisProps: {
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
};
type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>;
declare const ellipsisEmits: {
    change: (val: 'expand' | 'collapse') => "expand" | "collapse";
    click: () => boolean;
};
type EllipsisEmits = typeof ellipsisEmits;

type EmptyImage = 'empty' | 'error' | 'network' | string;
declare const emptyProps: {
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
};
type EmptyProps = ExtractPropTypes<typeof emptyProps>;

interface ImageInterface {
    src: string;
}

declare const imagepreviewProps: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<"top-right" | "top-left">;
        default: string;
    };
    beforeClose: PropType<Interceptor>;
    isLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type ImagePreviewProps = ExtractPropTypes<typeof imagepreviewProps>;
declare const imagepreviewEmits: {
    close: () => boolean;
    change: (_val: number) => boolean;
};
type ImagePreviewEmits = typeof imagepreviewEmits;

declare const clientHeight: number;
declare const listProps: {
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
    };
    containerHeight: {
        type: NumberConstructor[];
        default: number;
    };
    estimateRowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
};
type ListProps = ExtractPropTypes<typeof listProps>;
declare const listEmits: {
    scrollBottom: () => boolean;
    scroll: () => boolean;
};
type ListEmits = typeof listEmits;

declare const swiperProps: {
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    autoPlay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    isAutoPlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    initPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    isStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type SwiperProps = ExtractPropTypes<typeof swiperProps>;
declare const swiperEmits: {
    change: (val: number) => boolean;
};
type SwiperEmits = typeof swiperEmits;
declare const SWIPER_KEY: unique symbol;
interface SwiperInst {
    prev: () => void;
    next: () => void;
    to: (index: number) => void;
}

interface SwiperItemInst {
    setOffset: (offset: number) => void;
}

interface stateProps {
    wrapWidth: number;
    firstRound: boolean;
    duration: number;
    offsetWidth: number;
    showNoticebar: boolean;
    animationClass: string;
    animate: boolean;
    scrollList: never[];
    distance: number;
    timer: null;
    keepAlive: boolean;
    isCanScroll: null | boolean;
    showNotica: boolean;
    id: number;
}
declare const noticebarProps: {
    direction: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
};
type NoticeBarProps = ExtractPropTypes<typeof noticebarProps>;
declare const noticebarEmits: {
    click: (evt: Event) => boolean;
    close: (evt: Event) => boolean;
    acrossEnd: (evt: Event) => boolean;
};
type NoticeBarEmits = typeof noticebarEmits;

type PopoverTheme = 'light' | 'dark';
type PopoverLocation = 'bottom' | 'top' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
interface PopoverList {
    name: string;
    icon?: string;
    disabled?: boolean;
    className?: any;
    [key: PropertyKey]: any;
}

declare const popoverProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: PropType<PopoverList[]>;
        default: never[];
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    offset: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: number[];
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickAction: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetId: {
        type: StringConstructor;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type PopoverProps = ExtractPropTypes<typeof popoverProps>;
declare const popoverEmits: {
    update: (val: boolean) => boolean;
    'update:visible': (val: boolean) => boolean;
    open: () => boolean;
    close: () => boolean;
    choose: (item: any, index: number) => boolean;
};
type PopoverEmits = typeof popoverEmits;

type PriceSize = 'small' | 'normal' | 'large';
type PricePosition = 'before' | 'after';
declare const priceProps: {
    price: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    needSymbol: {
        type: BooleanConstructor;
        default: boolean;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    decimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    thousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<PricePosition>;
        default: string;
    };
    size: {
        type: PropType<PriceSize>;
        default: string;
    };
    strikeThrough: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type PriceProps = ExtractPropTypes<typeof priceProps>;

declare const skeletonProps: {
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: vue.PropType<AvatarShape>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;

declare const stepProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
};
type StepProps = ExtractPropTypes<typeof stepProps>;
declare const stepEmits: {
    clickStep: (val: number) => boolean;
};
type StepEmits = typeof stepEmits;

declare const stepsProps: {
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    progressDot: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type StepsProps = ExtractPropTypes<typeof stepsProps>;
declare const stepsEmits: {
    clickStep: (val: number) => boolean;
};
type StepsEmits = typeof stepsEmits;

interface TableColumnProps {
    key?: string;
    title?: string;
    align?: string;
    stylehead?: string;
    stylecolumn?: string;
    sorter?: (row1: any, row2: any) => boolean;
    render?: (rowData?: object, rowIndex?: number) => VNodeChild | string | VNode;
}

declare const tableProps: {
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: PropType<TableColumnProps[]>;
        default: () => never[];
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    summary: {
        type: FunctionConstructor;
        default: null;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type TableProps = ExtractPropTypes<typeof tableProps>;
declare const tableEmits: {
    sorter: (val: TableColumnProps) => boolean;
};
type TableEmits = typeof tableEmits;

type TagType = 'primary' | 'success' | 'danger' | 'warning';
declare const tagProps: {
    customColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<TagType>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type TagProps = ExtractPropTypes<typeof tagProps>;
declare const tagEmits: {
    click: (evt: any) => boolean;
    close: (evt: any) => boolean;
};
type TagEmits = typeof tagEmits;

interface StepOptions {
    target: string;
    content?: string;
    location?: PopoverLocation;
    popoverOffset?: number[];
    arrowOffset?: number;
}
declare const tourProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    steps: {
        type: PropType<StepOptions[]>;
        default: () => never[];
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    nextStepTxt: {
        type: StringConstructor;
        default: string;
    };
    prevStepTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: {
        type: PropType<number[]>;
        default: number[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    maskWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maskHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrevStep: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitleBar: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
};
type TourProps = ExtractPropTypes<typeof tourProps>;
declare const tourEmits: {
    'update:modelValue': (val: boolean) => boolean;
    close: (val: number) => boolean;
    change: (val: number) => boolean;
};
type TourEmits = typeof tourEmits;

declare const trendarrowProps: {
    rate: {
        type: NumberConstructor;
        default: number;
    };
    digits: {
        type: NumberConstructor;
        default: number;
    };
    showSign: {
        type: BooleanConstructor;
        default: boolean;
    };
    showZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    syncTextColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    riseColor: {
        type: StringConstructor;
        default: string;
    };
    dropColor: {
        type: StringConstructor;
        default: string;
    };
};
type TrendArrowProps = ExtractPropTypes<typeof trendarrowProps>;

declare const watermarkProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    gapY: {
        type: NumberConstructor;
        default: number;
    };
    gapX: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    image: {
        type: StringConstructor;
        default: string;
    };
    imageWidth: {
        type: NumberConstructor;
        default: number;
    };
    imageHeight: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
    };
    fontStyle: {
        type: StringConstructor;
        default: string;
    };
    fontFamily: {
        type: StringConstructor;
        default: string;
    };
    fontWeight: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fullPage: {
        type: BooleanConstructor;
        default: string;
    };
};
type WaterMarkProps = ExtractPropTypes<typeof watermarkProps>;
declare const watermarkEmits: {
    click: (val: Event) => boolean;
};
type WaterMarkEmits = typeof watermarkEmits;

interface RegionData {
    name: string;
    [key: string]: any;
}
interface CustomRegionData {
    title: string;
    list: any[];
}
interface existRegionData {
    id?: string | number;
    provinceName: string;
    cityName: string;
    countyName: string;
    townName: string;
    addressDetail: string;
    selectedAddress: boolean;
    [key: string]: any;
}

declare const addressProps: {
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    province: {
        type: PropType<RegionData[]>;
        default: () => never[];
    };
    city: {
        type: PropType<RegionData[]>;
        default: () => never[];
    };
    country: {
        type: PropType<RegionData[]>;
        default: () => never[];
    };
    town: {
        type: PropType<RegionData[]>;
        default: () => never[];
    };
    isShowCustomAddress: {
        type: BooleanConstructor;
        default: boolean;
    };
    existAddress: {
        type: PropType<existRegionData[]>;
        default: () => never[];
    };
    existAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    customAndExistTitle: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    columnsPlaceholder: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    position: {
        type: PropType<"left" | "right" | "center" | "top" | "bottom">;
        default: string;
    };
    transition: {
        type: PropType<NutAnimationName>;
        default: string;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: PropType<vue.StyleValue>;
        default: string;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayStyle: {
        type: PropType<vue.CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type AddressProps = ExtractPropTypes<typeof addressProps>;
declare const addressEmits: {
    'update:visible': (val: boolean) => boolean;
    'update:modelValue': () => boolean;
    type: () => boolean;
    close: (val: {
        data: any;
        type: string;
    }) => boolean;
    change: (val: any) => boolean;
    switchModule: (val: any) => boolean;
    closeMask: (val: any) => boolean;
    selected: (val: any, item: any, copyExistAdd: any[]) => boolean;
};
type AddressEmits = typeof addressEmits;

declare const addresslistProps: {
    data: {
        type: ArrayConstructor;
        default: never[];
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBottomButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ObjectConstructor;
        default: {};
    };
};
type AddressListProps = ExtractPropTypes<typeof addresslistProps>;
declare const addresslistEmits: {
    delIcon: (val: Event, item: unknown, index: number | string) => boolean;
    editIcon: (val: Event, item: unknown, index: number | string) => boolean;
    clickItem: (val: Event, item: unknown, index: number | string) => boolean;
    longCopy: (val: Event, item: unknown, index: number | string) => boolean;
    longSet: (val: Event, item: unknown, index: number | string) => boolean;
    longDel: (val: Event, item: unknown, index: number | string) => boolean;
    swipeDel: (val: Event, item: unknown, index: number | string) => boolean;
    add: (val: Event) => boolean;
};
type AddressListEmits = typeof addresslistEmits;

declare const barrageProps: {
    danmu: {
        type: ArrayConstructor;
        default: () => never[];
    };
    frequency: {
        type: NumberConstructor;
        default: number;
    };
    speeds: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type BarrageProps = ExtractPropTypes<typeof barrageProps>;
declare const barrageEmits: {
    click: () => boolean;
};
type BarrageEmits = typeof barrageEmits;
interface BarrageInst {
    add: (word: string) => void;
}

declare const cardProps: {
    imgUrl: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    price: {
        type: StringConstructor;
        default: string;
    };
    vipPrice: {
        type: StringConstructor;
        default: string;
    };
    shopDesc: {
        type: StringConstructor;
        default: string;
    };
    delivery: {
        type: StringConstructor;
        default: string;
    };
    shopName: {
        type: StringConstructor;
        default: string;
    };
    isNeedPrice: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type CardProps = ExtractPropTypes<typeof cardProps>;

interface CategoryType {
    catName?: string;
    [key: string]: any;
}
declare const categoryProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: PropType<CategoryType>;
        default: () => never[];
    };
};
type CategoryProps = ExtractPropTypes<typeof categoryProps>;
declare const categoryEmits: {
    change: (index: number) => boolean;
};
type CategoryEmits = typeof categoryEmits;

interface ChildType {
    catName?: string;
    catType?: number;
    [key: string]: any;
}
interface CustomType {
    catName?: string;
    [key: string]: any;
}
declare const categorypaneProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    categoryChild: {
        type: PropType<ChildType>;
        default: () => never[];
    };
    customCategory: {
        type: PropType<CustomType>;
        default: () => never[];
    };
};
type CategoryPaneProps = ExtractPropTypes<typeof categorypaneProps>;
declare const categorypaneEmits: {
    onChange: (sku: string) => boolean;
};
type CategoryPaneEmits = typeof categorypaneEmits;

interface VideosType {
    id: number | string;
    mainUrl: string;
    videoUrl: string;
}
interface ImagesType {
    smallImgUrl: string;
    bigImgUrl: string;
    imgUrl: string;
}
declare const commentProps: {
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (NumberConstructor | StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
};
type CommentProps = ExtractPropTypes<typeof commentProps>;
declare const commentEmits: {
    click: (val: object) => boolean;
    clickOperate: (val: string) => boolean;
    clickImages: (val: any) => boolean;
};
type CommentEmits = typeof commentEmits;

interface dataList {
    price: string | number;
}
declare const ecardProps: {
    chooseText: {
        type: StringConstructor;
        default: string;
    };
    otherValueText: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: PropType<dataList[]>;
        default: () => never[];
    };
    cardAmountMin: {
        type: NumberConstructor;
        default: number;
    };
    cardAmountMax: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMin: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMax: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
};
type ECardProps = ExtractPropTypes<typeof ecardProps>;
declare const ecardEmits: {
    inputChange: (val: number) => boolean;
    changeStep: (val1: number, val2: number | string) => boolean;
    inputClick: () => boolean;
    change: (item: {
        price: number | string;
    }) => boolean;
    'update:modelValue': (val: number) => boolean;
};
type ECardEmits = typeof ecardEmits;

declare const invoiceProps: {
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    formValue: {
        type: ObjectConstructor;
        default: {};
    };
    submit: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type InvoiceProps = ExtractPropTypes<typeof invoiceProps>;
declare const invoiceEmits: {
    onSubmit: (valid: any, errors: any) => boolean;
    scrollBottom: () => boolean;
};
type InvoiceEmits = typeof invoiceEmits;

declare const signatureProps: {
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeStyle: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    unSupportTpl: {
        type: StringConstructor;
        default: string;
    };
    customClass: {
        type: vue.PropType<ClassType>;
        default: string;
    };
    customStyle: {
        type: vue.PropType<vue.StyleValue>;
        default: string;
    };
};
type SignatureProps = ExtractPropTypes<typeof signatureProps>;
declare const signatureEmits: {
    start: () => boolean;
    end: () => boolean;
    signing: (event: any) => boolean;
    confirm: (_canvas: any, _filePath?: string) => boolean;
    clear: () => boolean;
};
type SignatureEmits = typeof signatureEmits;

declare const skuProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    sku: {
        type: ArrayConstructor;
        default: never[];
    };
    goods: {
        type: ObjectConstructor;
        default: {};
    };
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
};
type SkuProps = ExtractPropTypes<typeof skuProps>;
declare const skuEmits: {
    'update:visible': (val: boolean) => boolean;
    selectSku: (val: any) => boolean;
    changeStepper: (val: number) => boolean;
    clickBtnOperate: (val: {
        type: string;
        value: string | number;
    }) => boolean;
    clickCloseIcon: () => boolean;
    clickOverlay: () => boolean;
    close: () => boolean;
    reduce: (val: number) => boolean;
    add: (val: number) => boolean;
    overLimit: (val: any) => boolean;
};
type SkuEmits = typeof skuEmits;

declare const timedetailProps: {
    times: {
        type: PropType<any[]>;
        default: () => never[];
    };
};
type TimeDetailProps = ExtractPropTypes<typeof timedetailProps>;
declare const timedetailEmits: {
    select: (time: string) => boolean;
};
type TimeDetailEmits = typeof timedetailEmits;

declare const timepannelProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    pannelKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
type TimePannelProps = ExtractPropTypes<typeof timepannelProps>;
declare const timepannelEmits: {
    change: (pannelKey: number | string) => boolean;
};
type TimePannelEmits = typeof timepannelEmits;

declare const timeselectProps: {
    visible: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    height: {
        type: StringConstructor[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    currentKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    currentTime: {
        type: ArrayConstructor;
        default: () => never[];
    };
    muti: {
        type: BooleanConstructor[];
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor[];
        default: boolean;
    };
};
type TimeSelectProps = ExtractPropTypes<typeof timeselectProps>;
declare const timeselectEmits: {
    'update:visible': (val: boolean) => boolean;
    select: (val: any) => boolean;
};
type TimeSelectEmits = typeof timeselectEmits;

declare const dollmachineProps: {
    defaultClaw: {
        type: StringConstructor;
        default: string;
    };
    activeClaw: {
        type: StringConstructor;
        default: string;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    prizeList: {
        type: {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => never[];
    };
    prizeIndex: {
        type: NumberConstructor;
        default: number;
    };
};
type DollMachineProps = ExtractPropTypes<typeof dollmachineProps>;
declare const dollmachineEmits: {
    click: () => boolean;
    startTurns: () => boolean;
    endTurns: () => boolean;
};
type DollMachineEmits = typeof dollmachineEmits;

declare const giftboxProps: {
    initPrize: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type GiftBoxProps = ExtractPropTypes<typeof giftboxProps>;
declare const giftboxEmits: {
    startTurns: () => boolean;
    endTurns: () => boolean;
};
type GiftBoxEmits = typeof giftboxEmits;
interface GiftBoxInst {
    init: () => void;
}

declare const hiteggsProps: {
    num: {
        type: NumberConstructor;
        default: number;
    };
    intactImg: {
        type: StringConstructor;
        default: string;
    };
    hammer: {
        type: StringConstructor;
        default: string;
    };
    splitImg: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
};
type HitEggsProps = ExtractPropTypes<typeof hiteggsProps>;
declare const hiteggsEmits: {
    click: () => boolean;
};
type HitEggsEmits = typeof hiteggsEmits;

declare const marqueeProps: {
    styleOpt: {
        type: ObjectConstructor;
        default: () => {
            itemStyle: {};
            startStyle: {};
            bgStyle: {
                background: string;
            };
        };
    };
    prizeList: {
        type: {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: boolean;
    };
    prizeIndex: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    circle: {
        type: NumberConstructor;
        default: number;
    };
};
type MarqueeProps = ExtractPropTypes<typeof marqueeProps>;
declare const marqueeEmits: {
    click: () => boolean;
    startTurns: () => boolean;
    endTurns: () => boolean;
};
type MarqueeEmits = typeof marqueeEmits;

declare const shakediceProps: {
    time: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    id: {
        type: NumberConstructor;
        default: number;
    };
};
type ShakeDiceProps = ExtractPropTypes<typeof shakediceProps>;
declare const shakediceEmits: {
    end: () => boolean;
};
type ShakeDiceEmits = typeof shakediceEmits;
interface ShakeDiceInst {
    shake: () => true;
}

declare const turntableProps: {
    width: {
        required: boolean;
        default: string;
    };
    height: {
        required: boolean;
        default: string;
    };
    prizeList: {
        type: {
            (arrayLength: number): any[];
            (...items: any[]): any[];
            new (arrayLength: number): any[];
            new (...items: any[]): any[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: boolean;
        default: () => never[];
    };
    prizeIndex: {
        type: NumberConstructor;
        default: number;
    };
    turnsNumber: {
        type: NumberConstructor;
        default: number;
    };
    styleOpt: {
        default: () => {
            prizeBgColors: string[];
            borderColor: string;
        };
    };
    turnsTime: {
        default: number;
    };
    lockTime: {
        default: number;
    };
    pointerStyle: {
        default: () => {
            width: string;
            height: string;
            backgroundImage: string;
            backgroundSize: string;
            backgroundRepeat: string;
        };
    };
};
type TurnTableProps = ExtractPropTypes<typeof turntableProps>;
declare const turntableEmits: {
    click: () => boolean;
    startTurns: () => boolean;
    endTurns: () => boolean;
    lockTurns: () => boolean;
};
type TurnTableEmits = typeof turntableEmits;
interface TurnTableInst {
    rotateTurn: () => void;
}

interface TPrizeItem {
    id: string | number;
    prizeName: string;
    prizeColor: string;
    prizeImg: string;
}

declare const codeinputProps: {
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: PropType<"line" | "box">;
        default: string;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
    };
    space: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
    bold: {
        type: BooleanConstructor;
        default: boolean;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabledKeyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
    disabledDot: {
        type: BooleanConstructor;
        default: boolean;
    };
};
type CodeInputProps = ExtractPropTypes<typeof codeinputProps>;
declare const codeinputEmits: {
    change: (val: string) => boolean;
    input: (val: string) => boolean;
    finish: (val: string) => boolean;
    'update:modelValue': (val: number | string) => boolean;
};
type CodeInputEmits = typeof codeinputEmits;

declare const loadingpageProps: {
    loadingText: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    image: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    customColor: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    loadingColor: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
};
type LoadingPageProps = ExtractPropTypes<typeof loadingpageProps>;

declare function NutResolver(): ComponentResolver;

export { AVATAR_KEY, type AcceptType, type ActionSheetOption, type ActionsheetEmits, type ActionsheetProps, type AddressEmits, type AddressListEmits, type AddressListProps, type AddressProps, type AnimateEmits, type AnimateProps, type AvatarGroupProps, type AvatarProps, type AvatarShape, type AvatarSize, type BacktopEmits, type BacktopProps, type BadgeProps, type BarrageEmits, type BarrageInst, type BarrageProps, type ButtonEmits, type ButtonFormType, type ButtonProps, type ButtonShape, type ButtonSize, type ButtonType, type CalendarEmits, type CalendarItemEmits, type CalendarItemProps, type CalendarProps, type CardProps, type CascaderEmits, type CascaderItemEmits, type CascaderItemProps, type CascaderProps, type CategoryEmits, type CategoryPaneEmits, type CategoryPaneProps, type CategoryProps, type CategoryType, type CellEmits, type CellGroupProps, type CellProps, type CheckBoxInst, type CheckboxEmits, type CheckboxGroupEmits, type CheckboxGroupProps, type CheckboxProps, type ChildType, type ChooseFile, type ChooseFileOptions, type CircleProgressProps, type CircleProgressStrokeLinecap, type CodeInputEmits, type CodeInputProps, type ColProps, type CollapseEmits, type CollapseItemProps, type CollapseProps, type CommentEmits, type CommentProps, type ConfigProviderProps, type ConfirmTextType$1 as ConfirmTextType, type CountDownPropsProps, type CountUpEmits, type CountUpInst, type CountUpProps, type CountdownEmits, type CountdownInst, type CustomRegionData, type CustomType, type DatePickerEmits, type DatePickerProps, type DialogEmits, type DialogInst, type DialogOptions, type DialogProps, type Direction, type DividerProps, type DollMachineEmits, type DollMachineProps, type DragProps, type ECardEmits, type ECardProps, type ElevatorData, type ElevatorEmits, type ElevatorInst, type ElevatorProps, type EllipsisEmits, type EllipsisProps, type EllipsisedValue, type EmptyImage, type EmptyProps, type ErrorMessage, FORM_KEY, type FileItem, type FileItemStatus, type FileType, type Filter, type FixednavEmits, type FixednavProps, type FooterDirection, type FormEmits, type FormInst, type FormItemProps, FormItemRule, FormItemRuleWithoutValidator, type FormProps, type FormRule, type FormRules, type Formatter, GRID_KEY, type GeneralCallbackResult, type GiftBoxEmits, type GiftBoxInst, type GiftBoxProps, type GridDirection, type GridItemEmits, type GridItemProps, type GridProps, type HitEggsEmits, type HitEggsProps, type IClassNameProps, type IClassNames, type IData, type IconEmits, type IconProps, type ImagePreviewEmits, type ImagePreviewProps, type IndicatorAlign, type IndicatorProps, type InfiniteLoadingEmits, type InfiniteLoadingProps, type InputAlignType, type InputEmits, type InputFormatTrigger, type InputMode, type InputNumberEmits, type InputNumberProps, type InputProps, type InputRule, type InputTarget, type InputTextAlign, type InputType$1 as InputType, type InvoiceEmits, type InvoiceProps, type ListEmits, type ListProps, type LoadingPageProps, type MarqueeEmits, type MarqueeProps, type MediaType, type MenuItemInst, type MenuItemOption, type MenuItemProps, type MenuProps, type MenuitemEmits, type NavBarEmits, type NavBarProps, type NoticeBarEmits, type NoticeBarProps, type NotifyEmits, type NotifyInst, type NotifyOptions, type NotifyProps, type NotifyType, type NumberKeyBoardEmits, type NumberKeyBoardProps, type NutAnimation, type NutAnimationName, type NutAnimations, type NutAnimationtimingFunction, NutResolver, type OnProgressUpdateResult, type OverlayEmits, type OverlayProps, type PaginationEmits, type PaginationProps, type PickerColumnEmits, type PickerColumnOption, type PickerColumnProps, type PickerEmits, type PickerFieldNames, type PickerOption, type PickerProps, type PopoverEmits, type PopoverList, type PopoverLocation, type PopoverProps, type PopoverTheme, type PopupEmits, type PopupProps, type PricePosition, type PriceProps, type PriceSize, type ProgressProps, type ProgressSize, type ProgressStatus, type RadioGroupEmits, type RadioGroupProps, type RadioProps, type RangeEmits, type RangeProps, type RateEmits, type RateProps, type RegionData, type RowProps, SIDEN_NAVBAR_KEY, SWIPER_KEY, type SearchbarEmits, type SearchbarProps, type ShakeDiceEmits, type ShakeDiceInst, type ShakeDiceProps, type ShortPasswordEmits, type ShortPasswordProps, type SideNavbaritemEmits, type SideNavbaritemProps, type SidenavbarProps, type SignatureEmits, type SignatureProps, type SizeType, type SkeletonProps, type SkuEmits, type SkuProps, type SliderValue, type SourceType, type StepEmits, type StepOptions, type StepProps, type StepsEmits, type StepsProps, type StickyProps, type SubSidenavbarEmits, type SubSidenavbarProps, type SwipeEmits, type SwipeGroupProps, type SwipeInts, type SwipePosition, type SwipeProps, type SwiperEmits, type SwiperInst, type SwiperItemInst, type SwiperProps, type SwitchEmits, type SwitchProps, TAB_KEY, type TPrizeItem, type TabBarEmits, type TabBarItemProps, type TabBarProps, type TabPaneEmits, type TabPaneProps, type TableColumnProps, type TableEmits, type TableProps, type TabsEmits, type TabsProps, type TabsSize, type TagEmits, type TagProps, type TagType, type TextAlign, type TextareaEmits, type TextareaProps, type TimeDetailEmits, type TimeDetailProps, type TimePannelEmits, type TimePannelProps, type TimeSelectEmits, type TimeSelectProps, Title, type ToastEmits, type ToastInst, type ToastOptions, type ToastProps, type ToastType, type TouchParams, type TourEmits, type TourProps, type TransitionEmits, type TransitionName, type TransitionProps, type TrendArrowProps, type TurnTableEmits, type TurnTableInst, type TurnTableProps, type UniInputType, type UploadFileSuccessCallbackResult, type UploadOptions, type UploaderEmits, type UploaderInst, type UploaderProps, type WaterMarkEmits, type WaterMarkProps, actionsheetEmits, actionsheetProps, addressEmits, addressProps, addresslistEmits, addresslistProps, animateEmits, animateProps, avatarProps, avatargroupProps, backtopEmits, backtopProps, badgeProps, barrageEmits, barrageProps, calendarEmits, calendarProps, calendaritemEmits, calendaritemProps, cardProps, cascaderEmits, cascaderProps, cascaderitemEmits, cascaderitemProps, categoryEmits, categoryProps, categorypaneEmits, categorypaneProps, cellEmits, cellProps, cellgroupProps, checkboxEmits, checkboxProps, checkboxgroupEmits, checkboxgroupProps, chooseFile, circleprogressProps, clientHeight, codeinputEmits, codeinputProps, colProps, collapseEmits, collapseProps, collapseitemProps, commentEmits, commentProps, configProviderProps, type confirmTextType, countupEmits, countupProps, createUploader, currentYear, datepickerEmits, datepickerProps, defaultAnimations, dialogEmits, dialogProps, dividerProps, dollmachineEmits, dollmachineProps, dragProps, ecardEmits, ecardProps, elevatorEmits, elevatorProps, ellipsisEmits, ellipsisProps, emptyProps, type existRegionData, fixednavEmits, fixednavProps, formEmits, formProps, formitemProps, getClassNames, giftboxEmits, giftboxProps, gridItemEmits, gridItemProps, gridProps, hiteggsEmits, hiteggsProps, iconEmits, iconProps, imagepreviewEmits, imagepreviewProps, indicatorProps, infiniteloadingEmits, infiniteloadingProps, inputEmits, inputProps, inputnumberEmits, inputnumberProps, invoiceEmits, invoiceProps, isKeyOfAnimations, listEmits, listProps, loadingpageProps, marqueeEmits, marqueeProps, menuProps, menuitemEmits, menuitemProps, navbarEmits, navbarProps, noticebarEmits, noticebarProps, notifyEmits, notifyProps, numberkeyboardEmits, numberkeyboardProps, overlayEmits, overlayProps, paginationEmits, paginationProps, pickerEmits, pickerProps, pickercolumnEmits, pickercolumnProps, popoverEmits, popoverProps, popupEmits, popupProps, priceProps, progressProps, radioProps, radiogroupEmits, radiogroupProps, rangeEmits, rangeProps, rateEmits, rateProps, rowProps, searchbarEmits, searchbarProps, shakediceEmits, shakediceProps, shortpasswordEmits, shortpasswordProps, sidenavbarProps, sidenavbaritemEmits, sidenavbaritemProps, signatureEmits, signatureProps, skeletonProps, skuEmits, skuProps, type stateProps, stepEmits, stepProps, stepsEmits, stepsProps, stickyProps, subsidenavbarEmits, subsidenavbarProps, swipeEmits, swipeProps, swipegroupProps, swiperEmits, swiperProps, switchEmits, switchProps, tabbarEmits, tabbarProps, tabbaritemProps, tableEmits, tableProps, tabpaneEmits, tabpaneProps, tabsEmits, tabsProps, tagEmits, tagProps, textareaEmits, textareaProps, timedetailEmits, timedetailProps, timepannelEmits, timepannelProps, timeselectEmits, timeselectProps, toastEmits, toastProps, tourEmits, tourProps, transitionEmits, transitionProps, trendarrowProps, turntableEmits, turntableProps, uploaderEmits, uploaderProps, useDialog, useNotify, usePopup, useToast, useTransition, watermarkEmits, watermarkProps };
