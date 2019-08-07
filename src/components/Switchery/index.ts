import Vue from "vue";
var Switchery = require('switchery');

export default Vue.extend({
    name: "switchery",
    props: {
        color: {
            type: String,
            default: () => "#64bd63"
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        speed: {
            type: String,
            default: () => "0.1s"
        },
        size: {
            type: String,
            default: () => "normal" // normal | small
        },
        checked: {
            type: Boolean,
            default: () => false
        }
    },
    mounted() {

        // once DOM is ready
        this.$nextTick(() => {
            var that = this;
            let element = this.$el;
            var init = new Switchery(element, {
                className: `switchery switchery-${this.size}`,
                color: this.color,
                disabled: this.disabled,
                speed: this.speed
            });
        })
    },
    methods: {}
})