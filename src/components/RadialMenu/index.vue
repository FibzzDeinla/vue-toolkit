<template>
  <nav :class="`radialnav ${position}`">
    <a href="#" class="ellipsis">
      <i class="fastrax-circular-action"></i>
    </a>
    <a href="#" class="center_radial_nav">
      <i class="fa fa-home"></i>
      <span>Asset</span>
    </a>
    <ul class="menu">
      <li v-for="item in listMenu">
        <a :data-title="item.title" href="" :class="`${(!item.active) ? '' : 'active'}`">
          <i :class="item.icon"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped lang="scss">
.radialnav {
  position: fixed;
  z-index: 100;
  display: block;
  width: 26em;
  height: 26em;
  font: 500 14px/14px arial normal;
  transition: all 0.3s ease-in-out;

  &.bottom-right {
    bottom: 20px;
    right: -116px;
  }

  &.bottom-right.active {
    bottom: 20%;
    right: -1%;
  }

  &.bottom-left {
    bottom: 20px;
    left: -116px;
  }

  &.bottom-left.active {
    bottom: 20%;
    left: -1%;
  }

  .ellipsis {
    position: absolute;
    right: 42%;
    bottom: 8px;
    z-index: 2;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #2980b9;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.44);
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:active,
    &:hover {
      box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.44);
      background: #2e8ece;
    }

    i {
      position: absolute;
      font-size: 30px;
      top: 38%;
      left: 40%;
      margin: -7px 0 0 -7px;
    }
  }

  .center_radial_nav {
    position: absolute;
    right: 31%;
    bottom: -9%;
    z-index: 1;
    width: 130px;
    height: 130px;
    border-radius: 100%;
    background: #ffffff;
    text-align: center;
    transform: scale(0);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.44);
    transition: transform 0.1s cubic-bezier(0.075, 0.82, 0.165, 1), border 0.1s ease-in;
    transition-delay: .1s;
    border: 5px solid #7392b3;
  }

  .center_radial_nav i,
  .center_radial_nav span {
    display: block;
    color: #333333;
    text-align: center;
  }

  .center_radial_nav i {
    font-size: 31px;
    padding-top: 29px;
  }

  .center_radial_nav span {
    font-size: 14px;
    padding: 4px 12px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  &.active .center_radial_nav {
    transform: scale(1);
    transition-delay: .3s;
  }

  &.active .ellipsis {
    opacity: 0;
  }

  &.active .menu {
    pointer-events: auto;
    transform: scale(1);
    transition-delay: .3s;
  }

  &.active .menu i {
    opacity: 1;
  }
}

ul.menu {
  position: absolute;
  top: 50%;
  right: 8%;
  z-index: 0;
  width: 300px;
  height: 300px;
  transform: scale(0.1);
  pointer-events: none;
  transition: all 0.15s ease;
  transition-delay: .1s;
  box-sizing: content-box;

  li {
    position: absolute;
    bottom: 50%;
    right: 50%;
    font-size: 1.5em;
    width: 10em;
    height: 10em;
    transform-origin: 100% 100%;
    overflow: hidden;
    margin-top: -1.3em;
    margin-left: -10em;
  }

  li a {
    position: absolute;
    bottom: -7.25em;
    right: -7.25em;
    display: block;
    height: 14.5em;
    width: 14.5em;
    border-radius: 50%;
    text-decoration: none;
    padding-top: 0em;
    text-align: center;
    font-size: 1.18em;
    transform: skew(-50deg) rotate(-70deg) scale(0.8);
    -webkit-transition: opacity 0.3s, color 0.3s;
    -moz-transition: opacity 0.3s, color 0.3s;
    transition: opacity 0.3s, color 0.3s;
    background-color: #ffffff;
    box-shadow: 0px 4px 17px -9px #333333;

    i {
      padding: 32px 15px 32px 15px;
      color: #9da4b4;
      display: inline-block;
      opacity: 0;
    }

    &.active,
    &:active,
    &:hover {
      background-color: #e9f1f8;
      box-shadow: 0 1px 8px -1px #7392b3;
    }
  }
}
</style>
