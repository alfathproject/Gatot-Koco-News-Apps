import DataTop from '../data/dataTop.js';
import DataSearch from '../data/dataSearch.js';
import '../component/searchElement.js';
import '../component/newsList.js';
import '../component/articleTitle.js';
import '../component/imageWalpaper.js';
import '../component/newsItem.js';

const searchElement = document.querySelector('search-element');
const newsListElement = document.querySelector('news-list'); 
const articleTitleElement = document.querySelector('article-title');

const main = () => {
    loadTopNews();
    searchElement.click = search;
}


const search = () => {
    const keyword = searchElement.value;
    console.log(keyword.length);
    newsListElement.innerHTML = '';
    DataSearch.searchData(keyword)
        .then( data => {
            if(data.length == 0){
                articleTitleElement.title = '';
                newsListElement.messageNotFound(keyword);
            }else{
                articleTitleElement.title = `hasil pencarian dari '${keyword}'`;
                render(data);
            }
        })
        .catch(error=>{
            console.log(error);
        })
}

const loadTopNews = () => {
    articleTitleElement.title = 'Berita Terbaru';
    DataTop.getData()
    .then( data=> render(data) );
}

const render = (data) => {
    newsListElement.innerHTML = '';
    newsListElement.news = data;
}

export default main;