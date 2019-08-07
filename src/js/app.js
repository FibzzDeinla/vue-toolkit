import _ from 'lodash';

var GenerateGUID = function () {
    var d = new Date().getTime();
    
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    
    return guid;
};

export const AppJS = {
    is_Empty: (value) => {
        var _type = typeof value;

        if (_type === "string")
            return ((value || "").trim() === "");
        else if (_type === "undefined")
            return true;
        else if (_type === "object")
            return ($.isEmptyObject(value));
    },

    getJSON: (url, async) => {
        async = async || false;

        var dfd = $.Deferred();
        $.ajax({
            url: url,
            type: 'GET',
            async: async,
            cache: false,
            contentType: "application/json"
        }).done(function (data) {
            dfd.resolve(data);
        });

        return dfd.promise();
    },

    getUniqueFromArrayObjects: (arr, prop) => {
        return _.map(arr, function (e) { return e[prop]; }).filter(function (e, i, a) {
            return i === a.indexOf(e);
        });
    },

    generateGUID: () => {
        return GenerateGUID();
    },

    handleSidebar_Init: () => {

        var active = $('ul.navigation-main').find('.active');
        var anchor = $(active).parents('li').children('a.drop:not(.active-drop)').addClass('active-drop dropdown');

        setTimeout(function () {
            $(active).closest("ul").addClass("animate-inFromRight");
        }, 100);

        $(active).parents('li:not(.active)').addClass('active');
        if ($(active).parents("li").length > 1) {
            $(active).parents("ul.navSlide").addClass("subview");
            $(active).closest("ul").parent("li:not(.subviewlist)").addClass("subviewOpen")
            $(active).closest("ul").parent("li").parents("li").addClass("subviewlist");

        }

        var activeAnchor = $('ul.navigation-main').find('a.active');
        activeAnchor.parent("li").parent("ul").parent("li").parents("li").addClass("subviewlist");
        activeAnchor.parent("li").parent("ul").parent("li").addClass("subviewOpen");
        activeAnchor.parent("li").parents("li").prev('a.drop:not(.active-drop)').addClass('active-drop dropdown');

    },

    handleSidebar: () => {

        
        var _mainUl = $('ul.navSlide');
        var _ul = _mainUl.children('li').find("ul");

        _mainUl.find('li').each(function (i, o) {
            $(this).children("a").attr("style", "animation-delay: " + $(this).index() * 60 + "ms")
            $(this).addClass("menu__item");
        })

        _ul.prepend($("<li class='subviewlistBack'><a href='javascript:void(0)' class='waves-effect waves-effect waves-light subviewBack'><i class='fa fa-arrow-circle-left'></i><span>Back</span></a></li>"))

        _mainUl.prepend("<li class='backtomain'><a href='javascript:void(0)' data-duration=\"5\" data-color=\"red\" data-opacity=\"1\">Back To Main</a></li>");
        _mainUl.find("a.drop").each(function (i, v) {
            var anchorText = $(v).children("span").text() || $(v).text();
            $(this).next("ul").children("li.subviewlistBack").children("a").children("span")[0].innerHTML = anchorText
        });

        // Sidebar Events
        $(document).on('click', 'body:not(.page-sidebar-collapse) ul.navigation-main a.drop', function () {
            var anchor = $(this);
            _mainUl.addClass("subview");

            if (anchor.parents("li.subviewOpen").length > 0)
                anchor.parents("li.subviewOpen").removeClass("subviewOpen").addClass("subviewlist");

            if (anchor.parent("li").hasClass("subviewOpen"))
                anchor.parent("li.subviewOpen").removeClass("subviewOpen");
            else
                anchor.parent("li").addClass("subviewOpen");

            anchor.next("ul").removeClass(function (index, className) {
                return (className.match(/\banimate-\S+/g) || []).join(' ');
            }).addClass("animate-inFromRight");


        }).on('click', 'a.subviewBack', function () {
            var anchor = $(this);

            if (anchor.closest("li.subviewOpen").parent().hasClass("subview")) {
                anchor.closest("li.subviewOpen").parent().removeClass("subview");
                anchor.closest("li.subviewOpen").parent().removeClass(function (index, className) {
                    return (className.match(/\banimate-\S+/g) || []).join(' ');
                }).addClass("animate-outToRight");

            }

            anchor.parents("ul").removeClass(function (index, className) {
                return (className.match(/\banimate-\S+/g) || []).join(' ');
            }).addClass("animate-inFromLeft");

            anchor.closest("li.subviewOpen").children("ul").removeClass(function (index, className) {
                return (className.match(/\banimate-\S+/g) || []).join(' ');
            }).addClass("animate-outToRight")

            anchor.closest("li.subviewOpen").removeClass("subviewOpen");
            anchor.closest("li.subviewlist").removeClass("subviewlist").addClass("subviewOpen");


        }).on('click', 'li.backtomain > a', function () {
            $(".subview, .subviewOpen, .subviewlist").removeClass("subview subviewOpen subviewlist");

            _mainUl.removeClass(function (index, className) {
                return (className.match(/\banimate-\S+/g) || []).join(' ');
            }).addClass("animate-inFromLeft");
        })

        setTimeout(() => {
            AppJS.handleSidebar_Init()
        }, 100);
    }
}