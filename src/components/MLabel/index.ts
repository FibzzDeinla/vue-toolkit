import Vue, { PropOptions, PropType } from "vue";
import _ from 'lodash'

type IMLabelSource = {
    field: String,
    label: String
}

export default Vue.extend({
    name: "mlabel",
    props: {
        labelField: {
            type: String
        },
        labelSource: <PropOptions<IMLabelSource[]>>{
            type: Array,
            required: true,
            validator: (data) => {
                return ((data instanceof Array));
            }
        }
    },
    data(): { labelText: String } {
        return {
            labelText: "No Label"
        }
    },
    mounted() {
        // once DOM is ready
        this.$nextTick(() => {

            let labels: any = _.find(this.labelSource, ['field', this.labelField]);
            this.labelText = _.isEmpty(labels) ? this.labelText : labels.label;
        })
    },
    methods: {}
})