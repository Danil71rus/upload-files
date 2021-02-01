<template>
    <div class="home">
        <upload-files @success="isUpload"></upload-files>
        <hr>
        <g-button v-if="isShowButton" value="Оптимизировать картинки" @click="click"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GButton from "@/components/controls/g-button.vue"
import UploadFiles from "@/components/controls/UploadFiles.vue"

@Component({
    components: {UploadFiles, GButton}
})
export default class Home extends Vue {
    isShowButton = false
    isUpload() {
        this.isShowButton = true
    }
    click() {
        alert("ok")
        // Vue.axios.get('http://localhost:3000/compress-file').then((response) => {
        //     console.log(`response: ${response.data}`)
        // }).catch( error=> {
        //     console.log(`error: ${error}`)
        // })
    }
}
</script>
<style lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
}
</style>
