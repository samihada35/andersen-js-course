function parseJson (jsonStr, successCb, failureCb) {
    try {
        var result=JSON.parse(jsonStr);
        console.log ('success parse');
        return successCb (result);
    }
    catch(err) {
        console.log ('Failure parse!');
        return failureCb(err);
    }

}

function successCb (val) {
    return val;
}

function failureCb (err) {
    return err;
}

parseJson ('{"x":10}', successCb, failureCb);