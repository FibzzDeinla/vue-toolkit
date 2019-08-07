<template>
  <div>
    <h1>Radial Menu</h1>
    <radial-menu :listMenu="lists"></radial-menu>

    <el-row>
      <el-col :span="24">
        Radial Menu for floating buttons with menus on circular menu form. Take Note it only supports bottom left and bottom right position.
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      class="mb-35"
      style="width: 100%">
      <el-table-column
        prop="attr"
        label="Attribute"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="Description"
        width="300">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type"
        width="120">
      </el-table-column>
      <el-table-column
        prop="values"
        label="Accepted Values"
        width="180">
      </el-table-column>
      <el-table-column
        prop="defaultvalue"
        label="Default Value"
        width="180">
      </el-table-column>
    </el-table>

    <!-- Code Snippet -->
    <clipboard>
    &lt;template&gt;
        &lt;radial-menu :listMenu=&quot;lists&quot;&gt;&lt;/radial-menu&gt;
    &lt;template&gt;

    &lt;script&gt;
    import RadialMenu from &quot;@/components/RadialMenu&quot;;

    export default {
      components: {
        RadialMenu,
      },
      data() {
        return {
          lists: [
            { title: &quot;Menu 1&quot;, icon: &quot;icon-1&quot;, active: true },
            { title: &quot;Menu 2&quot;, icon: &quot;icon-2&quot; },
            { title: &quot;Menu 3&quot;, icon: &quot;icon-3&quot; },
            ...
          ]
        };
      }
    };
    &lt;/script&gt;
    </clipboard>
    
  </div>
</template>

<script>
import RadialMenu from "@/components/RadialMenu";

export default {
  components: {
    RadialMenu
  },
  data() {
    return {
      lists: [
        { title: "Work Order", icon: "amsicon-home", active: true },
        { title: "Inspection", icon: "amsicon-home" },
        { title: "Suspend", icon: "amsicon-home" },
        { title: "Disposition", icon: "amsicon-home" },
        { title: "Work order", icon: "amsicon-home" },
        { title: "Inspection", icon: "amsicon-home" },
        { title: "Suspend", icon: "amsicon-home" },
        { title: "Disposition", icon: "amsicon-home" },
        { title: "Inspection", icon: "amsicon-home" },
        { title: "Work order", icon: "amsicon-home" },
        { title: "Inspection", icon: "amsicon-home" },
        { title: "Disposition", icon: "amsicon-home" },
        { title: "Inspection", icon: "amsicon-home" },
        { title: "Work order", icon: "amsicon-home" },
        { title: "Inspection", icon: "amsicon-home" }
      ],
      tableData: [
        {
          attr: "listMenu",
          desc: "Array list of objects",
          type: "Array",
          values: "-",
          defaultvalue: "-"
        },
        {
          attr: "position",
          desc: "Position of the radial menu",
          type: "String",
          values: "bottom-right, bottom-left",
          defaultvalue: "bottom-right"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style>

</style>

