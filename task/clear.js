const fs = require("fs-extra");

// Удаление директории
const clear = async function () {
    try {
        await fs.remove("./public/style");
        await fs.remove("./public/index.html");
        console.log("success!");
    } catch (err) {
        console.error(err);
    }
};

module.exports = clear;