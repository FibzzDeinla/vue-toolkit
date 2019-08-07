import router from "../../router";
import userService from "@/services/user.service";

// Actions
const state = {
  routes: () => {
    return router.options.routes || {};
  }
};

// Actions
const actions = {
  generateRoutes: async ({ commit }) => {
    const routes = await userService.getUserAccess(1);
    return parentChildTagging(routes);
  }
};

const mutations = {};

export const app = {
  namespaced: true,
  state,
  actions,
  mutations
};

const loadView = view => {
  return () => import(`@/views/${view.toLowerCase()}`);
};

const parentChildTagging = data => {
  let pages = {};
  let pagesAndModules = [...routeData.pagesModules];
  pagesAndModules[0].component = loadView(pagesAndModules[0].name);

  data.forEach(value => {
    value.component = loadView(value.name);
    pages[value._id] = value;
  });

  Object.values(pages).forEach(page =>
    !page.parent
      ? pagesAndModules[0].children.push(page)
      : pages[page.parent].children.push(page)
  );

  return pagesAndModules;
};

const routeData = {
  pagesModules: [
    {
      _id: 0,
      name: "layout",
      path: "",
      children: [],
      meta: {}
    }
  ],
  dummyPaths: [
    {
      _id: 3,
      parent: 0,
      name: "dashboard",
      path: "/dashboard",
      children: [],
      meta: {
        display: "Dashboard",
        icon: "fastrax-dashboard",
        roles: ["admin", "guest"],
        permissions: ["canRead", "canExport", "canSuspend"]
      }
    },
    {
      _id: 4,
      parent: 0,
      name: "asset",
      path: "/asset",
      children: [],
      meta: {
        display: "Asset",
        icon: "fastrax-asset",
        roles: ["admin", "guest"],
        permissions: ["canRead", "canExport", "canSuspend"]
      }
    },
    {
      _id: 5,
      parent: 0,
      name: "customer",
      path: "/customer",
      children: [],
      meta: {
        display: "Customer",
        icon: "fastrax-customer",
        roles: ["admin", "guest"],
        permissions: ["canRead", "canExport", "canSuspend"]
      }
    },
    {
      _id: 6,
      parent: 5,
      name: "customer/account",
      path: "/customer/account",
      children: [],
      meta: {
        display: "Accounts",
        icon: "fastrax-asset",
        roles: ["admin", "guest"],
        permissions: ["canRead", "canExport", "canSuspend"]
      }
    }
  ]
};
