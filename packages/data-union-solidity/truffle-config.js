module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    compilers: {
        solc: {
            version: "0.8.6",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: "istanbul",
            }
        }
    },

    plugins: ["solidity-coverage"],
}
