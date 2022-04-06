export default {
  base: "/pusu-ui",
  publicPath: "/pusu-ui/",
  logo:
    "https://raw.githubusercontent.com/xliudaxia/imagebox/main/images/pusu-logo.png",
  description: "简洁而又优雅的React组件库",
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
};
