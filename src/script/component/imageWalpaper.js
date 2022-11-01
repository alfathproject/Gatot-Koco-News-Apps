class ImageWalpaper extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                #walpaper{
                    background-size: cover;
                    background-attachment: fixed;
                    width: 100vw;
                    height: 100vh;
                    object-fit: cover;
                    position: fixed;
                    z-index: -1;
                    filter: opacity(3%);
                    top: 0;
                }
            </style>

            <img id="walpaper" src="src/image/walpaper.jpg" alt="">
        `;
    }
}

customElements.define('image-walpaper', ImageWalpaper);