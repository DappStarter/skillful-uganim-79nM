require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind provide gesture infant forget gesture'; 
let testAccounts = [
"0x11c561dfb27d76c569af5084cb7a0e8ff3ce096cf57bcaf8082c96d324b353f9",
"0x2e60118cdbd4bf05ca9f44de0a26b62754376f11af01762c0ac80d199581593a",
"0x31f192c55134a3ade92684493e0ab5e76581141a14bcf58991454200e9c531c4",
"0xe087e70b8a96d324af982f3376e59ca5f88c7e5393fb8bc9787ee22e1e1862e5",
"0xb9590f923cb37535e511e551378bd2a259e51b950fcafd824b4310aea533b7fa",
"0xa2ffa735bfd9434866daf1d4c34182b5c97d159b3a82028e801871491c4e189b",
"0x74e55751e8a3cee875fdabfeb87b5cf90402c535ab9ca5669d692200974c6a7e",
"0x5421ed56fd730536a6a11a52a7473e9cb50331259ad3c8bd38b17b7f0dd6bac6",
"0xa0bed35415b22149de02403107ec927e5b661156890f8accf79f0135b1efadb1",
"0xa3e63f55424ec48dbc1f31728211161c53fccba4a475443eca6a1a3e72c081ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


