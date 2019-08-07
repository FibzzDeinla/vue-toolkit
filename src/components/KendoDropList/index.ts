import Vue from "vue";
import axios from "axios"

export default Vue.extend({
    name: "kendodropdownlist",
    props: {
        dataValue: {
            type: String
        },
        dataText: {
            type: String
        },
        dataSource: {
            type: [Object, Array]
        },
        optionLabel: {
            type: Object
        }
    },
    mounted() {
        var that = this;
        let dropdownList = this.$el as Element;

        // once DOM is ready
        $(document).ready(() => {
            (<any>jQuery(dropdownList)).kendoDropDownList({
                optionLabel: this.optionLabel,
                dataTextField: this.dataText,
                dataValueField: this.dataValue,
                dataSource: this.dataSource,
                select: () => this.$emit('onSelect'),
                dataBound: () => this.$emit('onDataBound')
            });
        });
    },
    methods: {}
})