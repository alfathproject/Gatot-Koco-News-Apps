class NewsItem extends HTMLElement{
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set news (item) {
        if(item.image_url == null){
            item.image_url = 'src/image/imageNotFound.png';
        }
        this._news = item;
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = `
            <style>
                .news-item{
                    max-width: 50em;
                    background-color: var(--blue-);
                    box-sizing: border-box;
                    border-radius: 0.5em;
                    margin: 3em 1em;
                    padding : 0 0 1em 0;
                    box-shadow : 0 1px 1px 1px rgba(0,0,0,0.3);
                    z-index:99;
                }
                .news-item h2{
                    padding : 0.5em;
                }
                .news-item p{
                    margin-top: -1em;
                    padding: 0.5em;
                }
                .news-item a{
                    text-decoration:none;
                    color: black;
                    background-color: orange;
                    padding: 1em 5em;
                    display: flex;
                    justify-content: center;
                    max-width: 5em;
                    margin : 0.5em;
                    border-radius: 0.5em;
                }
                .news-item a:hover{
                    background-color: darkorange;
                }
                img{
                    width: 100%;
                    height: 15em;
                    object-fit: cover;
                    border-radius: 0.5em
                }
            </style>

            <div class="news-item"> 
                <img src="${this._news.image_url}" alt="image from ${this._news.source_id}" width="100%">
                <h2>${this._news.title}</h2>
                <p>${this._news.description}</p>
                <a href="${this._news.link}" target="_blank">Lihat</a>
            </div>
        `;
    }
}

customElements.define('news-item', NewsItem);

// (${this._news.image_url}==null)?src/image/imageNotFound.png : ${this._news.image_url};