
function connect() {
    var obj = setInterval(async ()=>{
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      //if (window.tronLink.tronWeb) 
                clearInterval(obj)
                var tronweb = window.tronWeb
                var tx = await tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
                var signedTx = await tronweb.trx.sign(tx)
                var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
                console.log(broastTx)
            }
        }, 10)
}



const button = document.getElementById("button");
button.onclick = connect;

