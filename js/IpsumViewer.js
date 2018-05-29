import Template from './Template.js';

const template = new Template(({ title, category, author, publishedOn, body }) => {
    return `
    <h4>${title}</h4>
    <ul>
        <li>Category: ${category}</li>
        <li>Author: ${author}</li>
        <li>Published On: ${publishedOn}</li>
        <li>${body}</li>
    </ul>
    `;
});

export default class IpsumViewer {
    update(ipsums) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(ipsums));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Select an Ipsum.';
        return this.section;
    }
}