<template>
  <div class="button-container">
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>MLabel</h1>
            <p></p>
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
        &lt;mlabel labelField=&quot;asset_id&quot; /&gt;
    &lt;template&gt;

    &lt;script&gt;
    import MLabel from &quot;@/components/MLabel&quot;;

    export default {
        components: {
            MLabel
        }
    };
    &lt;/script&gt;
    </clipboard>

    <el-row>
      <el-col :span="4">
         <mlabel for="test" labelField="asset_id" :labelSource="labelSource" />
          <input id="test" name="test" type="text" class="form-control">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mlabel from "@/components/MLabel/index.vue"

export default {
  components: {
    Mlabel
  },
  data() {
    return {
      labelSource: [
          { dfdf: "dfdf" }
        //   { field: "asset_id", label: "test" }
      ],
      tableDataAttr: [
        {
          attr: "labelField",
          desc: "Field name corresponds to object field",
          type: "String",
          values: "",
          defaultvalue: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
