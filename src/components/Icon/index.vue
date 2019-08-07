<template>
    <i :class="`fastrax-icon__${size} ${name}`" :style="`color: ${color};`" ></i>
</template>

<style lang="scss">
    .fastrax-icon__ {
        &2x{
            font-size: 20px;
        }
        &3x{
            font-size: 40px;
        }
    }
</style>

<script lang="ts" src="./index.ts"></script>