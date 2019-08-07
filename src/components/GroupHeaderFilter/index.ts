import Vue from "vue";
import { IKDropDownData } from "@/interfaces/kendoui"
import KendoDropDownList from "@/components/KendoDropList/index.vue";

export default Vue.extend({
  name: "GroupHeaderFilter",
  components: {
    KendoDropDownList
  },
  data(): { Location: IKDropDownData, SiteGroup: IKDropDownData } {
    return {
      Location: {
        dataText: "SiteLocation",
        dataValue: "SiteCode",
        dataSource: {
          type: "json",
          transport: {
            read: "http://www.mocky.io/v2/5d3eec792f000038006d00d6"
          }
        }
      },
      SiteGroup: {
        dataText: "Group",
        dataValue: "GroupID",
        dataSource: {
          type: "json",
          transport: {
            read: "http://www.mocky.io/v2/5d3ef2282f00003e106d00ff"
          }
        }
      }
    }
  },
  mounted() {
  },
  created() {
  }
})