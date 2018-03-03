/**
 * Created by liuyen-teh on 3/3/2018.
 */
var bitcoinTransaction = require('bitcoin-transaction');
var from = "mtgjWna5UT1Jzi2oR5iiLaZ87RxyqWP8R7";
var to = "mtJ37cqWfPXBvFE5g2wh6bnd43ebdb8544";
var privKeyWIF = "a25f74ce91046914220e3053f623898175b6057844711644e02d5068633bcda";

var btcToSend = 0.1;

bitcoinTransaction.sendTransaction({
    from: from,
    to: to,
    privKeyWIF: privKeyWIF,
    btc: btcToSend,
    network: "testnet",
    fee: "hour"
});

