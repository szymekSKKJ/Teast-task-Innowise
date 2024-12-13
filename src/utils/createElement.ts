type EventListeners = {
  [K in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[K]) => void;
};

type createElement = <ElementType extends keyof HTMLElementTagNameMap>(
  tag: ElementType,
  attributes?: Partial<
    HTMLElement & {
      styles: Partial<CSSStyleDeclaration>;
    }
  >,
  events?: EventListeners
) => HTMLElementTagNameMap[`${ElementType}`];

type ElementAttributes<T extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[T];

export const createElement = <ElementType extends keyof HTMLElementTagNameMap>(
  tag: ElementType,
  attributes?: Partial<ElementAttributes<ElementType> & { styles: Partial<CSSStyleDeclaration> }>,
  events?: EventListeners,
  children?: HTMLElement | HTMLElement[] | string
): HTMLElementTagNameMap[`${ElementType}`] => {
  const element = document.createElement(`${tag}`);
  const childrenToArray = children !== undefined ? (Array.isArray(children) ? children : [children]) : undefined;

  if (attributes !== undefined) {
    Object.entries(attributes).forEach(([property, value]) => {
      if (property === "styles") {
        Object.entries(value).forEach(([property, value]) => {
          //@ts-expect-error It will not produce error due to the CSSStyleDeclaration type
          element.style[property] = value;
        });
      } else if (property === "className") {
        element.setAttribute(`class`, `${value}`);
      } else {
        element.setAttribute(`${property}`, `${value}`);
      }
    });
  }

  if (events !== undefined) {
    Object.entries(events).forEach(([property, value]) => {
      element.addEventListener(`${property}`, value);
    });
  }

  if (childrenToArray !== undefined) {
    childrenToArray.forEach((value) => {
      if (typeof value === "string") {
        const node = document.createTextNode(value);

        element.appendChild(node);
      } else {
        element.appendChild(value);
      }
    });
  }

  return element;
};
