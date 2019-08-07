import Vue from "vue";
import _ from 'lodash'

export default Vue.extend({
    name: "mlabel",
    props: {
        labelField: {
            type: String
        }
    },
    data(): { labelText: String } {
        return {
            labelText: ""
        }
    },
    mounted() {
        // once DOM is ready
        this.$nextTick(() => {
            let labels: any = _.find(this.$store.getters.dynamicLabels, ['field', this.labelField]);
            this.labelText = _.isEmpty(labels) ? "" : labels.label;
        })
    },
    methods: {}
})