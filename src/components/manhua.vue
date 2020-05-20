<template>
    <main>
        <div class="container flex">
            <div class="parent" v-for="(t,i) of list" :key="i" @click="tocar" :data-id='t.id'>
                <img :src="t.wimg" alt="" :data-id="t.id">
                <p :data-id="t.id">{{t.detail}}</p>
            </div>
        </div>
    </main>
</template>
<style scoped>
.flex{
    display: flex;
    justify-self: start;
    flex-wrap:wrap
}
p{text-align: center;}
.container{
    width:1200px;
    margin:20px auto;
    
}
.parent{
    width:20%;
    padding:10px;
    box-sizing: border-box;
    background-color: rgb(243, 241, 240);
}
.parent>img{
    width:100%
}
</style>
<script>
    export default{
    data(){
        return{
            list:[0]
        }
    },
    methods:{
        tocar(e){
             var id=e.target.dataset.id
             
             this.$router.push('/cartoon?id='+id)
         },
        getcartoon(){
            this.axios.get("topbar")
            .then(res=>{
                this.list=res.data.data
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    created(){
        this.getcartoon()
    },
    }
</script>