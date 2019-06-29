function fetchPromise (){
    fetch ('http://www.json-generator.com/api/json/get/cfQCylRjuG')
      .then (res => res.json())
      .then (user => console.log(user.getUsersData))
      .then (isTrue => isTrue == 'true')
      fetch ('http://www.json-generator.com/api/json/get/cfVGucaXPC')
        .then (resp => resp.json())
        .then (json => JSON.stringify(json))
        .then (Str => console.log (Str))
    .catch (err => console.log (err));
}
fetchPromise();