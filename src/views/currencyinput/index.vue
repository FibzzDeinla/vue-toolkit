<template>
  <div class="button-container">
    <el-row>
      <el-col :span="24">
        <m-blockquote>
            <h1>Currency Input</h1>
            <p>Custom widget which displays currency code and converted value based on its currency code.</p>
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
        &lt;currency-input :rate=&quot;3.67&quot; :digits=&quot;5&quot; :value=&quot;2&quot; currencyCode=&quot;AED&quot;&gt;&lt;/currency-input&gt;
    &lt;template&gt;

    &lt;script&gt;
    import CurrencyInput from &quot;@/components/CurrencyInput&quot;;

    export default {
        components: {
            CurrencyInput
        }
    };
    &lt;/script&gt;
    </clipboard>

    <div class="row">
        <div class="col-sm-12">
            <p>Default currency input with rate, value and currency code. Value will be converted to a given currency code based on given rate</p>
        </div>
        <div class="col-sm-2">
            <currency-input :rate="3.67" :digits="5" :value="2" currencyCode="AED"></currency-input>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <p>Currency input with <strong>:converted</strong> attribute define as equal to <em>false</em>. Value will not be converted.</p>
        </div>
        <div class="col-sm-2">
            <currency-input :digits="5" :value="2.50" :converted="false" currencyCode="USD"></currency-input>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <p>Currency input with <strong>:readonly</strong> attribute define as equal to <em>false</em>. Input will be editable.</p>
        </div>
        <div class="col-sm-2">
            <currency-input :digits="5" :value="2.50" :converted="false" currencyCode="USD" :readonly="false"></currency-input>
        </div>
    </div>
  </div>
</template>

<script>
import CurrencyInput from "@/components/CurrencyInput";

export default {
  components: {
    CurrencyInput
  },
  data() {
    return {
      tableDataAttr: [
        {
          attr: "digits",
          desc: "any of the numerals from 0 to 9",
          type: "Number",
          values: "0-9",
          defaultvalue: "2"
        },
        {
          attr: "currencyCode",
          desc: "ISO Code used for Currency",
          type: "String",
          values: "USD, AED, etc.",
          defaultvalue: "USD"
        },
        {
          attr: "value",
          desc: "numeric value that will be converted to currency code",
          type: "Number",
          values: "-",
          defaultvalue: "-"
        },
        {
          attr: "rate",
          desc: "Foreign Exchange rate",
          type: "Number",
          values: "-",
          defaultvalue: "100"
        },
        {
          attr: "converted",
          desc: "if value should be converted based on currency rate or not",
          type: "Boolean",
          values: "true, false",
          defaultvalue: "true"
        },
        {
          attr: "readonly",
          desc: "If editable currency input",
          type: "Boolean",
          values: "true, false",
          defaultvalue: "true"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
  }
};
</script>

<style>

</style>

