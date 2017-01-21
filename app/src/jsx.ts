window.JSX = {
    createElement: (element, attributes, ...children) => {
        if (typeof element !== "string") {
            element = element.is;
        }
        let attrs = "";
        for (const attr in attributes) {
            const val = attributes[attr];
            if (val !== false) {
                attrs += ` ${attr}`;
                if (typeof val === "string") {
                    attrs += `="${attributes[attr]}"`;
                }
            }
        }
        return `<${element}${attrs}>
            ${children.join("")}
        </${element}>`;
    }
}

// export function JSXMixin<T extends Base>(SuperClass: Constructor<T>): Constructor<{ attrs: Partial<T> } & T> {
//     return class extends (SuperClass as Constructor<Base>) {
//         attrs: Partial<T>;
//     } as Constructor<{ attrs: Partial<T> } & T>;
// }
