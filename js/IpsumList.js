import Template from './Template.js';
import ipsums from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsums</h2>
    <ul class="list"></ul>
`);

const ipsumTemplate = new Template(({ title, author }) => `
    <li class="ipsum">
        ${title} by ${author}
    </li>
`);

export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = ipsums;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.ipsumList);
        const ul = dom.querySelector('ul');

        this.ipsumList.map(ipsums => {
            const dom = ipsumTemplate.render(ipsums);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsums);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}