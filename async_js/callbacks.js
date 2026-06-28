//callback : function passed as argument in another function.
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log(dataId, "Data");
        if(getNextData){
            getNextData(dataId);
        }
    }, 2000)
}


//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5)
            })
        })
    })
})