<template>
  <div>
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>Radial Menu</h1>
            <p>Circular floating menu for navigation. Take Note it only supports <em>bottom-left</em> and <em>bottom-right</em> position.</p>
        </m-blockquote>
      </el-col>
    </el-row>

    <h2>Attributes</h2>
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

    <h2>Events</h2>
    <el-table :data="tableDataEvnts" class="mb-35" style="width: 100%">
      <el-table-column prop="attr" label="Attribute" width="180"></el-table-column>
      <el-table-column prop="desc" label="Description" width="300"></el-table-column>
      <el-table-column prop="parameter" label="Parameters"></el-table-column>
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
    
    <radial-menu :listMenu="lists" @onClick="clickMe"></radial-menu>
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
        { title: "Work Order", icon: "\ue90f", active: true },
        { title: "Inspection", icon: "\ue918" },
        { title: "Suspend", icon: "\ue911" },
        { title: "Disposition", icon: "\ue912" },
        { title: "Work order", icon: "\ue913" },
        { title: "Inspection", icon: "\ue914" },
        { title: "Suspend", icon: "\ue915" },
        { title: "Disposition", icon: "\ue913" },
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
      ],
      tableDataEvnts: [
        {
          attr: "onClick",
          desc: "Triggers event once radial item is clicked",
          parameter: "data (Selected object)"
        }
      ],
    };
  },
  computed: {},
  created() {},
  methods: {
    clickMe(data){
      alert(data.title)
    }
  }
};
</script>

<style>

</style>

