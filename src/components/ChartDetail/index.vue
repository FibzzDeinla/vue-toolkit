<template>
    <div class="view-chart-detail">
        <div class="chart_detail_grid"></div>
    </div>
</template>

<script>
export default {
    name: 'chart-detail',
    data() {
        return {
            grid: null,
            data: null
        }
    },
    props: {
        tableData: {
            type: Array
        },
        tableProperties: {
            type: Array,
            required: true
        }
    },
    watch: {
        tableData(value, oldValue){
            if (value !== oldValue){
                this.data = value;
                this.updateElement();
            }
        }
    },
    created() {},
    mounted () {},
    methods: {
        updateElement(){
            // DOM is not updated yet
            this.$nextTick(() => {
                // DOM is now updated
                let grid = $(this.$el).children();
                var _data = this.data;
                var _columns = this.tableProperties;

                // Populate Grid
                $(grid).kendoGrid({
                    dataSource: {
                        data: _data,
                        page: 1,
                        pageSize: 20
                    },
                    height: 550,
                    sortable: true,
                    pageable: {
                        refresh: true,
                        pageSizes: true,
                        buttonCount: 5
                    },
                    columns   : _columns 
                });  
            });
        }
    }
}
</script>

<style scoped>
 
</style>
