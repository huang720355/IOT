<template>
    <div class="headerMain">
        头部
    </div>
</template>
<script>
export default {
    naem:"Header",
    data(){
        return {
            msg:"header"
        }
    },
    props:{

    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.headerMain{
    display: flex;
    width: 100%;
    height: 100px;
    background: #2F5EFF;
    box-shadow: 0px 2px 30px 0px rgba(46,49,57,0.12);
}
</style>