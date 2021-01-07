export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    /**
     * Render doc to ui.
     * @param HasFormatter doc data
     * @param string doc heading text
     * @param string position of doc in list either in top or in bottom
     */
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (pos === "start") {
            // display doc at the start of ul
            this.container.prepend(li);
        }
        else {
            // display doc at the end of ul
            this.container.append(li);
        }
    }
}
