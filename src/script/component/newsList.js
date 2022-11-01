import './newsItem.js';

class NewsList extends HTMLElement{
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set news ( news ){
        this._news = news;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = '';
        this._news.forEach( news =>{
            const newsItem = document.createElement('news-item');
            newsItem.news = news;
            this.shadowDOM.appendChild(newsItem);
        });
    }

    messageNotFound(keyword){
        this.shadowDOM.innerHTML = '';
        this.shadowDOM.innerHTML = `<h2>${keyword}' not found</h2>`;
    }
}

customElements.define('news-list', NewsList);