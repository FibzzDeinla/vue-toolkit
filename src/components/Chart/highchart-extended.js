
import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts);

export const HighChartExtended = {
    defaults: {
        chart: {
            styledMode: true,
            spacingRight: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            events: {
                load: function (event) {
                    var _targetChart = event.target;
                    if (_targetChart.series.length > 0) {
                        // console.log($(_targetChart.container).parents(".chartcard-panel").children(".chartcard-heading"))
                        var _pheader = $(_targetChart.container).parents(".chartcard-panel").children(".chartcard-heading")
                        if (_pheader !== undefined) {

                            if (_pheader[0] !== undefined) {
                                //<a title=\"View Details\" href=\"#\" class=\"\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-type=\"view\"><i class='amsicon-table_list'></i></a>
                                var btnwrap = $("<div class=\"h-action-buttons\">" +
                                    "<a title=\"View Details\" href=\"#\" class=\"\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-type=\"view\"><i class='amsicon-table_list'></i></a>" +
                                    "<a title=\"Chart Print Preview\" href=\"#\" class=\"\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-type=\"print\"><i class='amsicon-android-print'></i></a>" +
                                    "<div class=\"export-chart-container\">\n" +
                                    "  <a title=\"Export As\" href=\"#\" class=\"export-chart-btn dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class='amsicon-android-download'></i></a>\n" +
                                    "  </button>\n" +
                                    "  <ul class=\"dropdown-menu dropdown-menu-right\">\n" +
                                    // "    <li role=\"separator\" class=\"divider\"></li>\n" +
                                    "    <li><a href=\"#\" class=\"waves-effect waves-light\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-title=\"" + _pheader[0].innerText + "\" data-type=\"image/png\">Download PNG image</a></li>\n" +
                                    "    <li><a href=\"#\" class=\"waves-effect waves-light\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-title=\"" + _pheader[0].innerText + "\" data-type=\"image/jpeg\">Download JPEG image</a></li>\n" +
                                    "    <li><a href=\"#\" class=\"waves-effect waves-light\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-title=\"" + _pheader[0].innerText + "\" data-type=\"image/svg+xml\">Download SVG image</a></li>\n" +
                                    "    <li><a href=\"#\" class=\"waves-effect waves-light\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-title=\"" + _pheader[0].innerText + "\" data-type=\"application/pdf\">Download PDF</a></li>\n" +
                                    "  </ul>\n" +
                                    "</div>" +
                                    "<a title=\"View Fullscreen\" href=\"#\" class=\"\" data-chart-parent-container=\"" + _targetChart.container.id + "\" data-type=\"fullscreen\"><i class='amsicon-arrow-expand'></i></a>");

                                _pheader.append(btnwrap);


                                // if ($(_targetChart.renderTo).hasAttr("show-categoryColor")) {
                                //     _this.RedrawChartCategory(_targetChart);
                                // }

                                // if ($(_targetChart.renderTo).hasAttr("show-radiuspie")) {
                                //     //$.each(_targetChart.series, function (a, b) {
                                //     //	$.each(b.data, function (i, v) {
                                //     //		v.z = ((i + 1) * 99.25)

                                //     //		console.log(((i + 1) * 99.25))
                                //     //	});
                                //     //});

                                //     //console.log(_targetChart.series);
                                // }

                                // if ($(_targetChart.renderTo).hasAttr("show-fixplacement")) {

                                //     $.each(_targetChart.series, function (a, b) {
                                //        $.each(b.data, function (i, v) {
                                //            var color = new Values(v.color).rgb,
                                //                r = color.r,
                                //                g = color.g,
                                //                b = color.b;

                                //            v.color = 'rgba(' + r + ',' + g + ',' + b + ',' + ((a + 1) * .25) + ')';
                                //         });
                                //     });

                                // }

                                _targetChart.reflow();
                            }

                        }
                    }
                }
            }
        },
        exporting: { enabled: false },
        credits: {
            enabled: false
        },
        title: null,
        defs: {
            glow: [{
                tagName: 'filter',
                id: 'f1',
                x: 0,
                y: 0,
                width: "200%",
                height:"200%",
                            children: [{
                    tagName: 'feDropShadow',
                    stdDeviation: 5,
                    'flood-color': '#000000',
                    'flood-opacity': 0.1,
                    dx: 10, dy: 0
                }]
            },
            {
                tagName: 'filter',
                id: 'f2',
                x: 0,
                y: 0,
                width: "200%",
                height:"200%",
                            children: [{
                    tagName: 'feDropShadow',
                    stdDeviation: 6,
                    'flood-color': '#000000',
                    'flood-opacity': .3,
                    dx: 5, dy: 20
                }]
            }]
        },
        series: null,
        xAxis: {
            categories: null
        }
    },

    InitChartDetailsTo: (divElement, obj) => {
        var eltoAnimate = $("<div class='view-chart-details'><div class='details_table' style='height: 100%'></div></div>");


        // console.log($(divElement)
        var _table = eltoAnimate.children(".details_table");

        $(divElement).parent().append(eltoAnimate)
        console.log($(divElement).parent())

        if ($(divElement).siblings(".view-chart-details").length == 0)
            $(divElement).append(eltoAnimate);
        else {
            _table.empty();
        }

        // creates kendo grid table for details
        _table.kendoGrid({
            dataSource: {
                data: obj.data,
                pageSize: 20
            },
            toolbar: [{ name: "printme", text: "Print" }],
            sortable: true,
            pageable: {
                refresh: false,
                pageSizes: false,
                numeric: false
            },
            columns: obj.properties
        });
    },

    handleEvents: () => {

        $(document).on('click', '.h-action-buttons > a, .export-chart-container > ul > li > a', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            var _this = $(this),
                _parentCont = _this.parents(".chartcard-panel").find(".chart-container");
            
            let chartIndx = _parentCont.attr('data-highcharts-chart');
            let chartInstance = Highcharts.charts[chartIndx];
            console.log(chartInstance)

            if (_this.attr("data-type") === "view") {
                var view_details_container = _this.parents('.chartcard-heading').next('.chartcard-body').children(".view-chart-detail");

                if (_this.children("i").hasClass("amsicon-table_list")) {
                    _this.children("i").removeClass("amsicon-table_list").addClass("amsicon-table_list_remove");
                    view_details_container.animate({ top: "0" }, 250);
                    _this.attr("title", "Hide Details");

                }
                else {
                    _this.children("i").removeClass("amsicon-table_list_remove").addClass("amsicon-table_list");
                    view_details_container.animate({ top: "100%" }, 250);
                    _this.attr("title", "View Details");
                }

                // view_details_container.children(".chart_detail_grid").data("kendoGrid").resize()
                // view_details_container.children(".chart_detail_grid").data("kendoGrid").resizeContent();
            }
            else if (_this.attr("data-type") === "print") {
                chartInstance.print();
            }
            else if (_this.attr("data-type") === "fullscreen") {

                var view_details_container = _this.parents('.panel-heading').next('.panel-body').children(".view-chart-details");

                // checks if toggles fullscreen button
                if (!_this.hasClass("fullscreen-toggle")) {

                    // stores the default size of the container
                    _this.data("containerSize", { w: _parentCont.width(), h: _parentCont.height() });

                    _this.addClass("fullscreen-toggle");
                    $('body').addClass("chart-fullscreen-enabled");
                    _this.parents(".chart-panel").addClass("show-fullscreen");

                    // Resize to fullscreen size from current container size
                    chartInstance.setSize(_parentCont.width(), _parentCont.height());
                }

                else {

                    _this.removeClass("fullscreen-toggle");
                    $('body').removeClass("chart-fullscreen-enabled");
                    _this.parents(".chart-panel").removeClass("show-fullscreen");

                    // Resize chart from previous stored container size
                    chartInstance.setSize(_this.data("containerSize").w, _this.data("containerSize").h);

                }

                chartInstance.redraw();
                setTimeout(function () {
                    view_details_container.children(".details_table").data("kendoGrid").resize()
                    view_details_container.children(".details_table").data("kendoGrid").resizeContent();
                }, 400)

            }
            else {
                chartInstance.exportChart({
                    type: _this.attr("data-type"),
                    filename: _this.attr("data-title")
                });
            }

            $('.export-chart-container').removeClass("open");

        }).on('click', '.dt-button.buttons-print', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            // remove old printframe
            $("#printframe").remove();

            // create new printframe
            var iFrame = $('<iframe></iframe>');
            iFrame
                .attr("id", "printframe")
                .attr("name", "printframe")
                .attr("src", "about:blank")
                .css("width", "0")
                .css("height", "0")
                .css("position", "absolute")
                .css("left", "-9999px")
                .appendTo($("body:first"));

            // load printframe
            var url = $(this).attr("href");
            if (iFrame !== null && url !== null) {
                iFrame.attr('src', url);
                iFrame.load(function () {
                    // nasty hack to be able to print the frame
                    var tempFrame = $('#printframe')[0];
                    var tempFrameWindow = tempFrame.contentWindow ? tempFrame.contentWindow : tempFrame.contentDocument.defaultView;
                    tempFrameWindow.focus();
                    tempFrameWindow.print();
                });
            }

        })
    }
}