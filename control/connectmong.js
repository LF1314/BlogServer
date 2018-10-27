const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/my_blog', { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('链接成功')
});





















