var Mnemonic = require('bitcore-mnemonic-dash');
var code = new Mnemonic('garbage garden unable retreat bunker razor fat caution law puzzle stand move');
code.toString(); // natal hada sutil año sólido papel jamón combate aula flota ver esfera... 
var xpriv = code.toHDPrivateKey();

console.log(xpriv);

var hdMastExtPrivKeyDash = code.toHDPrivateKey();
// Derived External HD Private Key:
var hdExternalPrivKeyDash = hdMastExtPrivKeyDash.derive("m/44'/5'/0'/0/0");

// Derived External Private Key:
var myExternalPrivKeyDash = hdExternalPrivKeyDash.privateKey;
// Derived External Public Key:
var myExternalPublKeyDash = myExternalPrivKeyDash.publicKey;
// Derived External Public Address:
var myExternalAddressDash = myExternalPublKeyDash.toAddress();

console.log(myExternalAddressDash);