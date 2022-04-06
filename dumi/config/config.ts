export default {
  base: "/PUSU-UI",
  publicPath:"/PUSU-UI/",
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
};
