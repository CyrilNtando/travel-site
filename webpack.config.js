var path = require("path"); //using node to access path
//object that tells webpack what to do
module.exports = {
  //tells webpack which file shoud be looking at before creating its bundle
  entry: ["babel-polyfill", "./app/assets/scripts/App.js"],
  //directory were bundle file should bee
  output: {
    //path where we want the bundle file to be created
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        }
      }
    ]
  },
  mode: "production"
};
