const fs=require('fs');
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was written');
});

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder created');
    });
  } 
  else {
    fs.rmdir('./assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder deleted');
    });
  }

const name ="yugendhar";
console.log(name)
const great =(name)=> {
    console.log('hello, ${name}');
}
greet('bahubali');
greet('kattappa'); 

greet('bahu');
greet('kat'); 

greet('ba');
greet('ka'); 