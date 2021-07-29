var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

let bddUriConnection = process.env.BDD_URI_CONNECTION;

mongoose.connect(`${bddUriConnection}`,
   options,        
   function(err) {
    if(err){
    console.log(err);
     } else {
     console.log('____________BDD OK_________________')
     }
   }
)

module.exports = mongoose;