// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const CracoAlias = require("craco-alias");

// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src", // tsconfig.paths.json에 있는 baseUrl 경로값 맞춰준다.
        tsConfigPath: "tsconfig.extend.json",
        debug: false, //carco.confi 에러가 발생할 경우 true로 바꾸고 콘솔에서 디버깅을 진행한다.
      },
    },
  ],
};
