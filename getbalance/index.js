const Client = require('electrum-client');

const proc = async(cl) => {
    try{
        const version = await cl.server_version("2.7.11", "1.0")
        console.log(version)
        const balance = await cl.blockchainAddress_getBalance("mvu4p45ykC9LUKT1xNUL4a2ZdjWeXsTmyY")
        console.log(balance)
        const utxo = await cl.blockchainAddress_listunspent("mvu4p45ykC9LUKT1xNUL4a2ZdjWeXsTmyY")
        console.log(utxo)
    }catch(e){
        console.log(e)
    }
}

const main = async(port, host) => {
    const cl = new Client(port, host);
    await cl.connect()
    await proc(cl)
    await cl.close()
}

main(50001, "18.221.223.44")