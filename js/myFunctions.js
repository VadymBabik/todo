const getElement = (e) => document.querySelector(e);

const getElementAll = (e) => document.querySelectorAll(e);

function createHtmlElem(tag, props) {
  const element = document.createElement(tag);
  Object.keys(props).forEach((key) => (element[key] = props[key]));
  return element;
}

export { getElement, getElementAll, createHtmlElem };
