//последовательное выполнение
function getFethes () {
    var arr = []
    var data1 = new Promise (function (resolve, reject){
        fetch('http://www.json-generator.com/api/json/get/cevhxOsZnS')
        .then(resp=>resp.json())
        .then(jsn=>JSON.stringify(jsn))
        .then(data1=>arr.push(data1))
        .catch(err=>console.log(err));
    });
    var data2 = new Promise (function (resolve, reject){
        fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi')
        .then(resp=>resp.json())
        .then(jsn=>JSON.stringify(jsn))
        .then(data2=>arr.push(data2))
        .catch(err=>console.log(err));
    });
    var data3 = new Promise (function (resolve, reject){
        fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm')
        .then(resp=>resp.json())
        .then(jsn=>JSON.stringify(jsn))
        .then(data3=>arr.push(data3))
        .catch(err=>console.log(err));
    });
    var data4 = new Promise (function (resolve, reject){
        fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS')
        .then(resp=>resp.json())
        .then(jsn=>JSON.stringify(jsn))
        .then(data4=>arr.push(data4))
        .catch(err=>console.log(err));
    });
    var data5 = new Promise (function (resolve, reject){
        fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK')
        .then(resp=>resp.json())
        .then(jsn=>JSON.stringify(jsn))
        .then(data5=>arr.push(data5))
        .catch(err=>console.log(err));
    });

    console.log(arr);
    
}
getFethes ();

//параллельное

var urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS', 
    'http://www.json-generator.com/api/json/get/cguaPsRxAi', 
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm', 
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS', 
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

function bar (url) {
    fetch(url)
    .then(resp=>resp.json())
    .then(user=>{var res = JSON.stringify(user); console.log([res])})
    .catch(err=>console.log(err));
}


Promise.all(urls.map(bar)).then(values=>{console.log(values)});
