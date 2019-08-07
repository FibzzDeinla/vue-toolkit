<template>
    <pre :class="`clipboard_snippet clipboard_${theme} ${(isCollapsed ? 'clipboard_collapsed' : '')}`">
        <code :class="`language-${lang}`">
            <slot></slot>
        </code>
    </pre>
</template>

<script>
    import Prism from 'prismjs';
    import Clipboard from "clipboard";

    export default {
        name: "clipboard",
        props: {
            theme: {
                type: String,
                default: () => "dark" // dark | light
            },
            lang: {
                type: String,
                default: () => "markup"
            },
            collapsed: {
                type: Boolean,
                default: () => false
            }
        },
        data() {
            return {
                isCollapsed: false
            }
        },
        created() {
        },
        methods: {
            handleCollapsed() {
                this.isCollapsed = !this.isCollapsed;
            }
        },
        mounted() {
            var _el = this.$el;
            this.handleCollapsed();

            // DOM is not updated yet
            this.$nextTick(() => {

                // re-Highlight again
                Prism.highlightAll();

                $(_el).prepend('<span class="view-source"><i class="amsicon-ios-arrow-right"></i>View Source Code</span><span class="copy">copy</span>');

                $(document).on('click', '.view-source',(e) => {
                    e.preventDefault();

                    this.handleCollapsed();
                    $(_el).find(".view-source").html(`${(this.isCollapsed ? '<i class="amsicon-ios-arrow-right"></i> View' : '<i class="amsicon-ios-arrow-down"></i> Hide')} Source Code`)
                })

                // create clipboard for every copy element
                const clipboard = new Clipboard(".copy", {
                    target: trigger => {
                        return trigger.nextElementSibling;
                    }
                });

                // do stuff when copy is clicked
                clipboard.on("success", event => {
                    event.clearSelection();
                    event.trigger.textContent = "copied!";
                    setTimeout(() => {
                        event.trigger.textContent = "copy";
                    }, 1000);
                });
            });

        }
    };
</script>

<style lang="scss">

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: #7C7C7C;
}

.token.punctuation {
    color: #c5c8c6;
}

.namespace {
    opacity: .7;
}

.token.property,
.token.keyword,
.token.tag {
    color: #96CBFE;
}

.token.class-name {
    color: #FFFFB6;
    text-decoration: underline;
}

.token.boolean,
.token.constant {
    color: #99CC99;
}

.token.symbol,
.token.deleted {
    color: #f92672;
}

.token.number {
    color: #FF73FD;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: #A8FF60;
}

.token.variable {
    color: #C6C5FE;
}

.token.operator {
    color: #EDEDED;
}

.token.entity {
    color: #FFFFB6;
    /* text-decoration: underline; */
}

.token.url {
    color: #96CBFE;
}

.language-css .token.string,
.style .token.string {
    color: #87C38A;
}

.token.atrule,
.token.attr-value {
    color: #F9EE98;
}

.token.function {
    color: #DAD085;
}

.token.regex {
    color: #E9C062;
}

.token.important {
    color: #fd971f;
}

.token.important,
.token.bold {
    font-weight: bold;
}

.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}

.clipboard_snippet {
    position: relative;

    code[class*="language-"],
    &[class*="language-"] {
        color: #c5c8c6;
        /*text-shadow: 0 1px rgba(0, 0, 0, 0.3);*/
        font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    &[class*="language-"] {
        overflow: auto;
        border-radius: 0.3em;
        border-radius: 3px !important;
    }

    &:not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #1d1f21;
    }

    /* Inline code */
    &:not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
    }


    &.clipboard_light span.copy {
        background: #394e6d;
        color: #ffffff;
        z-index: 2;
    }
    &.clipboard_dark span.copy {
        background: #dedede;
        color: #333333;
    }

    &.clipboard_dark {
        background: #1d1f21;
        color: #ffffff;
        border-radius: 3px;
    }
    &.clipboard_light {
        background: #dedede;
        color: #333333;
    }


    > span:first-child {
        font-size: 14px !important;
        position: absolute;
        top: 23px;
        left: 20px;
        z-index: 1;
    }


    &:not(.clipboard_collapsed) 
    {

        code { display: block; margin-top: 10px; }

        > span:first-child {
            color: #595959;

            &:hover { cursor: pointer; color: #b6babf; }
        }
    }

    &.clipboard_collapsed.clipboard_dark {
        color: #ffffff !important;
        height: 59px;
        overflow: hidden;

        code { display: block; margin-top: 10px; }

        > span:first-child:hover { cursor: pointer; }
    }
}

span.copy {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 2px;
    margin: 18px 20px !important;
    padding: 5px 12px !important;
    cursor: pointer;
}
</style>
