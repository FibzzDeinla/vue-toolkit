<template>
  <div class="button-container">
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>Switchery</h1>
            <p>An iOS like widget for switch or toggle button.</p>
        </m-blockquote>
      </el-col>
    </el-row>

    <h2>Attributes</h2>
    <el-table :data="tableDataAttr" class="mb-35" style="width: 100%">
      <el-table-column prop="attr" label="Attribute" width="180"></el-table-column>
      <el-table-column prop="desc" label="Description" width="300"></el-table-column>
      <el-table-column prop="type" label="Type" width="120"></el-table-column>
      <el-table-column prop="values" label="Accepted Values" width="180"></el-table-column>
      <el-table-column prop="defaultvalue" label="Default Value"></el-table-column>
    </el-table>

    <!-- Code Snippet -->
    <clipboard class="mt-35 mb-35">
    &lt;template&gt;
        &lt;switchery :checked=&quot;true&quot; /&gt;
    &lt;template&gt;

    &lt;script&gt;
    import Switchery from &quot;@/components/Switchery&quot;;

    export default {
      components: {
        Switchery
      }
    };
    &lt;/script&gt;
    </clipboard>

    <el-row>
      <el-col :span="4">
        <dl>
          <dt>Checked</dt>
          <dd>
            <switchery :checked="true" />
          </dd>
          <dt>Unchecked</dt>
          <dd>
            <switchery :checked="false" />
          </dd>
        </dl>
      </el-col>
      <el-col :span="4">
        <dl>
          <dt>Disabled</dt>
          <dd>
            <switchery :disabled="true" />
          </dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Switchery from "@/components/Switchery";

export default {
  components: {
    Switchery
  },
  data() {
    return {
      tableDataAttr: [
        {
          attr: "color",
          desc: "Visual characteristics of the button",
          type: "String",
          values: "Any Web Colors",
          defaultvalue: "#64bd63"
        },
        {
          attr: "speed",
          desc: "Animation speed of switch button",
          type: "String",
          values: "-",
          defaultvalue: "0.1s"
        },
        {
          attr: "disabled",
          desc: "Status of switch button",
          type: "Boolean",
          values: "true, false",
          defaultvalue: "false"
        },
        {
          attr: "size",
          desc: "Size of the switch button",
          type: "Boolean",
          values: "normal, small",
          defaultvalue: "normal"
        },
        {
          attr: "checked",
          desc: "State of the switch button",
          type: "Boolean",
          values: "true, false",
          defaultvalue: "false"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
