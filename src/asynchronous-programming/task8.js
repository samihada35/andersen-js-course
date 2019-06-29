const getUsers = url=>fetch(url);

async function foo (url){
    
    function getUserInfo(url){
    getUsers(url)
    .then(resp=>resp.json())
    .then(user=>JSON.stringify(user))
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
    }
    
    try { 
      const res = await getUserInfo(url);
      console.log(res);
    }
    catch(err){console.log('Error!', err)}
}
foo('https://jsonplaceholder.typicode.com/users');
foo('ht://jsonplaceholder.typicode.com/users');

