<template>
    <main>
        <div class="container flex">
            <div class="child" v-for="(t,i) of list" :key="i" :data-id='t.id' @click="tonvideo($event)">
                <img :src="t.img" alt="" :data-id='t.id'>
                <p :data-id='t.id'>{{t.title}}</p>
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
.container{
    width:1200px;
    margin:auto
}
.child{
    box-sizing: border-box;
    width:20%;
    padding:10px;
    margin:3px 0;
    overflow: hidden;
}
.child>img{
    width:100%;
}
.child>img:hover{
    transform:scale(1.1);
    transition-duration: 2s;
}
p{
    text-align: center;
}
.large{
    transform: scale(1.1);
}
</style>
<script>
    export default{
    data(){
        return{
            list:[]
        }
    },
    methods:{
        tonvideo(e){
            var id=e.target.dataset.id
            this.$router.push('/nvedio?id='+id)
        },
    },
    created(){
        this.axios.get('vedio')
        .then(res=>{
            this.list=res.data.data
        })
        .catch(err=>{
            console.log(err)
        })
    },
    }
</script>