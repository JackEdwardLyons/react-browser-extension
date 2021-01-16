import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

console.log('This is the background page.');
console.log('Put the background scripts here.');
let count = 0;

let timer = setInterval(() => {
  count++;
  console.log('counting ' + count);

  if (count >= 10) {
    clearInterval(timer);
  }
}, 1000);
