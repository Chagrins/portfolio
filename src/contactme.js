class ContactElement extends HTMLElement {
    constructor() {
        super();

        var html = `
        <div class="contact">
            <p>${this.displayText}</p>
        </div>
        `;

        this.innerHTML = html;
    }
}

customElements.define('contact', ContactElement);