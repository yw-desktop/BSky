<template>
    <main>
        <div class="w flex">
            <div>
                <img :src='list[0].himg' alt="" class="img">
            </div>
            <div class="start mr">
                <h1>{{list[0].detail}}</h1>
                <div>作者：{{list[0].auther}}</div>
                <div>简介：{{list[0].intro}}</div>
            </div>
        </div>
        <div class="start w">章节列表</div>
        <div class="w flexs">
            <div class="intro" v-for="(t,i) of intro" :key="i" @click="tocardl" :data-section='t.section' :data-lid='t.lid'>
                <span :data-section='t.section' :data-lid='t.lid'>
                    {{i+1}}：第{{i+1}}话
                </span>
                </div>
        </div>
        <div class="start w">相似推荐</div>
        <div class="w flexs">
            <div class="res" v-for='(t,i) of ran' :key='i' @click="update">
                <img :src="t.himg" alt="" :data-id='t.id'>
                <span>{{t.detail}}</span>
            </div>
        </div>
    </main>
</template>
<style scoped>
    .img{
        width:288px;
        height:370px
    }
    .mr{
        margin-left:20px
    }
    .w{
        width:1200px;
        margin:20px auto
    }
    .flex{
        display:flex;
    }
    .intro{
        width:180px;
        height:60px;
        margin:10px;
        background-color: #f9f9f9;
        text-align: center;
        line-height: 60px;
    }
    .flexs{
        display: flex;
        flex-wrap: wrap;
        
    }
    .res{
        width:130px;
        margin:10px
    }
    .start{
        text-align: start;
    }
        .res>img{
            width:100%;
        }

</style>
<script>

    export default{
    data(){
        return{
            lid:1,
            list:[0],
            intro:[0],
            ran:[0]
        }
    },
    methods:{
        update(e){
            this.lid=e.target.dataset.id
            this.f1().then(this.f2).then(this.f3)
           
        },
        tocardl(e){
            this.$router.push('/cardl?section='+e.target.dataset.section+'&lid='+e.target.dataset.lid)
        },
       
        //随机几个数据进去
        f(arr,list){
            var newarr=[]
            for(var item of arr){
                if(newarr.length>6){
                    return
                }else{
                    newarr.push(arr[Math.floor(Math.random()*10000/1000)])
                }
            }
           
            newarr=[...new Set(newarr)]
            console.log(newarr)
            for(var item of newarr){
                if(item==undefined){
                    newarr.splice(newarr.indexOf(item),1)
                }
            }
            return newarr
        },
        f1(){
            return new Promise((resolve,reject)=>{
                    var obj={
            id:this.lid
        }
        this.axios.get("topbarde",{params:obj})
            .then(res=>{
                this.list=res.data.data
                console.log('list是'+this.list)
                resolve()
            })
            .catch(err=>{
                console.log(err)
            })
            })
        
        },
        f2(){
            return new Promise((resolve,reject)=>{
                    var obj={
            id:this.lid
        }
             this.axios.get('cartoon',{params:obj})
            .then(res=>{
                console.log(res)
                this.intro=res.data.data
                console.log('intro是'+this.intro)
                resolve()
            })
            .catch(err=>{console.log(err)})
            })
        
        },
        //去除ran和list有相同项的元素
        fun(arr1,arr2){
            for(var item of arr1){
                if(item.detail==arr2[0].detail){
                    arr1.splice(arr1.indexOf(item),1)
                }
            }
            return arr1
        },
        f3(){
            return new Promise((resolve,reject)=>{
                 this.axios.get("topbar")
            .then(res=>{
                var ran=[]
               
                ran=this.f(res.data.data)
               
                // for(var item of ran){
                //     if(item.detail==this.list[0].detail){
                //         ran.splice(ran.indexOf(item),1)
                //     }
                // }
                ran=this.fun(ran,this.list)
                this.ran=ran
                console.log(res)
                resolve()
            })
            .catch(err=>{
                console.log(err)
                reject()
            })

            })
            
        }
    },
    created(){
        this.lid=this.$route.query.id;
        console.log(this.lid)

        this.f1().then(this.f2).then(this.f3);
        
        
    },
    }
</script>