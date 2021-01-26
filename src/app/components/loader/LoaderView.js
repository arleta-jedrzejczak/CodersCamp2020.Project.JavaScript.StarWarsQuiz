class LoaderView {
    constructor() {
        this.isVisible = false;
    }

    show()
    {
        this.isVisible = true;

        return document.getElementById('loader').style.display = 'flex';
    }

    hide()
    {
        this.isVisible = false;

        return document.getElementById('loader').style.display = 'none';
    }

    render()
    {
        const loader = document.createElement('DIV');
        const loaderTextHolder = document.createElement('SPAN');
        const loadingText = 'Waiting you must...';

        loader.setAttribute('ID', 'loader');
        loaderTextHolder.innerText = loadingText;
        loaderTextHolder.style = `
            font-size: 4rem;
            font-weight: 600;
            color: #ffffff;
        `;
        loader.appendChild(loaderTextHolder);
        loader.style = `
            position: fixed;
            display: none;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100vw;
            haight: 100vh;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0, .9);
        `;

        loader.style.display = (this.isVisible) ? 'flex' : 'none';

        document.body.appendChild(loader);
    }
}

export default LoaderView;