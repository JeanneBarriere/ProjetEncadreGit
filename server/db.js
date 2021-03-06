const mongoose = require('mongoose');
const project_name = 'project';
const user_name = 'user_project_';
const __PASSWORD__ = require('../config/pwd.js');
const pwd = encodeURIComponent(__PASSWORD__);
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://JeanneBarriere:"+ pwd +"@projete-qhusr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


//LES utilisateur
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	pseudo : String,
	password : String,
	mail : String,
	day : Number,
	month : Number,
});
const User = mongoose.model('User', userSchema);

async function createUser(userData) {
	const user = new User({
		firstName : userData.firstName,
		lastName : userData.lastName,
		pseudo : userData.pseudo,
		password : userData.password,
		mail : userData.mail,
		day : userData.day,
		month : userData.month,
	})
	const result = await user.save();
	console.log(result);
};

async function getUsers(){
  const allUsers = await User.find();
  return allUsers;
}

async function removeUser(id) {
  const result = await User.deleteOne({_id: id});
  // indicates the number of deleted documents
  console.log("L'utilisateur a été supprimé :"+result);
}


const p4Schema = new mongoose.Schema({
	rows: Number,
	cols: Number,
	board : Array,
	turn: Number,
	moves: Number,
  pseudo: String,
});
const P4 = mongoose.model('P4', p4Schema);

async function createP4(p4Data) {
  var puissance = await findP4(p4Data.pseudo);
  console.log(puissance);
  await removeP4(p4Data.pseudo);
	const p4 = new P4({
    rows : p4Data.rows,
    cols : p4Data.cols,
    board : p4Data.board,
    turn : p4Data.turn,
    moves : p4Data.moves,
    pseudo : p4Data.pseudo,
	})
	const result = await p4.save();
	console.log(result);
};

async function removeP4(pseudo) {
  const result = await P4.deleteOne({pseudo: pseudo});
  // indicates the number of deleted documents
  console.log("Sauvegarde a été supprimé :"+result);
}

async function findP4(pseudo){
  const result = await P4.findOne({"pseudo": pseudo});
  return result;
}
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(function() {
	 console.log('now connected to mongodb!');
 })
 .catch(function (err) {
	 console.log ("Erreur lors de la connection à mongodb : ", err);
 })

 module.exports = {createUser,getUsers,removeUser,User, createP4, P4, findP4};
