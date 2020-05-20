<template>
    <main>
        <div class="container">
            <div class="title">
                <div><input type="checkbox" @change="selectall" v-model="allcb">全选</div>
                <div>歌曲</div>
                <div>歌手</div>
                <div>专辑</div>
            </div>
            
            <div v-for="(t,i) of list" :key="i" class="title" @mouseenter="show" @mouseleave="hidden">
                <div><input type="checkbox" v-model="t.cb" @change="ch"></div>
                <div>{{t.singer}}</div>
                <div>{{t.song}}</div>
                <div>{{t.class | value }}</div>
                <img src="../assets/播放.png" alt="" :data-song="t.song" @click="audio" class="hide">
                <img src="../assets/删 除.png" alt=""  :data-id="t.id" @click="dele" class="hide" :data-cb='t.cb'>
            </div>
            
            <div class="title">
                <!-- <div><input type="checkbox">选中的歌曲</div> -->
                <el-button @click="deles" v-show='list.length!==0' type="warning">删除选中项</el-button>
            </div>
            <!-- <div>
                <td @click="plays">播放选中歌曲</td>
            </div> -->
        </div>
    </main>
</template>
<style scoped>
    
    .container{
        width:1200px;
        margin:0 auto;
        text-align: start;
        margin-top:50px;
        background:rgb(245,245,245)}
        .title{margin:30px 0
        }
    .flex{
        display:flex;
        justify-content: space-around;
        }
    .title div,.title img{
        display:inline-block;
        }
    .title div{
        width:250px;
        }
    .active img{
        visibility: visible !important;
        margin-right:30px
        }
    img{
        width:22px;height:22px
    }
    .hide{
        visibility: hidden
        }
</style>
<script>
import bus from '../bus.js'
    export default{
        data(){
            return{
                
                //保存获取的数据库的歌曲
                list:[],
                allcb:false
            }
        },
        methods:{
            //鼠标移入移除事件
            show(e){
               e.target.classList.add("active")

            },
            hidden(e){
                 
                e.target.classList.remove("active")
            },
            //播放多首歌曲
            audio(e){
                var song=e.target.dataset.song
                this.$router.push("/audio?song="+song)
            },
            //播放多首歌曲
            plays(){
                var str="";
                for(var item of this.list){
                    console.log(item)
                    if(item.cb){
                        str+=item.lid+","
                    }
                }
                if(str.length==0){
                   
                    return;
                }
                str=str.substring(0,str.length-1)
               
                var obj={
                    lids:str
                }
                this.axios.get("plays",{params:obj})
                .then(res=>{
                   
                    this.list=res.data.data
                    console.log(this.list)
                    //兄弟传参
                     bus.$emit("val",this.list)
                     this.$router.push("/audio")
                })
                .catch(err=>{console.log(err)})
                
               
            },
            selectall(e){
                var cb=e.target.checked;
                for(var item of this.list){
                    item.cb=cb
                }
            },
            //删除多个歌曲
            deles(){
                if(confirm('请再次确认')){
                    var str="";
                    for(var item of this.list){
                        if(item.cb){
                            str+=item.id+","
                        }
                    }
                    if(str.length==0){
                        alert("请选者要删除的歌曲")
                        return;
                    }
                    str=str.substring(0,str.length-1)
                
                    if(confirm("是否删除数据")){
                    // .then(res=>{
                        var ids={ids:str}
                        this.axios.get("dels",{params:ids})
                        .then(res=>{
                            console.log(res)
                            this.load()
                            this.$toast("删除成功")
                        })
                    }else{
                        return
                        }
                }else{
                    return
                }
                // })
                // .catch(err=>{console.log(err)})
            },
            //删除歌曲
            dele(e){
                if(confirm('请确认')){
                    if(e.target.dataset.cb){
                    var id=e.target.dataset.id;
                    var obj={
                        id:id
                    }
                    this.axios.get("del",{params:obj})
                    .then(res=>{console.log(res)
                    this.load()
                    })
                    .catch(err=>{console.log(err)})
                    }else{
                        alert('复选框未选中')
                        return
                    }
                }else{

                }
            },
            //初始化加载添加的歌曲
            load(){
                this.axios.get("load",{params:{
                    user:sessionStorage.username
                }})
                .then(
                    res=>{console.log(res);
                    this.list=res.data.data
                })
                .catch(err=>{
                    console.log(err)
                    })
            },
            //当所有的歌曲选中，全选按钮随之选中
            ch(){
                var sum=0;
                //遍历没首歌曲的chenck是否是true
                for(var item of this.list){
                    //为true  sum++
                    if(item.cb){
                        sum++;
                    };
                }
                    if(sum==this.list.length){
                        this.allcb=true
                    }
                    if(sum==0){
                        this.allcb=false
                    }
            },
           
           
        },
        created(){
            this.load()
        },
    }
</script>