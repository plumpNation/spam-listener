var template;

console.log(this);

if (this === window) {
    return;
}

template = this.querySelector('template');

this.register({
    prototype: {
        readyCallback: function() {
            this.appendChild(template.content.cloneNode(true));
        }
    }
});
