class BrowserPackageVersion{
    constructor(name) {
        this.name = name;
    }

    element(){
        return document.querySelector(`meta[name="${this.name}-version"]`);
    }

    get(){
        let element = this.element();
        return element && element.getAttribute('content');
    }

    set(version){
        let element = this.element();
        if(!element){
            element = document.createElement('meta');
            element.setAttribute('name', `${this.name}-version`);
            document.querySelector('head').appendChild(element);
            element = this.element();
        }
        element.setAttribute('content', version);
    }
}

export default BrowserPackageVersion;