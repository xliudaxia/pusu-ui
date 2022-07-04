export default {
  base: "/pusu-ui",
  logo: "https://www.qingtengzhi.com/wp-content/uploads/2022/06/pusu-logo.png",
  description: "简洁而又优雅的React组件库",
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  title: "PUSU-UI",
};
