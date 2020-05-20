<template>
    <main>
        <div class="container flex">
            <div class="child" v-for="(t,i) of list" :key="i" :data-song='t.song' @click="tonvideo($event)">
                <div>
                    <img :src="t.imgmi" alt="" :data-song='t.song'>
                </div>
                <p :data-song='t.song'>{{t.song}}</p>
            </div>
        </div>
    </main>
</template>
<style scoped>  
.child>div{
    height:220px;
    overflow: hidden;
}

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
    /* overflow: hidden; */
    /* position:relative;
        left:0;
        top:0; */
       
}
.child img{
    width:100%;
}
.child img:hover{
    transform:scale(1.1)
}
.child p{
    text-align: center;
    /* position: relative;;
    bottom:10px;
    left:0 */
}
.large{
    transform: scale(1.1);
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
        tonvideo(e){
            var song=e.target.dataset.song
            this.$router.push('/audio?song='+song)
        },
    },
    created(){
        this.axios.get('rd')
        .then(res=>{
            this.list=res.data.data
            console.log(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    }
</script>