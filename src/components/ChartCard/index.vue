<template>
    <div class="chartcard-panel">
        <div :class="`chartcard-heading ${cardOpt.type}`" v-bind:style="{ backgroundColor: cardOpt.headerBgColor }">
            <span class="chartcard-heading-title">{{ cardOpt.title }}</span>
            <small v-if="(cardOpt.subTitle !== null)">{{ cardOpt.subTitle }}</small>
        </div>
        <div class="chartcard-body">
            <ams-chart :chartOptions="chartOptions" :chartData="amsChartData"></ams-chart>
            <chart-detail :tableProperties="chartTableProperties" :tableData="amsChartData"></chart-detail>
        </div>
    </div>
</template>

<script>
import AmsChart from '@/components/Chart'
import ChartDetail from '@/components/ChartDetail'
import { HighChartExtended } from '@/components/Chart/highchart-extended.js'
import axios from 'axios'

export default {
    name: 'chart-card',
    components: {
        AmsChart,
        ChartDetail
    },
    data() {
        return {
            amsChartData: null
        }
    },
    props: {
        cardOption: {
            type: Object
        },
        chartOptions: {
            type: Object
        },
        chartUrl: {
            type: String,
            default: null
        },
        chartTableProperties: {
            type: Array
        }
    },
    computed: {
        cardOpt: function() {
            let _default = {
                type: 'default', 
                title: null,
                subTitle: null,
                headerBgColor: null
            };
            let _cardOpt = Object.assign({}, _default, this.cardOption)
            
            return _cardOpt
        },
    },
    async mounted(){
        var _that = this;
        await this.getDataFromURL(this.chartUrl).then(res => {
            _that.amsChartData = res.data;
        });
    },
    created() {

    },
    methods: {
        async getDataFromURL(chartUrl) {
           return await axios.post(this.chartUrl);
        }
    }
}
</script>

<style scoped>
    .chartcard-panel {
        -webkit-box-shadow: 0 27px 33px -28px rgba(0,0,0,.16);
        -ms-box-shadow:0 27px 33px -28px rgba(248, 182, 182, 0.16);
        -o-box-shadow: 0 27px 33px -28px rgba(0,0,0,.16);
        box-shadow: 0 27px 33px -28px rgba(0,0,0,.16);
    }

    .chartcard-panel > .chartcard-heading {
        font-size: 12px;
        position: relative;
        padding: 15px 15px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background: #ffffff;
    }


    .chartcard-panel > .chartcard-heading.default {
        color: #ffffff;
        background: #333333;
    }

    .chartcard-panel > .chartcard-heading.plain {
        font-weight: 600;
    }

        .chartcard-panel > .chartcard-heading > small {
            font-weight: 300;
            display: block;
            padding: 5px 0;
            color: #c1c1c1;
        }

    .chartcard-body {
        position: relative;
        background: #ffffff;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: 15px;
        overflow: hidden;
    }
</style>
