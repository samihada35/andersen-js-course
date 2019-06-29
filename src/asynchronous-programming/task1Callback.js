function foo (x, callback) {
    if (x<=10){
        console.log('x<=10');
    }
    else {
        console.log('x>10');
        return callback;
    }
}

function createCb(str){
    return str;
}

foo(5,createCb('cb'));
foo(20,createCb('cb'));