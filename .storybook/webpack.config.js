const path = require('path');
const autoprefixer = require('autoprefixer');

const nodeModulesPath = path.join(__dirname, '../node_modules');
const srcPath = path.resolve(__dirname, '../src');

const moduleRules = [
  {
    test: /\.scss$/,
    include: [srcPath, nodeModulesPath],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [autoprefixer({ browsers: ['last 2 versions'] })],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          outputStyle: 'expanded',
          sourceMapContents: true,
          includePaths: [path.resolve(srcPath, 'styles')],
          data: '@import "' + path.resolve(srcPath, 'styles/theme.scss') + '";',
        },
      },
    ],
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: nodeModulesPath,
    loader: 'graphql-tag/loader',
  },
];

module.exports = async ({ config, mode }) => {
  config.context = path.resolve(__dirname, '../src');
  config.resolve = {
    extensions: ['mjs', '.js', '.json', '.scss'],
    modules: [nodeModulesPath, srcPath],
  };
  config.module.rules.push.apply(config.module.rules, moduleRules);

  return config;
};
