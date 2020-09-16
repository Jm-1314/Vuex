<template>
  <div class="about">
      <div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
         
        ]
    };
  },
  computed: {
    ...mapGetters(["Applist"])
  },

  created() {
    console.log(this.$name)
    this.onSubmit()
    let arr = [1,2,3]
    console.log(this.sum(...arr))
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("getApplist");
    console.log(this.Applist);
    this.Applist.map((item,index) => {
    this.url = item.header

      this.srcList.push(item.top_comments_header)
    })

    },
    sum(a,b,c){
      return a + b +c
    },
    
  }
};
</script>
