import Vue from "vue"
import Waves, { ElementSelector } from "node-waves"

export default Vue.extend({
  name: "mbutton",
  props: {
    iconClass: {
      type: String
    },
    color: {
      type: String,
      default: () => "default"
    },
    clickHandler: {
      type: Function,
      default: () => null
    },
    inverted: {
      type: Boolean,
      default: () => false
    },
    circle: {
      type: Boolean,
      default: () => false
    },
    round: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    }
  },
  watch: {},
  created() {
    this.$nextTick(() => {
      let _element = this.$el as ElementSelector;
      Waves.attach(_element, ["waves-button", "waves-float", "waves-light"]);
      Waves.init();
    });
  }
})