<template>
  <div
    ref="multiselect"
    :tabindex="tabindex"
    :class="classList.container"
    :id="id"
    @focusin="activate"
    @focusout="deactivate"
    @keydown="handleKeydown"
    @focus="handleFocus"
  >
  asd</div>
    <!-- Search -->
    <div v-if="mode !== 'tags' && searchable && !disabled">
      <input    
        :modelValue="search"
        :value="search"
        :class="classList.search"
        @input="handleSearchInput"
        ref="input"
      />
    </div>

    <!-- Tags (with search) -->
    
</template>

<script>
  import useData from './composables/useData'
  import useValue from './composables/useValue'
  import useSearch from './composables/useSearch'
  import usePointer from './composables/usePointer'
  import useOptions from './composables/useOptions'
  import usePointerAction from './composables/usePointerAction'
  import useDropdown from './composables/useDropdown'
  import useMultiselect from './composables/useMultiselect'
  import useKeyboard from './composables/useKeyboard' 
  import useClasses from './composables/useClasses' 

  export default {
    name: 'Multiselect',
    emits: [
      'open', 'close', 'select', 'deselect', 
      'input', 'search-change', 'tag', 'update:modelValue',
      'change', 'clear'
    ],
    props: {
      value: {
        required: false,
      },
      modelValue: {
        required: false,
      },
      options: {
        type: [Array, Object, Function],
        required: false,
        default: () => ([])
      },
      id: {
        type: [String, Number],
        required: false,
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'multiselect',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: 'label',
      },
      trackBy: {
        type: String,
        required: false,
        default: 'label',
      },
      valueProp: {
        type: String,
        required: false,
        default: 'value',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      mode: {
        type: String,
        required: false,
        default: 'single', // single|multiple|tags
      },
      searchable: {
        type: Boolean,
        required: false,
        default: false,
      },
      limit: {
        type: Number,
        required: false,
        default: -1,
      },
      hideSelected: {
        type: Boolean,
        required: false,
        default: true,
      },
      createTag: {
        type: Boolean,
        required: false,
        default: false,
      },
      appendNewTag: {
        type: Boolean,
        required: false,
        default: true,
      },
      caret: {
        type: Boolean,
        required: false,
        default: true,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      noOptionsText: {
        type: String,
        required: false,
        default: 'The list is empty',
      },
      noResultsText: {
        type: String,
        required: false,
        default: 'No results found',
      },
      multipleLabel: {
        type: Function,
        required: false,
      },
      object: {
        type: Boolean,
        required: false,
        default: false,
      },
      delay: {
        type: Number,
        required: false,
        default: -1,
      },
      minChars: {
        type: Number,
        required: false,
        default: 0,
      },
      resolveOnLoad: {
        type: Boolean,
        required: false,
        default: true,
      },
      filterResults: {
        type: Boolean,
        required: false,
        default: true,
      },
      clearOnSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      clearOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canDeselect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canClear: {
        type: Boolean,
        required: false,
        default: true,
      },
      max: {
        type: Number,
        required: false,
        default: -1,
      },
      showOptions: {
        type: Boolean,
        required: false,
        default: true,
      },
      addTagOn: {
        type: Array,
        required: false,
        default: () => (['enter']),
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      openDirection: {
        type: String,
        required: false,
        default: 'bottom',
      },
      nativeSupport: {
        type: Boolean,
        required: false,
        default: false,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      strict: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    setup(props, context)
    { 
      const value = useValue(props, context)
      const pointer = usePointer(props, context)
      const dropdown = useDropdown(props, context)
      const search = useSearch(props, context)

      const data = useData(props, context, {
        iv: value.iv,
      })

      const multiselect = useMultiselect(props, context, {
        input: search.input,
        open: dropdown.open,
        close: dropdown.close,
      })

      const options = useOptions(props, context, {
        ev: value.ev,
        iv: value.iv,
        search: search.search,
        clearSearch: search.clearSearch,
        update: data.update,
        pointer: pointer.pointer,
        blur: multiselect.blur,
      })

      const pointerAction = usePointerAction(props, context, {
        fo: options.fo,
        handleOptionClick: options.handleOptionClick,
        search: search.search,
        pointer: pointer.pointer,
        multiselect: multiselect.multiselect,
      })

      const keyboard = useKeyboard(props, context, {
        iv: value.iv,
        update: data.update,
        search: search.search,
        setPointer: pointerAction.setPointer,
        selectPointer: pointerAction.selectPointer,
        backwardPointer: pointerAction.backwardPointer,
        forwardPointer: pointerAction.forwardPointer,
        blur: multiselect.blur,
        fo: options.fo,
      })

      const classes = useClasses(props, context, {
        isOpen: dropdown.isOpen,
        isPointed: pointerAction.isPointed,
        isSelected: options.isSelected,
        isDisabled: options.isDisabled,
        isActive: multiselect.isActive,
      })

      return {
        ...value,
        ...dropdown,
        ...multiselect,
        ...pointer,
        ...data,
        ...search,
        ...options,
        ...pointerAction,
        ...keyboard,
        ...classes,
      }
    }
  }
</script>