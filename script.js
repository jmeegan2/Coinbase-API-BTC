


    init()

    function init() {

        var url = "https://api.coinbase.com/v2/prices/spot?currency=USD"

        var data = ''

        $.get(url, function (data) {
            console.log(data)

            data = ` 
            <p>${data.amount}</p>
           
            `

            $("#prices").html(data)
        })
    }










// // api url
// const api_url = 
//       "https://api.coinbase.com/v2/prices/spot?currency=USD";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     if (response) {
       
//     }
//     show(data);
// }
// // Calling that async function
// getapi(api_url);
  
// var data = ''

// $.get(url, function (data) {
//     console.log(data)

//     data = ` 
//     <p>${data.amount.toLocaleString()}</p>
   
//     `

//     $("#prices").html(data)
// })


// // Function to define innerHTML for HTML table
// function show(data) {
//     let dataOther = 
//     `<p>${data.amount.toLocaleString()}</p>`

//     // Setting innerHTML as tab variable
//     document.getElementById("price").innerHTML = dataOther;
// }
// let price = [];


//     fetchData();

//     function fetchData() {
//         fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
        
//     });

//     }
    



//     // function displayPrice(data) {
// //     const bitcoinPrice = data.amount;
// //     const bitcoinPriceDiv = document.getElementById("price-data")
// //     const heading = docuemnt.creatElement("h1");
// //     heading.innerHTML = bitcoinPrice;
// // }

