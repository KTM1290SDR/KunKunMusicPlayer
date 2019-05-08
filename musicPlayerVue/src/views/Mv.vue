<template>
    <div class="Mv">
        <ul>
            <li>
                 
            </li>
        </ul>
      
    </div>
</template>
<script>
export default {
    name:'Mv',
    data(){
        return {
            mv
        }
    },
}
</script>
<style lang="less" scoped>
ul{
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
li{
    list-style: none;
    width: 50%;
    video{
        height: 100%;
        width: 100%;
    }
}
</style>