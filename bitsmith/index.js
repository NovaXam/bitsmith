var Mnemonic = require('bitcore-mnemonic');
var EthereumBip44 = require('ethereum-bip44');
var Mnemonic_dash = require('bitcore-mnemonic-dash');
var mnemonicSeed = new Mnemonic('garbage garden unable retreat bunker razor fat caution law puzzle stand move');

var wallet = EthereumBip44.fromPrivateSeed(mnemonicSeed.toHDPrivateKey());
// output the first address 
console.log("Etherium:");
console.log(wallet.getAddress(0));

// Calculate HD Master Extended Private Key:
var hdMastExtPrivKey = mnemonicSeed.toHDPrivateKey('', 'testnet');

// Derived External HD Private Key:
var hdExternalPrivKey = hdMastExtPrivKey.derive("m/44'/1'/0'/0/0");


// Derived External Private Key:
var myExternalPrivKey = hdExternalPrivKey.privateKey;

// Derived External Public Key:
var myExternalPublKey = myExternalPrivKey.publicKey;

// Derived External Public Address:
var myExternalAddress = myExternalPublKey.toAddress('testnet');

//console.log("hello");

console.log(mnemonicSeed);
console.log(hdMastExtPrivKey);
console.log("Bitcoin Testnet:");
console.log(myExternalAddress);