class ArticleTitle extends HTMLElement{
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    
    set title (title) {
        this._title = title;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                p{
                    margin: 0.5em;
                }
            </style>

            <p>${this._title}</p>
        `;
    }

}

customElements.define('article-title',ArticleTitle);