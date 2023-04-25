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

  