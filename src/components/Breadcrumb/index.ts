import Vue from "vue";
import { RouteRecord } from "vue-router";

interface BreadcrumbData {
  breadcrumbList: RouteRecord[];
}

export default Vue.extend({
  data(): BreadcrumbData {
    return {
      breadcrumbList: []
    };
  },
  watch: {
    $route() {
      this.getBreadcrumbs();
    }
  },
  created() {
    this.getBreadcrumbs();
  },
  methods: {
    getBreadcrumbs(): void {
      let matched = this.$route.matched.filter(item => item.name !== "layout");
      this.breadcrumbList = matched;
    },
    hasValue(variable: string) : Boolean {
      if (!variable.includes("#")) return true;
      else return false;
    }
  }
});