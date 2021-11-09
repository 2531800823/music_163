<template>
  <!-- 搜索 -->
  <div class="search">
    <el-autocomplete
      v-model="value"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      suffix-icon="el-icon-search"
    >
      <template slot-scope="{ item }">
        <span class="addr">
          <i
            class="iconfont"
            :class="
              item.type == 0
                ? 'icon-yinle'
                : item.type == 1
                ? 'icon-geren'
                : item.type == 2
                ? 'icon-zhuanji'
                : 'icon-cuowu'
            "
          ></i>
          {{ item.name }}
        </span>
        <span v-if="item.id && (item.type == 0 || item.type == 3)">{{
          "-" + item.nameMusic
        }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import { getKeyWords, getHotKeyWords } from "@/api/search.js";

export default {
  created() {
    this.getLishi();
  },
  data() {
    return {
      results: [],
      value: "",
    };
  },
  methods: {
    querySearchAsync(str, cb) {
      // console.log(this.value.trim());
      if (!this.value?.trim()) return cb(this.results);
      console.log(1);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getList(cb);
      }, 1000);
    },
    // 点击搜索
    handleSelect(val) {
      console.log(val);
    },
    // 获取联想
    async getList(cb) {
      const { data } = await getKeyWords(this.value);
      console.log(data);
      this.results = this.formatData(data);
      if (this.results.length === 0)
        this.results.push({
          type: 4,
          name: "找不到",
        });
      cb(this.results);
      console.log(this.results);
    },
    // 处理获取联想数据
    formatData(data) {
      data = data.result;
      if (!data) return null;
      let obj = [];
      // 歌曲过滤
      if (data.albums?.length) {
        for (let i = 0; i < data.albums.length; i++) {
          obj.push({
            type: 0,
            id: data.albums[i].id,
            name: data.albums[i].name,
            nameMusic: data.albums[i].artist.name,
            idMusic: data.albums[i].artist.id,
          });
        }
      }

      // 歌手过滤
      if (data.artists?.length) {
        for (let i = 0; i < data.artists.length; i++) {
          obj.push({
            type: 1,
            id: data.artists[i].id,
            name: data.artists[i].name,
          });
        }
      }

      // 专辑过滤
      if (data.songs?.length) {
        for (let i = 0; i < data.songs.length; i++) {
          obj.push({
            type: 2,
            id: data.songs[i].album.id,
            name: data.songs[i].album.name,
            nameMusic: data.songs[i]?.artists[0].name,
            idMusic: data.songs[i]?.artists[0].id,
          });
        }
      }
      return obj;
    },

    // 获取热门联想
    async getLishi() {
      const { data } = await getHotKeyWords();
      this.utilHot(data);
      // console.log(data);
    },
    // 处理热门联想
    utilHot(data) {
      data = data.result;
      for (let i = 0; i < data.hots.length; i++) {
        this.results.push({
          type: 0,
          name: data.hots[i].first,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  align-self: center;
  i {
    font-size: 18px;
  }
  .addr {
    i {
      margin-right: 10px;
    }
  }
}
</style>