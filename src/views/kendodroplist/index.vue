<template>
  <div class="button-container">
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>KendoDropList</h1>
            <p>A widget extension of Telerik Kendo Dropdownlist for VueJS with customized attributes or properties.</p>
        </m-blockquote>
      </el-col>
    </el-row>

    <h2>Attributes</h2>
    <el-table :data="tableDataAttr" class="mb-35" style="width: 100%">
      <el-table-column prop="attr" label="Attribute" width="180"></el-table-column>
      <el-table-column prop="desc" label="Description" width="320"></el-table-column>
      <el-table-column prop="type" label="Type" width="120"></el-table-column>
      <el-table-column prop="values" label="Accepted Values" width="180"></el-table-column>
      <el-table-column prop="defaultvalue" label="Default Value"></el-table-column>
    </el-table>

    <h2>Events</h2>
    <el-table :data="tableDataEvnts" class="mb-35" style="width: 100%">
      <el-table-column prop="attr" label="Attribute" width="180"></el-table-column>
      <el-table-column prop="desc" label="Description" width="300"></el-table-column>
      <el-table-column prop="parameter" label="Parameters"></el-table-column>
    </el-table>

    <!-- Code Snippet -->
    <clipboard class="mt-35 mb-35">
    &lt;template&gt;
        &lt;kendodropdownlist 
            optionLabel=&quot;Select here..&quot;
            :dataValue=&quot;kendoData.dataValue&quot; 
            :dataText=&quot;kendoData.dataText&quot; 
            :dataSource=&quot;kendoData.dataSource&quot;/&gt;
    &lt;template&gt;

    &lt;script&gt;
    import kendodropdownlist from &quot;@/components/KendoDropList&quot;;

    export default {
      components: {
        kendodropdownlist
      },
      data() {
        return {
          kendoData: {
            dataValue: &quot;id&quot;,
            dataText: &quot;title&quot;,
            dataSource: {
              transport: {
                  read: {
                      dataType: &quot;jsonp&quot;,
                      url: &quot;https://my-json-server.typicode.com/typicode/demo/posts&quot;,
                  }
              }
            }
          }
        };
      }
    };
    &lt;/script&gt;
    </clipboard>

    <kendodropdownlist 
        optionLabel="Select here.."
        :dataValue="kendoData.dataValue" 
        :dataText="kendoData.dataText" 
        :dataSource="kendoData.dataSource"/>
  </div>
</template>

<script>
import kendodropdownlist from "@/components/KendoDropList";

export default {
  name: "SwitcheryPage",
  components: {
    kendodropdownlist
  },
  data() {
    return {
      tableDataAttr: [
        {
          attr: "dataValue",
          desc: "The field of the data item that provides the value of the widget.",
          type: "String",
          values: "Any Web Colors",
          defaultvalue: "#64bd63"
        },
        {
          attr: "dataText",
          desc: "The field of the data item that provides the text content of the list items.",
          type: "String",
          values: "-",
          defaultvalue: "0.1s"
        },
        {
          attr: "dataSource",
          desc: "list of object values with dataValue and dataText field which will be displayed",
          type: "Object",
          values: "true, false",
          defaultvalue: "false"
        },
        {
          attr: "optionLabel",
          desc: "Text that will be displayed like a placeholder",
          type: "String",
          values: "normal, small",
          defaultvalue: "normal"
        }
      ],
      tableDataEvnts: [
        {
          attr: "onSelect",
          desc: "Triggers event once dropdown option has been selected",
          parameter: "-"
        },
        {
          attr: "onDataBound",
          desc: "Triggers event once dropdown option was loaded",
          parameter: "-"
        }
      ],
      kendoData: {
        dataValue: "id",
        dataText: "title",
        dataSource: {
          transport: {
              read: {
                  dataType: "jsonp",
                  url: "https://my-json-server.typicode.com/typicode/demo/posts",
              }
          }
        }
      }
    };
  }
};
</script>

<style scoped>
</style>
