const getPromise1=()=>Promise.resolve(2);
const getPromise2=()=>Promise.resolve(3);
const getPromise3=()=>Promise.resolve(7);

async function foo() {
    let value1 = await getPromise1();
    let value2 = await getPromise2();
    let value3 = await getPromise3();
    return await value1*(await value2+ await value3);
}