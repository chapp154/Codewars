const path = require("path");

module.exports = {
    mode: "development", // Removes the encryption and displays readable code
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}

