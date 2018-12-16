import configs from "./jest.config.js";

module.exports = {
    ...configs,
    reporters: ["default", "jest-junit"],
};