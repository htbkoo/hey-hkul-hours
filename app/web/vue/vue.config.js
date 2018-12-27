module.exports = {
    lintOnSave: false,
    devServer: {disableHostCheck: true},
};


/*


    configureWebpack: config => {
        if (isProduction()) {
            // mutate config for production...
            return config;
        } else {
            // mutate for development...
            console.log(JSON.stringify(config));
            if (!("devServer" in config)) {
                config.devServer = {};
            }
            config.devServer.disableHostCheck = true;

            return config;
        }
    }


* */

function isProduction() {
    return process.env.NODE_ENV === 'production';
}
