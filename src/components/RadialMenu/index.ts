import Vue from "vue"

export default Vue.extend({
    name: "radial-menu",
    props: {
      listMenu: {
        type: Array
      },
      position: {
        type: String,
        default: () => 'bottom-right' // bottom-right | bottom-left
      }
    },
    data() {
      return {};
    },
    created() {},
    methods: {},
    mounted() {
      var _el = this.$el;
  
      // DOM is not updated yet
      this.$nextTick(() => {
  
        var thisButton,
          thisMenuItem,
          thisSubmenuItem,
          menuItems = $(".menu li");
  
        function openMenu(thisButton: any) {
          if (!thisButton.hasClass("active")) thisButton.addClass("active");
          else $(_el).removeClass("active");
        }
  
        /* On click of the ellipsis */
        $(".ellipsis").click(function(event) {
          event.preventDefault();
          openMenu($(_el));
        });
        
        $(_el)
          .find("li")
          .each(function(i, e) {
            let len = $(_el).find("li").length,
              baseAngle = 360 / len,
              rotateAngle = (i - 1) * baseAngle,
              skewAngle = 89 - baseAngle,
              textRotateAngle = baseAngle / 2 - 89,
              iconRotateAngle = -rotateAngle + Math.abs(textRotateAngle);
  
            $(e).css(
              "transform",
              `rotate(${rotateAngle}deg) skew(${skewAngle}deg)`
            );
            $(e)
              .find("a")
              .css(
                "transform",
                `skew(-${skewAngle}deg) rotate(${textRotateAngle}deg) scale(.8)`
              );
            $(e)
              .find("i")
              .css("transform", `rotate(${iconRotateAngle}deg)`);
  
  
            if($(this).find("a").hasClass("active")){
              $(this).closest(".center_radial_nav").children("span").html($(this).find("a").data("id"))
            }
          });
  
        $(_el).children("ul")
          .find("a")
          .on("mouseenter", function(e) {
            e.stopImmediatePropagation();
          
            let { title } = $(this).data(),
              i = $(this).children("i");
  
            $(_el).children("ul").find("a").removeClass("active");
            $(this).addClass("active");
  
            $(_el).find(".center_radial_nav")
              .children("span")
              .html(title);
  
            $(_el).find(".center_radial_nav")
              .children("i")
              .attr("class", (<any>i).attr("class"));
          })
      });
    }
  })