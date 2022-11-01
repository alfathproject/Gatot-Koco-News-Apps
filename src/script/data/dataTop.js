class DataTop {
    static getData () {
        return fetch(`https://newsdata.io/api/1/news?apikey=pub_11414e0d0de94c278a297adb2f2ceb32177ba&language=in`)
            .then(response=>{
                return response.json();
            })
            .then(dataJson=>{
                const data = JSON.stringify(dataJson.results);
                localStorage.setItem('data', data);
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

export default DataTop;