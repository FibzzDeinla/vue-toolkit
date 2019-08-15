var isValidDate = function (strDate) {
    var formats = ["MM-DD-YYYY", "YYYY-MM-DD", "DD-MMM-YYYY", "MMMM DD YYYY", "DD MMMM YYYY", "DD MMM YYYY"];

    if (typeof strDate == "string") {
        strDate = strDate.replace(/,/g, "").replace(/\s{2,}/g, ' ').trim();

        if (moment(strDate, formats, true).isValid())
            return true;
        else
            return false;
    }
    else {
        return moment(moment(strDate), formats, true).isValid();
    }

    return false;
}

if (!String.prototype.Capitalize) {
    String.prototype.Capitalize = function (force) {
        str = force ? this.toString().toLowerCase() : this.toString();
        return str.replace(/(\b)([a-zA-Z])/g,
            function (firstLetter) {
                return firstLetter.toUpperCase();
            });
    };
}

if (!String.prototype.escapeHtmlChar) {
    String.prototype.escapeHtmlChar = function () {
        var tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return this.replace(/[&<>]/g, function (tag) {
            return tagsToReplace[tag] || tag;
        });
    };
}


var GenerateGUID = function() {
    var d = new Date().getTime();
    
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    
    return guid;
};

export const FlexKendo = {
   createGUID: () => {
        return GenerateGUID();
   },
   getGridSource: (useroptions, callback) => {
        var _that = this;

        var defaultsettings = {
            httpMethod: "POST",
            modelType: null,
            gridElement: ".k-grid",
            filterPostData: null,
            moduleName: null,
            subModuleName: null,
            paramValues: [],
            otherFilters: null,
            url: null,
            group: [],
            defaultSort: null,
            async: true,
            pageLimit: 25,
            schemaModel: null,
            serverSide: true,
            enableMainFilter: false,
            afterGridLoad: function(e) { },
            aggregate: []
        };

        var settings = $.extend({}, defaultsettings, useroptions);

        if (settings.url == null) {
            console.error("Undefined source url.")
            return;
        }

        var _kendoModel = {
            transport: {
                read: function (options) {

                    if (options.data.filter != null || options.data.filter != undefined || options.sort != null || options.sort != undefined) {

                        $('#kgrid-filter').data("targetGridElement", $(settings.gridElement));

                        if ((options.data.filter != null || options.sort != null)) {

                            var grid = $(settings.gridElement).data("kendoFlexGrid") || $(settings.gridElement).data("kendoXGrid");
                            var realCols = [];
                            $.each(grid.columns, function (index, value) {
                                if (value.field != null) realCols.push(value);

                                if (value.columns != null) {
                                    $.each(value.columns, function (iindex, ivalue) {
                                        if (ivalue.field != null) realCols.push(ivalue);
                                    });
                                }
                            });

                            // if (options.data.filter != null) {
                            //     kendoFlexGrid.recur(options.data.filter.filters, realCols);
                            //     var str = kendoFlexGrid.recurFilterStr(options.data.filter.filters, realCols);

                            //     if (str != "") {
                            //         str = "Filter By:" + str;
                            //         if ($("#kgrid-filter").is(":visible")) {
                            //             $(settings.gridElement).find('#kgrid-filter').html(str);
                            //         } else {
                            //             var _elm = $("<div id='kgrid-filter'>" + str + "</div>");
                            //             $(settings.gridElement).find('.k-pager-wrap').before(_elm);
                            //         }

                            //     }
                            // }

                        }

                    }

                    if ($(settings.gridElement).data("kendoFlexGrid") != undefined)
                        $(settings.gridElement).data("kendoFlexGrid")._filter = options.data.filter;

                    var sendJsonData = {
                        type: settings.modelType,
                        skip: options.data.skip,
                        take: options.data.take,
                        pageSize: options.data.pageSize,
                        page: options.data.page,
                        sort: options.data.sort,
                        defaultSort: settings.defaultSort,
                        filter: options.data.filter,
                        extraFilter: settings.filterPostData,
                        paramValues: settings.paramValues 
                    };

                    $(settings.gridElement).data("requestData", sendJsonData);

                    var defGrid = $.Deferred();
                    $.ajax({ 
                        url: settings.url, 
                        type: settings.httpMethod,
                        dataType: "json",
                        contentType: "application/json", 
                        data: JSON.stringify(sendJsonData), 
                        success: function (data) { 
                            options.success(data);
                            defGrid.resolve(true);
                        },
                        error: function (request, status, error) {
                            defGrid.resolve(false);
                        }
                    }); 

                    $.when(defGrid.promise()).done(function(res){
                        var grid = $(settings.gridElement).data("kendoFlexGrid") || $(settings.gridElement).data("kendoXGrid");

                        // Custom kendo Grid Events
                        FlexKendo.eventSource();
    
                        if (grid.dataSource == undefined) return false;
                        if (grid.dataSource.filter() == undefined && $("#kgrid-filter").is(":visible")) {
                            $("#kgrid-filter").remove();
                        }

                        // trigger Bind Custom Function
                        _kendoModel.afterBound();
                    });
                },
                parameterMap: function(options, parameters) {
                    return kendo.stringify(options);
                }
            },
            type: "json",
            modelType: settings.modelType,
            moduleName: settings.moduleName,
            subModuleName: settings.subModuleName,
            otherFilters: settings.otherFilters,
            selector: settings.gridElement,
            serverPaging: true,
            serverSorting: true,
            serverFiltering: true,
            group: settings.group,
            aggregate: settings.aggregate,
            pageSize: settings.pageLimit,
            schema: {
                data: function(result) {
                    if (result.resultErrorMessage != null) {
                        $.confirm({
                            icon: 'fa fa-exclamation-triangle',
                            theme: 'supervan',
                            closeIcon: false,
                            animation: 'scale',
                            type: 'orange',
                            title: 'Error!',
                            content: result.resultErrorMessage,
                            buttons: {
                                Okay: function() { }
                            }
                        });

                    }

                    var _grid = $(settings.gridElement).data('kendoGrid') || $(settings.gridElement).data('kendoXGrid');

                    return result.result || result;
                },
                total: function(result) {
                    return result.pageSize || result.length || 0;
                }
            },
            afterBound: callback,
            requestStart: function(e) {
                // Clear up the loading indicator for this chart
                // _that.kgridLoader(settings.gridElement);
                $(settings.gridElement).resize();
            }
        }

        if (settings.schemaModel != null) _kendoModel.schema["model"] = settings.schemaModel;
        var _source = new kendo.data.DataSource(_kendoModel);

        return _source;
    },

    recurFilterStr: (obj, gridColObj) => {
        var filtstr = "";
        for (var i = 0, count = obj.length; i < count; i++) {
            if (obj[i].filters != null) {
                filtstr = kendoGrid.recurFilterStr(obj[i].filters, gridColObj);
            }
            else { 
                var quer = JsonQuery(gridColObj).where({ 'field': obj[i].field }).all;
                if (quer.length > 0) {

                    var _value = "";
                    var _operator = "";
                    var dateformats = ["M/D/YYYY", "MM/DD/YYYY", "YYYY-MM-DD", "YYYY-MMM-DD"];

                    if (isValidDate(obj[i].value)) {
                        _value = moment(obj[i].value).format("YYYY-MM-DD");
                        _operator = kendoGrid.getOperator(obj[i].operator, true);
                    }
                    else {
                        _value = obj[i].value;
                        _operator = kendoGrid.getOperator(obj[i].operator);
                    }


                    if (obj[i].operator === "isempty")
                        filtstr += "<span><i class='amsicon-android-close' data-field='" + obj[i].field + "''></i>[" + quer[0].title.Capitalize() + "] is Blank</span>"                        

                    else if (obj[i].operator === "isnotempty")
                        filtstr += "<span><i class='amsicon-android-close' data-field='" + obj[i].field + "''></i>[" + quer[0].title.Capitalize() + "] is Not Blank</span>"   

                    else {
                        var dataType = obj[i].SqlDataType || "";

                        if (dataType.toLowerCase() == "int" || dataType.toLowerCase() == "decimal")
                            filtstr += "<span><i class='amsicon-android-close' data-field='" + obj[i].field + "''></i>[" + quer[0].title.Capitalize() + "] " + _operator + " " + _value + "</span>"
                        else
                            filtstr += "<span><i class='amsicon-android-close' data-field='" + obj[i].field + "''></i>[" + quer[0].title.Capitalize() + "] " + _operator + " '" + _value.escapeHtmlChar() + "'</span>"
                    }
                }
                   
            }
        }

        return filtstr
    },

    // For Grid's Filter Data 
    recur: (obj, gridColObj) => {

        for (var i = 0, count = obj.length; i < count; i++) {
            if (obj[i].filters != null || obj[i].filters != undefined) {
                kendoGrid.recur(obj[i].filters, gridColObj);
            }
            else {
                var datatype = null,
                    alias = null;

                var quer = JsonQuery(gridColObj).where({ 'field': obj[i].field }).all;
                if (quer.length > 0) {
                    alias = quer[0]["alias"] || null;
                    datatype = quer[0]["sqlDataType"] || null;
                }

                obj[i]["SqlDataType"] = datatype;
                obj[i]["Alias"] = alias;
            }
        }

        return obj;
    },

    getOperator: (str, isdate = false) => {

        if (isdate == true)
            str += "_date";

        var _operator = "";
        switch (str) {
            case 'neq':
            case 'neq_date':
                _operator = "is not equal to";
                break;
            case 'eq':
            case 'eq_date':
                _operator = "is equal to";
                break;
            case 'doesnotcontain':
                _operator = "does not contain";
                break;
            case 'startswith':
                _operator = "starts with";
                break;
            case 'endswith':
                _operator = "ends with";
                break;
            case 'lt':
                _operator = "less than";
                break;
            case 'lte':
                _operator = "less than or equal to";
                break;
            case 'gt':
                _operator = "greater than";
                break;
            case 'gte':
                _operator = "greater than or equal to";
                break;
            case 'lt_date':
                _operator = "before";
                break;
            case 'lte_date':
                _operator = "before or equal to";
                break;
            case 'gt_date':
                _operator = "after than";
                break;
            case 'gte_date':
                _operator = "after or equal to";
                break;
            default:
                _operator = "contains";
                break;
        }

        return _operator;
    },

    removeFilterByField: (obj, field) => {
        var filtrObj = [];
        for (var i = 0, count = obj.length; i < count; i++) {
            if (obj[i].filters != undefined) {
                kendoGrid.removeFilterByField(obj[i].filters, field);
            }
            else {
                if (obj[i].field != field) {
                    filtrObj.push(obj[i]);
                }
            }
        }

        return filtrObj;
    },

    eventSource: () => {
        
        $(document)
            .on('click', '#kgrid-filter > span > i', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();

                var _field = $(this).data("field"),
                    _grid = $(this).parents('.k-grid').data("kendoFlexGrid") ||  $(this).parents('.k-grid').data("kendoXGrid");

                if (_grid.dataSource.filter() != undefined) {
                    var _filterObj = kendoGrid.removeFilterByField(_grid.dataSource.filter().filters, _field) || [];
                    _grid.dataSource.filter(_filterObj);

                    if ($.isEmptyObject(_filterObj)) {
                        $(_grid.element[0]).data("isFilterClear", true);
                    }
                }
            });
    }
};
export default FlexKendo;

   
 