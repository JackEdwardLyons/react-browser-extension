import { printLine } from './modules/print';

console.log('Content script works!');
console.warn('Must reload extension for modifications to take effect.');

console.log('location: ' + window.location);

printLine("Using the 'printLine' function from the Print Module");
