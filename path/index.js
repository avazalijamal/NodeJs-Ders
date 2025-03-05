const path = require('path');

console.log(path.extname("index.js")); // .js
console.log(path.basename("index.js")); // index.js
console.log(path.basename("index.js", '.js')); // index.js
console.log(path.dirname("index.js")); // path

const format = path.format({
    root: '/ignored/',
    name: 'file',
    ext: '.txt',
});
console.log("format", format); // /ignored/file.txt

const format2 = path.format({
    dir: '/home/user/dir',
    base: 'files.txt'
});
console.log("format2", format2); // /home/user/dir/files.txt

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')); // /foo/bar/baz/asdf/quux
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // /foo/bar/baz/asdf
console.log(path.parse('/home/user/dir/file.txt')); // { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }

// Mutleq yolu tapir
console.log(path.resolve('path.js')); // /home/user/dir/file.txt
console.log(path.resolve('/foo/bar', './baz')); // /foo/bar/baz
console.log(path.resolve('/foo/bar', '/tmp/file/')); // /tmp/file
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')); // /home/user/dir/wwwroot/static_files/gif/image.gif

