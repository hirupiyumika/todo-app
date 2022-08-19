const mongoose = require('mongoose')

module.exports = function(){
  const db = "mongodb+srv://hiru:hiru@cluster0.nkjb8w0.mongodb.net/todo-app?retryWrites=true&w=majority"
    mongoose.connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log(`Connect to ${db}...`))
    .catch(err => console.error('Could not connect to MongoDB...'))

}
 