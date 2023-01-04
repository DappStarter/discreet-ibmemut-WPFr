require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember clump hope clock front trumpet'; 
let testAccounts = [
"0x21fd22bb0901dc56175f4ae589c364b5aeac98188c9ee66d210a9806ea84510f",
"0xded4a2ed1727f539262bf025ded1e343dd7ff074d6144b5b3dd22f631c05e209",
"0x676c3ea52b30b4e995b0540833b3cb48855138442479daabb1211c01681f3d2d",
"0xf2b263a3504ec8a29310cf5bf311e0181ef61f5eccbb150b3960d1d6027703c5",
"0x5796a327ccb7516a352f405a859d944945014573cda4354f051521c795a00844",
"0x36a5384b4cb9a6a686798d20c3be4a5e4c6884d13fb4c107a9124b72f8e4417c",
"0x0d9a7649c2d556c74f2eb41fae322fa7b1a89384362d9f499315a5ab49c2ea7f",
"0xf32aebbdf255c7855ccdd6cd0f0c4f7d88beb4abba24df7d7e0872405bb9a130",
"0x63ee826f44984d5a2caf31f310f2c2390ce77104c74417ef9e359615b13b92a5",
"0x5157d5dbcd58ff76b7e7a32c22a895f442f787bdaf5d8dc9b3c4778851728dc9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

