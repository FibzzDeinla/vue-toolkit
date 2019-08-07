import Vue from "vue";
import { AppJS } from '@/js/app.js'
import Highcharts from 'highcharts'
import { HighChartExtended } from './highchart-extended.js'
import { HighChartBuilder } from './highchart-builder.js'
import _ from 'lodash'

interface ChartBuilderOption {
    series: any
    xAxis: any
}

interface ChartOption {
    guid: string,
    option: ChartBuilderOption,
    grid: Element
}

interface ChartBuildData {
    data: any,
    valueField: string,
    seriesFromField: string,
    xField: string
}

export default Vue.extend({
    name: 'ams-chart',
    props: ['chartOptions', 'chartData', 'chartTableProperties'],
    data(): ChartOption {
        return {
            guid: AppJS.generateGUID(),
            option: {} as ChartBuilderOption,
            grid: {} as Element
        }
    },
    watch: {
        chartData(newVal: any){
            this.loadGrid(newVal);
        }
    },
    mounted() {
        this.grid = this.$el;
        this.option = _.merge(HighChartExtended.defaults, this.chartOptions);
    },

    methods: {
        loadGrid(chartData: any): void{ 
            var _data = HighChartBuilder.buildChartData({
                data: chartData,
                valueField: "y",
                seriesFromField: "category",
                xField: "name"
            });

            this.option.series =  _data.series; 
            this.option.xAxis.categories = _data.categories;

            Highcharts.chart(this.grid.id, this.option);
            HighChartExtended.handleEvents();
        }
    }
})