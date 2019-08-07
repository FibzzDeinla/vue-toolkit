<template>
    <div class="input-group mb-3 currencyinput">
        <div class="input-group-append currency-label">
            <span class="input-group-text">{{ currencyCode }}</span>
        </div>
        <input type="text" readonly v-bind:value="result.text" class="form-control currencyinput-control" />
    </div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped lang="scss">
    @import "@/scss/base/_mixins.scss";

    .currencyinput {
        position: relative;

        > div.currency-label {

            &, span {
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
            }

            > span {
                border: none;
                background-color: #147319;
                color: #fff;
                @include user-select(none);
            }
        }   
    }

    input[type="text"].currencyinput-control {
        border-left: none;
        text-align: right;

        &, &:focus {
            outline: 0;
            border-top: 1px solid #c0c0c0;
            border-bottom: 1px solid #c0c0c0;
            border-right: 1px solid #c0c0c0;
        }

        &[readonly*="readonly"] {
            background-color: #fff !important;
        }
    }    
</style>

<style lang="scss">
  
</style>
