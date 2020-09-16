import axios from 'axios'
export default {
    state : {
        applist:{
          
        }
    },
    mutations:{
        setApplist(state,item){
            console.log(item)
            state.applist = item
        }
    },
    actions:{
        getApplist(context,item){
            axios({
                method:'get',
                url:'https://api.apiopen.top/getJoke?page=1&count=2&type=video'
            }).then(function(resp){
            context.commit('setApplist',resp.data.result)
                console.log(resp.data);
            }).catch(resp => {
                console.log('请求失败：'+resp.status+','+resp.statusText);
            });
           
        }
    }
}