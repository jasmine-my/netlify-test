const emotionPresetOptions = {};

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
    undefined,
    emotionPresetOptions
);
const CracoAlias = require('craco-alias');

// eslint-disable-next-line no-undef
module.exports = {
    babel: {
        plugins: [
            ...emotionBabelPreset.plugins,
            // your other plugins
        ],
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src', // tsconfig.paths.json에 있는 baseUrl 경로값 맞춰준다.
                tsConfigPath: 'tsconfig.extend.json',
                debug: false, //carco.config 에러가 발생할 경우 true로 바꾸고 콘솔에서 디버깅을 진행한다.
            },
        },
    ],
};
