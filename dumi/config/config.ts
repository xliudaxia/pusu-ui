export default {
  base: "/pusu-ui",
  publicPath: "/pusu-ui/",
  logo: "https://s2.loli.net/2022/04/06/G1WCOe72DF8zcau.png",
  description: "简洁而又优雅的React组件库",
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  title: "PUSU-UI",
};
