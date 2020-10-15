const Button = (name = "Search", className = '', url = '') => {

  function showClassName(className) {
    if (className === undefined) {
      return '';
    } else if (typeof className === 'string') {
      return className;
    } else if (typeof className === 'object') {
      console.log(className.join(' '))
      return className.join(' ');
    } else {
      return console.log("damned");
    };
  };

  return `<a class="${showClassName(className)}" href="${url}">${name}</a>`;
};

export { Button };
