
    init()

    function init() {

        var url = "https://api.coinbase.com/v2/prices/spot?currency=USD"

        var data = ''

        $.get(url, function (data) {
            console.log(data)

            data = ` 
        <p>$ ${data.data.amount}</p>      
       
        `
            // data.data is what made this work for go knows why
            $("#data").html(data)
        })
    }