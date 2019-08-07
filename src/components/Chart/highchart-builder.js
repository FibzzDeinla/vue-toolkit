import { AppJS } from '@/js/app.js'
import _ from 'lodash';

export const HighChartBuilder = {
    buildHighChart: (element, option) => {

        var defaultOptions = {
            tooltip: {
                percentage: false
            },
            yAxis: {
                reversedStacks: false,
                percentage: false
            }
        };

        var settings = $.extend({}, defaultOptions, option);

        // format with Percent (%) Sign
        if (!settings.tooltip.percentage)
            settings.tooltip = { valueSuffix: ' %', valueDecimals: 2 };

        // format with Percent (%) Sign
        if (!settings.yAxis.percentage)
            settings.yAxis.labels.formatter = function () {
                return this.value + '%';
            };

        // Highchart Default Initialization

        AppJS.getJSON(settings.url, function (data) {
            Highcharts.chart(element, settings);
        });

    },

    buildTableDataFromContainer: (container, cols) => {
        var obj = document.getElementById(container);
        var chart = Highcharts.charts[obj.getAttribute('data-highcharts-chart')];
        var tableHeaderEl = $("<table class=\"mdl-data-table\"><thead><tr></tr></thead></table>");

        $.each(cols, function (i, e) {
            tableHeaderEl.find("tr").append("<th>" + e + "</th>");
        });

        var vmodel = [], r_indxx = 0; s_indx = 0, colsDT = _.map(cols, function (e, i) { return { mData: (("0" + (i + 1)) + e.replace(/[^A-Z0-9]/ig, "")) }; });
        $.each(chart.userOptions.xAxis.categories, function (a, categ) {
            if (Array.isArray(categ.categories)) {
                $.each(categ.categories, function (c, cmodel) {
                    vmodel.push(JSON.parse('{"01' + cols[0].replace(/[^A-Z0-9]/ig, "") + '": "' + categ.name + '", "02' + cols[1].replace(/[^A-Z0-9]/ig, "") + '": "' + cmodel + '"}'));

                    r_indxx++;
                });
            }

            else {
                vmodel.push(JSON.parse('{"01' + cols[0] + '": ' + categ + '}'));
                //vmodel.push({ Name: categ });
            }

        });

        $.each(chart.userOptions.series, function (sIndex, sModel) {
            colsDT.push({ mData: sModel.name.replace(/[^A-Z0-9]/ig, "") });
            tableHeaderEl.find("tr").append("<th>" + sModel.name + "</th>");
            if (Array.isArray(sModel.data)) {
                $.each(sModel.data, function (dIndex, dModel) {
                    vmodel[dIndex][sModel.name.replace(/[^A-Z0-9]/ig, "")] = dModel;
                });
            }
        });

        return { tableElement: tableHeaderEl, columnHeaders: colsDT, modelData: vmodel };
    },

    buildChartData: (cOption) => {
        var option = {
            data: null,
            groupFrom: null,
            categoriesValues: [],
            valueField: "y",
            categoryField: null,
            xField: null,
            series: [],
            seriesFromField: false,
            category: {
                percentage: false
            }
        };

        var _options = $.extend({}, option, cOption);

        var _dataRow = [], categories = [], _names = [];
        if (!AppJS.is_Empty(_options.series) && _options.series.length > 0) {

            if (AppJS.is_Empty(_options.categoryField)) {
                categories = _.uniq(_.map(_options.data, function (e) { return e[_options.xField]; }));

                $.each(_options.series, function (i, b) {
                    var _rows_item = [], _rows_itemOrig = [], _rows_data = [];

                    $.each(categories, function (n_indx, n_value) {
                        var _res = _options.data.filter(function (e, d, a) { return (e[_options.xField] === n_value && e["name"] === b); });
                        var _value = 0;

                        if (_res.length > 0) {
                            if (_options.category.percentage) {
                                var sumTotal = _options.data.reduce((t, n) => t + n[_options.valueField], 0);
                                _value = parseFloat(parseFloat(_res[0][_options.valueField] / sumTotal) * 100);
                                _rows_itemOrig.push(_res[0][_options.valueField]);
                            }
                            else
                                _value = _res[0][_options.valueField];
                        }
                        else {
                            _value = 0;
                            _rows_itemOrig.push(0);
                        }

                        _rows_item.push(_value);


                        // Gets result data item
                        _rows_data.push(_res[0] || {});
                    });

                    _dataRow.push({ name: b, data: _rows_item, origdata: _rows_itemOrig, dataItem: _rows_data });
                });

            }

            else {
                $.each(AppJS.getUniqueFromArrayObjects(_options.data, _options.categoryField), function (i, val) {
                    var _categories = _.map(_.find(_options.data, function (e) { if (e[_options.categoryField] === val) return true; }), function (e) { return e[_options.xField]; });

                    categories.push({
                        name: val,
                        categories: _categories
                    });
                });

                $.each(_options.series, function (i, e) {
                    var _rows_item = [];
                    $.each(categories, function (c_indx, c_value) {
                        $.each(c_value.categories, function (s_indx, s_value) {
                            var _res = _options.data.filter(function (e, d, a) { return (e["category"] === c_value.name && e["name"] === s_value); });

                            if (_res.length > 0) {
                                var _value = 0;

                                if (_options.category.percentage) {
                                    var sumTotal = _options.data.reduce((t, n) => t + n[_options.valueField], 0);
                                    _value = parseFloat(parseFloat(_res[0][_options.valueField] / sumTotal) * 100);
                                }
                                else
                                    _value = _res[0][_options.valueField];

                                _rows_item.push(_value);
                            }
                        });
                    });

                    _dataRow.push({ name: e, data: _rows_item });
                });

            }

        }

        else {

            var _series = AppJS.getUniqueFromArrayObjects(_options.data, _options.seriesFromField);

            if (!AppJS.is_Empty(_options.categoryField)) {

                $.each(AppJS.getUniqueFromArrayObjects(_options.data, _options.categoryField), function (i, val) {
                    var _categories = _.uniq(_.map(_.find(_options.data, function (e) { if (e[_options.categoryField] === val) return true; }), function (e) { return e[_options.xField]; }));

                    categories.push({
                        name: val,
                        categories: _categories
                    });
                });

                $.each(_series, function (i, b) {
                    var _rows_item = [], _rows_itemOrig = [], _rows_data = [];
                    $.each(categories, function (c_indx, c_value) {
                        $.each(c_value.categories, function (s_indx, s_value) {

                            var _res = _options.data.filter(function (e, d, a) { return (e[_options.categoryField] === c_value.name && e[_options.xField] === s_value && e[_options.seriesFromField] === b); });

                            if (_res.length > 0) {
                                var _value = 0;

                                if (_options.category.percentage) {
                                    var sumTotal = _options.data.reduce((t, n) => t + n[_options.valueField], 0);
                                    _value = parseFloat(parseFloat(_res[0][_options.valueField] / sumTotal) * 100);
                                    _rows_itemOrig.push(_res[0][_options.valueField]);

                                }
                                else
                                    _value = _res[0][_options.valueField];

                                _rows_item.push(_value);
                                _rows_data.push(_res[0] || {});
                            }

                            else {
                                _rows_item.push(0);
                                _rows_itemOrig.push(0);
                                _rows_data.push(_res[0] || {});
                            }

                        });
                    });

                    _dataRow.push({ name: b, data: _rows_item, origdata: _rows_itemOrig, dataItem: _rows_data });
                });

            }

            else {
                categories = _.uniq(_.map(_options.data, function (e) { return e[_options.xField]; }));

                $.each(_series, function (i, b) {
                    var _rows_item = [], _rows_itemOrig = [], _rows_data = [];

                    $.each(categories, function (n_indx, n_value) {
                        var _res = _options.data.filter(function (e, d, a) { return (e[_options.seriesFromField] === b && e[_options.xField] === n_value); });

                        var _value = 0;

                        if (_res.length > 0) {
                            if (_options.category.percentage) {
                                var sumTotal = _options.data.reduce((t, n) => t + n[_options.valueField], 0);
                                _value = parseFloat(parseFloat(_res[0][_options.valueField] / sumTotal) * 100);
                                _rows_itemOrig.push(_res[0][_options.valueField]);
                            }
                            else
                                _value = _res[0][_options.valueField];
                        }

                        _rows_item.push(_value);

                        _rows_data.push(_res[0] || {});
                    });

                    _dataRow.push({ name: b, data: _rows_item, origdata: _rows_itemOrig, dataItem: _rows_data });
                });

            }

        }


        return {
            categories: categories,
            series: _dataRow
        };
    }
}