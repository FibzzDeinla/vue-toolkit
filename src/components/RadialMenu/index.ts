import Vue from "vue"
import * as d3 from "d3";

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
    methods: {
      informMe() {
        $('body').addClass("radial-open");
      }
    },
    mounted() {
      var that = this;
      var _el = this.$el;
  
      // DOM is not updated yet
      this.$nextTick(() => {
  
        var size = 300;
        var width = size,
        height = size,                                                                                                                                                                                                                                                                                                                                                                                                                         
        radius = size / 2;
        var data : any = this.listMenu;

        var _percentage = (100 / data.length) / 100,
            angle = 360 * _percentage,
            rotateAnge = angle / 2;
    
        var arc : any = d3.arc()
          .outerRadius(radius - 10)
          .innerRadius(0)
          .startAngle(function(d) { return ((rotateAnge * .0174) - d.startAngle + Math.PI/180); })
          .endAngle(function(d) { return ((rotateAnge * .0174) - d.endAngle + Math.PI/180); });
        
        var pie = d3.pie()
          .sort(null)
          .value(1);
    
        var svg = d3.select('body').append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
        // filters go in defs element
        var defs = svg.append("defs");
    
        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
    
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 10)
            .attr("result", "blur");
    
        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 2)
            .attr("dy", 5)
            .attr("result", "offsetBlur");
    
        var feMerge = filter.append("feMerge");
    
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");
    
        // Circle Shadow
        svg.append("circle")
            .attr('r', (radius))
            .attr('transform', 'scale(.85)')
            .style("filter", "url(#drop-shadow)")
            .attr('fill', '#d3d3d3' );
    
    
        var g = svg.selectAll(".arc")
          .data(pie(data))
          .enter().append("g")
          .attr("class", "pie__slice__group")
          .on('click', function(d){
            that.$emit("onClick", d.data);
          })
          .on('mouseover', function (d, i) {
            setCenterData(d)
          });    
    
         g.append("path")
          .attr("d", arc)
          .attr('class', 'slicepath')
          .attr('stroke', '#E8E8E8')
          .attr('stroke-width', '1px')
          .style("fill", "#ffffff");
    
        g.append("text")
          .attr("transform", function(d) {
            var _d = arc.centroid(d);
            _d[0] *= 1.5;	//multiply by a constant factor
            _d[1] *= 1.5;	//multiply by a constant factor
            return "translate(" + _d + ")";
          })
          .attr('font-size', (radius * .18))
          .attr('fill', '#8998BA')
          .attr("dy", ".50em")
          .style("text-anchor", "middle")
          .text(function(d: any) {
            return d.data.icon;
          });
            
        // Set Default Center Data
        setCenterData(pie(data)[0])
    
        function setCenterData(d: any){
          svg.selectAll("g.inner__center__group").remove();
    
          var innerCenterGrp = svg.append("g")
              .attr("class", "inner__center__group")
              .on('click', function(){
                $('body').removeClass("radial-open");
              })
    
          innerCenterGrp.append("circle")
            .attr('r', (radius * 0.47))
            .attr('stroke', '#7392b3')
            .attr('stroke-width', '5px')
            .attr('fill', '#FFFFFF' );
            
          innerCenterGrp.append("text")
              .attr("fill", "#333333")
              .attr("text-anchor", "middle")
              .attr('font-size', (radius * .30))
              .attr('y', -5)
              .text(d.data.icon);
    
          var _count = d.data.title.split(" ");
    
          innerCenterGrp
            .selectAll("text.center__text")
            .data(c => d.data.title.split(" "))
            .enter()
            .append("text")
            .text(c => c as any)
            .attr("fill", "#333333")
            .attr('font-size', (radius * .099))
            .attr("text-anchor", "middle")
            .attr("x", 0)
            .attr("y", (d, i) => {
              return ((i * 15)) + 25;
            })
          }
      });
    }
  })