import _ from 'lodash';
import './style.scss';

function xxx(){
  let content = "Hello ";
  const NAME = "ES6";
  var div = document.createElement('div');
  div.innerHTML = content + NAME;
  return div
}
document.body.appendChild(xxx());

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());