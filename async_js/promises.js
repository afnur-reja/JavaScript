function getData(dataId){
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(`${dataId} = Data`);
    }, 3000)
    })
}


//promise chain
getData(1).then((res) => {
    console.log(res);
    return getData(2);
}).then((res) => {
    console.log(res);
    return getData(3);
}).then((res) => {
    console.log(res);
    return getData(4);
}).then((res) => {
    console.log(res);
    return getData(5);
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})