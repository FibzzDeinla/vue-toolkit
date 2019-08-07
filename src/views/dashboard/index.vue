<template>
    <div class="dashboard-container">
        <el-row :gutter="20">
            <el-col :span="24">
                <h1 class="page_title">Dashboard (Charts)</h1>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <!-- <el-col :span="8">
                <chart-card 
                    :cardOption="panelOption" 
                    :chartOptions="option"
                >
                </chart-card>
            </el-col>
            <el-col :span="8">
                <chart-card 
                    :cardOption="panelOption" 
                    :chartOptions="option"
                >
                </chart-card>
            </el-col> -->
            <el-col :span="8">
                <chart-card 
                    :cardOption="panelOption" 
                    :chartOptions="option"
                    chartUrl="http://www.mocky.io/v2/5cb85b6b4c00006323d3d4ed"
                    :chartTableProperties="properties"
                >
                </chart-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ChartCard from '@/components/ChartCard';

export default {
    components: {
        ChartCard
    },
    data() {
        return {
            panelOption: {
                type: 'plain',
                title: 'Sample Chart',
                subTitle: 'Here is my chart'
            },
            option: {
                chart: {
                    height: 250,
                    type: "column"
                }
            },
            properties: [
                { field: 'category', title: "Category" },
                { field: 'name', title: "Make" },
                { field: 'y', title: "Ave. TAT Days", format: "{0:n0}", attributes: { style: "text-align: right" } }
            ]
        }
    },
    created() {
        // console.log(this.$store.getters.roles)
    }
}
</script>

<style scoped>
</style>
