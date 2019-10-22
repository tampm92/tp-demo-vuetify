import Vue from 'vue';
import {
    mapActions
} from "vuex";

export default {
    name: `Layout`,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    created() {
        if (!Vue.options.components[this.name]) {
            Vue.component(
                this.name,
                () => import(`../layouts/${this.name}.vue`),
            );
        }

        this.setLayoutName({ layoutName: this.name });
    },
    render() {
        return this.$slots.default[0];
    },
    methods: {
        ...mapActions({
            setLayoutName: "setLayoutName",
        })
    }
};