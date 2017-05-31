var firebase = require('firebase')

firebase.initializeApp({
  apiKey: "AIzaSyCfqM_viu8mcuUbIupgv0Qh2xD6NWf1thA",
  authDomain: "things-board-399e6.firebaseapp.com",
  databaseURL: "https://things-board-399e6.firebaseio.com",
  projectId: "things-board-399e6",
  storageBucket: "things-board-399e6.appspot.com",
  messagingSenderId: "74237077394",
})

var email = 'test@example.com';
var password = 'testpass';
var childDataPath = "boards/template/data";

this._database = firebase.database();

const auth = firebase.auth();

var self = this
var exit = false

function _(snapshot) {
  var data = snapshot.val();

  for (let key in data) {
    let val = data[key]
    console.log('DATA', key, val);
  }
}

auth.onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log('logged in');
    var ref = firebase.database().ref().child(childDataPath);
    ref.on('value', _);
  } else {
    if (exit) {
      console.log('logged out, about to exit');
      process.exit(1);
    }
  }
})

const promise = email ? auth.signInWithEmailAndPassword(email, password) : auth.signInAnonymously();

promise.catch(e => console.log(e.message))

setTimeout(() => {
  exit = true;
  firebase.auth().signOut();
}, 10000);
