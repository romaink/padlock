type JSXFactory = (
    element: string|PolymerElementConstructor,
    attributes: any,
    ...children: JSX.Element[]
) => JSX.Element;

declare namespace JSX {
    type Element = string
    interface ElementAttributesProperty {
        attrs: any;
    }
    interface ElementClass extends JSX.ElementAttributesProperty {}
    interface IntrinsicElements {
        [elemName: string]: any
    }
    var createElement: JSXFactory;
}

interface Window {
    JSX: {
        createElement: JSXFactory
    }
}
