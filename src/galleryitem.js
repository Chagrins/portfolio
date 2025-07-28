class GalleryItem extends HTMLElement {
    constructor() {
        super();
        this.displayImage = this.getAttribute('src');
        this.displayTarget = this.getAttribute('target');
        this.displayText = this.getAttribute('caption');
        this.isListItem = this.getAttribute('is-list');
        this.displaySubtext = this.getAttribute('subcaption');

        console.log(this.attributes.length);
        var captionText = `<p>${this.displayText}</p>`
        if(this.displaySubtext !== null) {
            captionText += `<br/><p>${this.displaySubtext}</p>`;
        }
        var html = `
        <a class="thumbnail" href="${this.displayTarget}" target="_blank">
            <img src="${this.displayImage}" alt="${this.displayText}" />
        </a>
        <div class="caption">
            ${captionText}
        </div>
        `;

        if(this.isListItem === "true") {
            this.innerHTML = `<li>${html}</li>`
        }
        else {
            this.innerHTML = html;
        }
    }
}

customElements.define('gallery-item', GalleryItem);