class DataSearch {
    static searchData (keyword) {
        return fetch(`https://newsdata.io/api/1/news?apikey=pub_11414e0d0de94c278a297adb2f2ceb32177ba&language=in&q=${keyword}`)
            .then(response=>{
                return response.json();
            })
            .then(dataJson=>{
                // console.log(dataJson.results);
                if(dataJson.results){
                    return Promise.resolve(dataJson.results);
                }else{
                    return Promise.reject(`data tidak bisa diambil`);
                }
            })
            .catch(error=>{
                messageError(error);
            });
    }
}

const messageError = error => {
    alert(error);
} 

export default DataSearch;

