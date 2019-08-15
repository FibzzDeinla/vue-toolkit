<template>
    <div class="grid-container">
        <el-row>
            <el-col :span="24">
                <m-blockquote>
                    <h1>KendoFlexGrid</h1>
                    <p>A widget extension of Telerik Kendo Grid for VueJS with customized attributes or properties.</p>
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
            &lt;kgrid id=&quot;sample&quot; 
                :remote=&quot;true&quot; 
                remoteHttpMethod=&quot;GET&quot; 
                :url=&quot;url&quot; 
                :columns=&quot;columns&quot; 
                style=&quot;height:300px;&quot; 
                :pageSize=20
                @afterBound=&quot;test&quot;&gt;
            &lt;/kgrid&gt;
        &lt;template&gt;

        &lt;script&gt;
        import kgrid from &quot;@/components/KendoGrid&quot;;

        export default {
            components: {
                kgrid,
            },
            data() {
            return {
                url: &quot;http://jsonplaceholder.typicode.com/posts&quot;,
                columns: [
                    { field: &quot;title&quot;, title: &quot;Column 1&quot;},
                    { field: &quot;body&quot;, title: &quot;Column 2&quot;}
                ]
            };
            }
        };
        &lt;/script&gt;
        </clipboard>
        
        <kgrid id="sample" 
            :remote="true" 
            remoteHttpMethod="GET" 
            :url="url" 
            :columns="columns" 
            style="height:300px;" 
            :pageSize=20
            @afterBound="test">
        </kgrid>

        <el-pagination
            background
            layout="prev, pager, next"
            :pageSize="pager.pageSize"
            :total="pager.total" 
            :current-page="pager.currentPage"
            @current-change="handleChange"
        />
    
    </div>
</template>

<script>
    import kgrid from "@/components/KendoFlexGrid";

    export default {
        components: {
            kgrid
        },
        data: () => {
            return {
                url: "https://my-json-server.typicode.com/typicode/demo/posts",
                columns: [
                    { field: "id", title: "Column 1"},
                    { field: "title", title: "Column 2"}
                ],
                pager : {
                    total: 0,
                    pageSize: 0,
                    currentPage: 1
                },
                tableDataAttr: [
                    {
                        attr: "remote",
                        desc: "Server-side Request or not",
                        type: "Boolean",
                        values: "true, false",
                        defaultvalue: "false"
                    },
                    {
                        attr: "remoteHttpMethod",
                        desc: "Server-side request method",
                        type: "String",
                        values: "POST, GET",
                        defaultvalue: "POST"
                    },
                    {
                        attr: "url",
                        desc: "Server-side URL from API",
                        type: "String",
                        values: "-",
                        defaultvalue: "-"
                    },
                    {
                        attr: "columns",
                        desc: "Array list of objects",
                        type: "Array",
                        values: "-",
                        defaultvalue: "-"
                    },
                    {
                        attr: "pageSize",
                        desc: "Number of items per Page",
                        type: "Number",
                        values: "-",
                        defaultvalue: "25"
                    }
                ],
                tableDataEvnts: [
                    {
                        attr: "afterBound",
                        desc: "Trigger after the Grid Request complete",
                        parameter: "-",
                    }
                ]
            }
        },
        methods: {
            test(options) {
                this.pager.total = options.total;
                this.pager.pageSize = options.pageSize;
                this.pager.currentPage = options.page;
            },
            handleChange(pageNo){
                $('#sample').data("kendoFlexGrid").dataSource.page(pageNo)
            }
        },
        computed: {}
    };
</script>

<style lang="scss">
    .el-pagination {
        margin-top: 40px;

        button:disabled {
            background-color: #CBCBCB !important;
        }

        button {
            background-color: #4E4E4E !important;
            margin: auto 2px !important;

            > i { text-align: center; }
        }

        .el-pager li {
            background-color: #4E4E4E !important;
            font-weight: 300;
            margin: auto 2px !important;
            padding: 0;

            &.number.active { color: #fff; font-weight: 600; }
            &.number { color: #A3A9C4; }
        }
    }
</style>
