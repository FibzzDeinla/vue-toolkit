<template>
  <div>
    <a href="javascript:void(0)" class="ellipsis">
        <i class="fastrax-circular-action"></i>
    </a>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
    // body { margin:0;position:fixed;top:0;right:0;bottom:0;left:0; text-align: center; }
    svg text,
    svg text tspan {
      font-family: 'Fastrax-Icon' !important;
    }

    svg path.slicepath {
        transition: fill 2s ease-out;
    }
    svg > g > g:hover path.slicepath {    
        fill: #A7D1F5 !important;
        transition: fill .5s cubic-bezier(.17,.67,.83,.67);  
    }

    svg g.pie__slice__group:hover,
    svg g.inner__center__group:hover {
        cursor: pointer;
    }

    svg > g > g.pie__slice__group:hover text {
        fill: #333333;
    }

    body svg {
      z-index: 2;
      position: absolute;

      &.radial-bottom-right-aligned
      {
        bottom: 10%;
        right: 5%;
      }

      &.radial-bottom-left-aligned
      {
        bottom: 10%;
        left: 5%;
      }
    }

    body .ellipsis {
      position: absolute;
      z-index: 1;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: #ffffff;
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.44);
      opacity: 1;
      
      &.radial-bottom-right-aligned
      {
        bottom: 20px;
        right: 20px;
        -webkit-transition: right 0.3s ease-in-out, bottom 0.3s ease-in-out, opacity .35s ease-in-out;
        transition: right 0.3s ease-in-out, bottom 0.3s ease-in-out, opacity .35s ease-in-out;
      }

      &.radial-bottom-left-aligned
      {
        bottom: 20px;
        left: 20px;
        -webkit-transition: left 0.3s ease-in-out, bottom 0.3s ease-in-out, opacity .35s ease-in-out;
        transition: left 0.3s ease-in-out, bottom 0.3s ease-in-out, opacity .35s ease-in-out;
      }
    }

    body.radial-open {
      svg {
        transform: scale(1);
        transition: transform .12s ease .2s;
      }

      .ellipsis {
          &.radial-bottom-right-aligned
          {
            bottom: 23%;
            right: 11%;
            opacity: 0;
          }

          &.radial-bottom-left-aligned
          {
            bottom: 23%;
            left: 11%;
            opacity: 0;
          }
      }
    }

    body:not(.radial-open) .ellipsis {
        transition-delay: .2s;
    }

    body:not(.radial-open) svg {
      transform: scale(0);
      transition: transform .3s ease;
    }

    .ellipsis:active,
    .ellipsis:hover {
      box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.44);
    }

    .ellipsis i {
      color: #333333;
      font-size: 30px;
      padding: 15px 5px;
      display: block;
      text-align: center;
    }
</style>
