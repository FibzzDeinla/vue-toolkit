<template>
  <div class="button-container">
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>MButton</h1>
            <p>Simple buttons with applied custom styling and waves or ripple effect <em>node-waves</em>.</p>
        </m-blockquote>
      </el-col>
    </el-row>
    
    <h2>Attributes</h2>
    <el-table   
    :data="tableDataAttr"
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
        label="Default Value">
    </el-table-column>
    </el-table>

    <h2>Events</h2>
    <el-table   
    :data="tableDataEvnts"
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
        prop="parameter"
        label="Parameters">
    </el-table-column>
    </el-table>

    <!-- Code Snippet -->
    <clipboard class="mt-35 mb-35">
    &lt;template&gt;
      &lt;mbutton color=&quot;darkgrey&quot; :clickHandler=&quot;runClick&quot;&gt;darkgrey&lt;/mbutton&gt;
    &lt;template&gt;

    &lt;script&gt;
    import mbutton from &quot;@/components/Button&quot;;

    export default {
      components: {
        mbutton
      },
      data: () =&gt; {},
      methods: {
        runClick: function() {
          alert(&quot;ok&quot;);
        }
      }
    };
    &lt;/script&gt;
    </clipboard>

    <el-row>
      <el-col>
        <mbutton color="default" iconClass="amsicon-home">default</mbutton>
        <mbutton color="darkgrey">darkgrey</mbutton>
        <mbutton color="red" :clickHandler="runClick">red</mbutton>
        <mbutton color="orange" :clickHandler="runClick">orange</mbutton>
        <mbutton color="green" :clickHandler="runClick">green</mbutton>
        <mbutton color="blue" :clickHandler="runClick">blue</mbutton>
        <mbutton color="lightseagreen" :clickHandler="runClick">lightseagreen</mbutton>
        <mbutton color="crusta" :clickHandler="runClick">crusta</mbutton>
        <mbutton color="tiffanyblue" :clickHandler="runClick">tiffanyblue</mbutton>
        <mbutton color="teal" :clickHandler="runClick">teal</mbutton>
        <mbutton color="caribeangreen" :clickHandler="runClick">caribeangreen</mbutton>
        <mbutton color="yelloworange" :clickHandler="runClick">yelloworange</mbutton>
        <mbutton color="easternblue" :clickHandler="runClick">easternblue</mbutton>
        <mbutton color="kimberly" :clickHandler="runClick">kimberly</mbutton>
        <mbutton color="fiord" :clickHandler="runClick">fiord</mbutton>
        <mbutton color="sanjuan" :clickHandler="runClick">sanjuan</mbutton>
        <mbutton color="breakerbay" :clickHandler="runClick">breakerbay</mbutton>
        <mbutton color="tapestry" :clickHandler="runClick">tapestry</mbutton>
        <mbutton color="carnation" :clickHandler="runClick">carnation</mbutton>
        <mbutton color="scorpion" :clickHandler="runClick">scorpion</mbutton>
        <mbutton color="astral" :clickHandler="runClick">astral</mbutton>
        <mbutton color="contessa" :clickHandler="runClick">contessa</mbutton>
        <mbutton color="salem" :clickHandler="runClick">salem</mbutton>
        <mbutton color="oslogray" :clickHandler="runClick">oslogray</mbutton>
        <mbutton color="cosmic" :clickHandler="runClick">cosmic</mbutton>
        <mbutton color="oceangreen" :clickHandler="runClick">oceangreen</mbutton>
        <mbutton color="rawsienna" :clickHandler="runClick">rawsienna</mbutton>
        <mbutton color="sanmarino" :clickHandler="runClick">sanmarino</mbutton>
        <mbutton color="rouge" :clickHandler="runClick">rouge</mbutton>
        <mbutton color="valencia" :clickHandler="runClick">valencia</mbutton>
        <mbutton color="anzac" :clickHandler="runClick">anzac</mbutton>
        <mbutton color="mulledwine" :clickHandler="runClick">mulledwine</mbutton>
        <mbutton color="orient" :clickHandler="runClick">orient</mbutton>
        <mbutton color="slategray" :clickHandler="runClick">slategray</mbutton>
        <mbutton color="fountainblue" :clickHandler="runClick">fountainblue</mbutton>
        <mbutton color="pictonblue" :clickHandler="runClick">pictonblue</mbutton>
        <mbutton color="claret" :clickHandler="runClick">claret</mbutton>
        <mbutton color="tuna" :clickHandler="runClick">tuna</mbutton>
        <mbutton color="japonica" :clickHandler="runClick">japonica</mbutton>
        <mbutton color="envy" :clickHandler="runClick">envy</mbutton>
        <mbutton color="easternblue2" :clickHandler="runClick">easternblue2</mbutton>
        <mbutton color="porsche" :clickHandler="runClick">porsche</mbutton>
        <mbutton color="brickred" :clickHandler="runClick">brickred</mbutton>
        <mbutton color="corn" :clickHandler="runClick">corn</mbutton>
        <mbutton color="spicypink" :clickHandler="runClick">spicypink</mbutton>
        <mbutton color="neptune" :clickHandler="runClick">neptune</mbutton>
        <mbutton color="horizon" :clickHandler="runClick">horizon</mbutton>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mbutton from "@/components/MButton";
// import Container from "@/components/Container";

export default {
  name: "ButtonGuide",
  components: {
    mbutton,
    // Container
  },
  data: () => {
    return {
      test: "Sample",
      sample: "Test",
      tableDataAttr: [
        {
            attr: "color",
            desc: "Visual characteristics of the button",
            type: "String",
            values: "red, grey, and etc..",
            defaultvalue: "default"
        },
        {
            attr: "iconClass",
            desc: "Class name for icon",
            type: "String",
            values: "-",
            defaultvalue: "-"
        },
        {
            attr: "inverted",
            desc: "Background color will become its border and background will become white",
            type: "Boolean",
            values: "true, false",
            defaultvalue: "false"
        },
        {
            attr: "disabled",
            desc: "Status of the button",
            type: "Boolean",
            values: "true, false",
            defaultvalue: "false"
        },
        {
            attr: "circle",
            desc: "Circular shape button",
            type: "Boolean",
            values: "true, false",
            defaultvalue: "false"
        },
        {
            attr: "round",
            desc: "Rounded corner button",
            type: "Boolean",
            values: "true, false",
            defaultvalue: "false"
        },
        {
            attr: "loading",
            desc: "Loader or progress icon inside the",
            type: "Boolean",
            values: "true, false",
            defaultvalue: "false"
        }
      ],
      tableDataEvnts: [
        {
            attr: "clickHandler",
            desc: "Triggers event click",
            parameter: "-",
        }
      ]
    };
  },
  methods: {
    runClick: function() {
      alert('ok')
    }
  },
  computed: {
    mbuttonHTML: () => {
      return '<mbutton class="btn-darkgrey">darkgrey</mbutton>';
    }
  }
};
</script>

<style scoped>
.mbutton {
  margin-top: 10px;
}
</style>
