<template>
    <div class="sing">
    <musicList></musicList>
    </div>
</template>
<script>
import musicList from "@/components/musicList";
export default {
    name:'sing',
    components:{
        musicList
    },
    created(){
       console.log(this.$route.params)
    }
}
</script>
<style lang="less" scoped>
    
</style>
