const path = require('path');
const nextBuildId = require('next-build-id');
const webpack = require('webpack');
const withGraphql = require('next-plugin-graphql');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

// Initialize dotenv library
require('dotenv').config();

module.exports = withGraphql(
  withImages(
    withSass({
      generateBuildId: () => {
        if (process.env.SOURCE_VERSION) {
          return `cust-next-build-${process.env.SOURCE_VERSION}`;
        }

        return nextBuildId({ dir: __dirname });
      },
      sassLoaderOptions: {
        sassOptions: {
          indentWidth: 2,
          includePaths: ['styles'],
        },
      },
      webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
          fs: 'empty',
        };
        /**
         * Returns environment variables as an object
         */
        const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
        }, {});
        // Allow yaml files to be loaded
        config.module.rules.push({
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        });

        /** Allows you to create global constants which can be configured
         * at compile time, which in our case is our environment variables
         */
        config.plugins.push(new webpack.DefinePlugin(env));

        // See: https://github.com/zeit/next-plugins/pull/315
        config.plugins.push(
          new FilterWarningsPlugin({
            exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
          }),
        );

        // Alias root with ~
        config.resolve.alias['~'] = path.resolve(__dirname);

        return config;
      },
    }),
  ),
);
