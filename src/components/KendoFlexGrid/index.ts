import Vue from "vue";
import FlexKendo from "@/assets/vendor/kendo/extensions/kendoFlex.js"
import axios from "axios"

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: () => `${axios.defaults.baseURL}/kendorequest`
    },
    localDataSource: Object,
    moduleName: String,
    moduleType: String,
    defaultSort: Array,
    paramValues: Array,
    schemaModel: Object,
    columns: Array,
    pageSize: Number,
    remote: {
      type: Boolean,
      default: () => false
    },
    remoteHttpMethod: {
      type: String,
      default: () => "POST"
    },
    autoBind: {
      type: Boolean,
      default: () => true
    },
    pageable: {
      type: Boolean,
      default: () => true
    }
  },
  mounted() {
    var that = this;
    let grid = this.$el as Element;
    grid.classList.add(`kvue-${FlexKendo.createGUID()}`);

    // once DOM is ready
    $(document).ready(() => {
      if (!this.remote) {
        // $(grid).kendoFlexGrid(this.localDataSource);
      } else {
        let dataSource = FlexKendo.getGridSource(
          {
            url: this.url,
            gridElement: grid,
            modelType: this.moduleType,
            httpMethod: this.remoteHttpMethod,
            defaultSort: this.defaultSort,
            pageLimit: this.pageSize,
            pageable: this.pageable
          },
          function() {
            let _gridSource = $(grid).data("kendoFlexGrid").dataSource,
              _options = {
                totalPages: _gridSource.totalPages(),
                total: _gridSource.total(),
                pageSize: that.pageSize,
                page: _gridSource.page()
              };

            that.$emit("afterBound", _options);
          }
        );

        (<any>jQuery(grid)).kendoFlexGrid({
            dataSource: dataSource,
            autoBind: this.autoBind,
            columns: this.columns, 
            pageable: this.pageable
        });
      }
    });
  },
  methods: {}
})