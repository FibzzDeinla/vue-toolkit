import { mount } from "@vue/test-utils"
import { Button } from "element-ui";
import MButton from "@/components/MButton/index.vue"
let Vue = require('vue');

// Register El-Button
Vue.component(Button.name, Button)

describe('MButton', () => {
  let cmp;
  const createCmp = propsData => mount(MButton, { propsData });

  it('color attribute has default value', () => {
    cmp = createCmp();

    expect(cmp.props().color).not.toBeNull()
    expect(cmp.props().color).toEqual("default")
  });
})