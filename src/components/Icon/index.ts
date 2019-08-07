import Vue from "vue";
import "@/assets/fonts/fastrax_icons/style.css";

export default Vue.extend({
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: String 
        },
        color: {
            type: String,
            default: "#333333"
        }
    },
})