import Vue from "vue";
import $ from 'jquery';
import Inputmask from "inputmask";
(window as any).jQuery = $;
let Kendo = require("@/assets/vendor/kendo/js/kendo.all.min.js");

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
      },
      converted: {
        type: Boolean,
        default: () => true
      },
      readonly: {
        type: Boolean,
        default: () => true
      }
    },
    mounted() {
      var that = this;
      let element = this.$el;

      if (this.converted){
        let value:number;
        let currencyRate = (this.currencyCode == 'USD' ? this.rate : 100 / this.rate);
  
        value = (this.value * currencyRate);
        this.result.rawValue = value;
        this.result.text = Kendo.toString(value, this.format)
        this.result.value = parseFloat(this.result.text.toString().replace(/[, ]+/g, ""));
      }
      else {
        this.result.rawValue = this.value;
        this.result.text = Kendo.toString(this.value, this.format)
        this.result.value = parseFloat(this.result.text.toString().replace(/[, ]+/g, ""));
      }

      if (!this.readonly) {
        var selector: any = this.$refs.input;
        var im = new Inputmask('currency', {
              prefix: "",
              digits: `${this.digits}`
        });
        im.mask(selector);
      }

      // adds data attribute
      $(element).data(this.result);
    },
    created() {
    }
  })