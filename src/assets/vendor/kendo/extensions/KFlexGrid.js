$(() => {

let is_Empty = () => {
    var _type = typeof value;

    if (_type === "string")
        return ((value || "").trim() === "");
    else if (_type === "undefined")
        return true;
    else if (_type === "object")
        return ($.isEmptyObject(value));
};

const KFlexGrid = kendo.ui.Grid.extend({
    options: {
        name: "FlexGrid",
        toolbarMenu: {},
        isSearchable: {
            enable: true,
            showSearchText: true,
            showAdd: true
        },
        actionCriteria: null,
        showActions: false,
        showDelete: false,
        unshift: false, // put action buttons at the beginning of the grid
        showSync: false,
        source: null,
    },
    init: function(element, options) {

        var that = this,
            $origColumn = [],
            model = (!is_Empty(options.dataSource.options) ? options.dataSource.options.schema.model : undefined),
            parentId = $(element).attr("id").toLowerCase();

        if (model !== undefined) {
            if (options.source == 'StandardEntries') {
                $.extend($origColumn, options.columns);

                var _templateAction = '<div class="m-5 btn-group x-grid-btngroup" role="group"><a class="xgrid-edit btn btn-icon waves-effect waves-light" title="Edit Record" data-id="#=id#" data-parent="' + parentId + '" data-module="#=module#"><span class="amsicon-edit2"></span></a>';

                if (options.showDelete)
                    _templateAction += '<a class="xgrid-remove btn btn-icon waves-effect waves-light" title="Remove Record" data-parent="' + parentId + '" data-filterby="' + model.id + '" data-id="#=id#" data-module="#=module#"><span class="amsicon-delete"></span></a>';

                if (options.showSync)
                    _templateAction += '<a class="xgrid-sync btn btn-icon waves-effect waves-light" title="Sync Details" data-parent="' + parentId + '" data-filterby="' + model.id + '" data-id="#=id#" data-module="#=module#"><span class="amsicon amsicon-android-sync"></span></a>';

                // extra buttons for taining module courses picklist0
                if (options.showDLXML)
                    _templateAction += '<a class="btn-dl-xml btn btn-icon waves-effect waves-light" title="Download XML" data-parent="' + parentId + '" data-filterby="' + model.id + '" data-id="#=id#" data-module="#=module#"><span class="text-default amsicon-file-xml"></span></a></div>';
                //

                if (options.actionCriteria != null)
                    _templateAction = '#if(' + options.actionCriteria + ') { #' + _templateAction + '# }#';

                col = {
                    field: "Actions",
                    headerAttributes: { style: "text-align:center;" },
                    attributes: { style: "text-align:center;" },
                    template: _templateAction,
                    width: "120px", hidden: true, "menu": false, sortable: false, filterable: false, editable: false
                }

                if (options.unshift == true)
                    options.columns.unshift(col);
                else options.columns.push(col);
            }
        }

        var defaultsettings = {
            sortable: true,
            noRecords: true,
            pageable: true,
            editable: false,
            groupable: false,
            resizable: true,
            autoBind: true,
            selectable: true,
            columnMenu: { sortable: false, filterable: true, menu: false },
            filterable: {
                extra: false,
                operators: {
                    string: {
                        contains: "Contains",
                        startswith: "Starts with",
                        eq: "Is equal to",
                        neq: "Is not equal to",
                        isempty: "Is Blank",
                        isnotempty: "Is Not Blank"
                    },
                    date: {
                        eq: "Is equal to",
                        neq: "Is not equal to",
                        lt: "Before",
                        lte: "Before or equal to",
                        gt: "After",
                        gte: "After or equal to",
                        isempty: "Is Blank",
                        isnotempty: "Is Not Blank"
                    }
                }
            }
        }

        var new_settings = $.extend({}, defaultsettings, options);

        kendo.ui.Grid.fn.init.call(this, element, new_settings);

        if (options.source == 'StandardEntries') {

            this.bind('resizeColumnComplete', function () {
                $(element).find('.k-grid-content').perfectScrollbar("update");
            })
            if (options.showActions)
                this.showColumn("Actions");

            if (typeof this.options.isSearchable === "boolean") {
                if (this.options.isSearchable) {
                    this.options.isSearchable = {
                        enable: true,
                        showSearchText: true,
                        showAdd: true
                    }
                }
            } else {
                $.extend({}, this.options, options);
            }

            if (this.options.isSearchable.enable) {

                var kinputButton = "";
                if (this.options.isSearchable.showAdd)
                    kinputButton = "<a href='#' class='btn btn-primary waves-effect waves-light xgrid-add' data-parent='" + parentId + "''  data-module='" + model.module + "'><i class='fa fa-plus'></i></a>";

                _wrapper = $('<div class="xgrid-wrapper" data-role="xgrid-wrapper" />');
                that.element.wrap(_wrapper);
                kinput = $("<input class='k-input form-control ' placeholder='Search Here..' />");
                kinputLabel = $("<label class='kxgrid-search-label'>SEARCH: </label>");

                kinputgroup = $("<div class='input-group pull-right searchgroup' id=''> " + kinputButton + "</div>").prepend(kinput).prepend(kinputLabel);
                kinput_wrap = $("<div style='padding: 5px;text-align: right;padding-bottom: 10px;' class='clearfix'></div>").append(kinputgroup);

                var searchExists = $('.searchgroup');//document.getElementById('searchgroup');
                if (searchExists.length == 0) {
                    that.element.parent().prepend(kinput_wrap);
                }

                if (kinput != undefined) {
                    kinput.bind("input", function () {
                        var _inputval = this.value;
                        var fieldObj = [];
                        //delay(function () {

                            $.each($origColumn, function (indx, val) {
                                if (val.isIgnoredField == undefined) {
                                    if (_inputval == "") return;

                                    if (val.field == undefined)
                                        fieldObj.push({ field: val, operator: "contains", value: _inputval });
                                    else
                                        fieldObj.push({ field: val.field, operator: "contains", value: _inputval });
                                }
                            });

                            if ($.isEmptyObject(fieldObj)) {
                                that.dataSource.filter([]);
                                that.dataSource.read();
                            }
                            else {
                                that.dataSource.filter({
                                    logic: "and",
                                    filters: [
                                        {
                                            logic: "or",
                                            filters: fieldObj
                                        }]
                                });
                            }

                        //}, 600);
                    })
                }
            }

            if (!$.isEmptyObject(this.options.toolbarMenu)) {
                ktoolbar_wrap = $("<div id='xgrid_toolbar'></div>").kendoToolBar(this.options.toolbarMenu);
                that.element.before(ktoolbar_wrap);
            }
        }

        this.bind('resizeColumnComplete', function() {

        });

    }
});

kendo.ui.plugin(KFlexGrid);

});