import Vue from "vue";
let Kendo = require("@/vendor/kendo/js/kendo.all.min.js");

export default Vue.extend({
    name: "currencyinput",
    data() {
      return {
        result: {
          value: 0,
          text: '',
          rawValue: 0
        },
        format: `N${this.digits}`
      }
    },
    props: {
      digits: {
        type: Number,
        default: () => 2
      },
      rate: {
        type: Number,
        default: () => 100
      },
      value: {
        type: Number,
        default: () => 1
      },
      currencyCode: {
        type: String,
        default: () => "USD"
      }
    },
    mounted() {
      var that = this;
      let element = this.$el;
      let value:number;
      let currencyRate = (this.currencyCode == 'USD' ? this.rate : 100 / this.rate);

      value = (this.value * currencyRate);
      this.result.rawValue = value;
      this.result.text = Kendo.toString(value, this.format)
      this.result.value = parseFloat(this.result.text.toString().replace(/[, ]+/g, ""));

      // adds data attribute
      $(element).data(this.result);
    },
    created() {
    }
  })