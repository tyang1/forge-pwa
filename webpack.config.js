const path = require('path');

const config = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
<<<<<<< HEAD
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {test: /\.(png|jp(e*)g|svg)$/, use: [{
        loader: 'url-loader',
        options: { 
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
        } 
    }]}
    ]
  }
=======
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
>>>>>>> a17b62f8ac1a11ce260e88d3076cb3f5f7cbd1da
};

module.exports = config;
