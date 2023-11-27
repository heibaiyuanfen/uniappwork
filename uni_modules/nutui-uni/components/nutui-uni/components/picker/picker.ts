import type { ExtractPropTypes, PropType } from 'vue'
import type { PickerFieldNames, PickerOption } from '../pickercolumn/types'

export const pickerProps = {
  modelValue: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  cancelText: {
    type: String,
    default: '',
  },
  okText: {
    type: String,
    default: '',
  },
  columns: {
    type: Array as PropType<(PickerOption | PickerOption[])[]>,
    default: () => {
      return []
    },
  },
  threeDimensional: {
    type: Boolean,
    default: true,
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000,
  },
  showToolbar: {
    type: Boolean,
    default: true,
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7,
  },
  optionHeight: {
    type: [Number, String],
    default: 36,
  },
  fieldNames: {
    type: Object as PropType<PickerFieldNames>,
    default: () => ({}),
  },
}

export type PickerProps = ExtractPropTypes<typeof pickerProps>

export const pickerEmits = {
  'cancel': (val: {
    selectedValue: (string | number)[]
    selectedOptions: PickerOption[]
  }) => val,
  'change': (val: {
    columnIndex: number
    selectedValue: (string | number)[]
    selectedOptions: PickerOption[]
  }) => val,
  'confirm': (val: {
    selectedValue: (string | number)[]
    selectedOptions: PickerOption[]
  }) => val,
  'update:modelValue': (val: (string | number)[]) => val,
}

export type PickerEmits = typeof pickerEmits
