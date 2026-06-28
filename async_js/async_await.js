function getData(dataId){
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        console.log("Data ", dataId);
        resolve("Resolved");
    }, 3000)
    })
}


async function gettingData() {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
}

gettingData()