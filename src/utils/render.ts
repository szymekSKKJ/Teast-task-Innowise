export const render = (element: HTMLElement, elements: HTMLElement[]) => {
  element.innerHTML = "";

  elements.forEach((data) => {
    element.appendChild(data);
  });
};
