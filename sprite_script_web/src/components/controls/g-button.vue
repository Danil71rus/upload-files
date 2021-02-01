<template>
    <button class="itl-button" @click="$emit('click')">{{ value }}</button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class GButton extends Vue {
    @Prop({ type: String, default: "button" })
    readonly value!: string
}
</script>
<style scoped lang="scss">
.itl-button {
    margin-top: 20px;
    min-width: 100px;
    min-height: 40px;
    padding: 10px;
    background: #42b983;
    color: aliceblue;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transition: all 0.4s ease-in-out;

    &:hover {
        background: #00aac1;
        cursor: pointer;
    }
}
</style>
