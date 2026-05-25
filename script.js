// ======================================
// Buy Coin Function
// ======================================

function buyCoin(coinName){

    alert(
        "✅ You selected to buy " +
        coinName
    );
}

// ======================================
// Go To Market Section
// ======================================

function goToMarket(){

    document
        .getElementById("market")
        .scrollIntoView({
            behavior:"smooth"
        });
}

// ======================================
// Live Price Update
// ======================================

function updatePrices(){

    let btc =
        (60000 + Math.random()*5000)
        .toFixed(2);

    let eth =
        (3000 + Math.random()*500)
        .toFixed(2);

    let usdt =
        (1 + Math.random()*0.1)
        .toFixed(2);

    document
        .getElementById("btc-price")
        .innerHTML = "$" + btc;

    document
        .getElementById("eth-price")
        .innerHTML = "$" + eth;

    document
        .getElementById("usdt-price")
        .innerHTML = "$" + usdt;
}

// Update every 3 seconds
setInterval(updatePrices,3000);