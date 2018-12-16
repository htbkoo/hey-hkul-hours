const configs = require("./jest.config.js");

module.exports = {
    ...configs,
    reporters: ["default", "jest-junit"],
};