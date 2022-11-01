class SearchElement extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    set click (event) {
        this._click = event;
        this.render();
    }

    get value () {
        return this.shadowDOM.querySelector('#search-input').value;
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                #search-container{
                    margin: 0 0 0 2em;
                    width: 100%;
                }
                
                #search-container input{
                    padding: 0.5em;
                    width: 60%;
                    border: none;
                    border-radius: 0.5em;
                }
                
                #search-container button{
                    padding: 0.5em 1em;
                    background-color: orange;
                    border: none;
                    border-radius: 0.5em;
                    cursor: pointer;
                }
                #search-container button:hover{
                    background-color: darkorange;
                }             
            </style>

            <div id="search-container">
                <input type="search" id="search-input" placeholder="Search News">
                <button id="btn-search" type="submit">Search</button>
            </div> 
        `;
        
        this.shadowDOM.querySelector('#btn-search').addEventListener('click', this._click);
    }
}

customElements.define('search-element', SearchElement);