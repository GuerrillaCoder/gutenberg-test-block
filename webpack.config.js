const path = require('path');
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );



module.exports = (env, argv) => {

    console.log(argv);

    return {
        entry: {
            'bundle': './src/index.jsx',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-react"]
                        }
                    },
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new DependencyExtractionWebpackPlugin(),
        ]
    };
}