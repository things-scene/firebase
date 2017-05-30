import firebase from 'firebase'

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'string',
    label: 'API Key',
    name: 'apiKey',
    property: 'apiKey'
  }, {
    type: 'string',
    label: 'Auth Domain',
    name: 'authDomain',
    property: 'authDomain'
  }, {
    type: 'string',
    label: 'Database URL',
    name: 'databaseURL',
    property: 'databaseURL'
  }, {
    type: 'string',
    label: 'Project ID',
    name: 'projectId',
    property: 'projectId'
  }, {
    type: 'string',
    label: 'Storage Bucket',
    name: 'storageBucket',
    property: 'storageBucket'
  }, {
    type: 'string',
    label: 'Messaging Sender Id',
    name: 'messagingSenderId',
    property: 'messagingSenderId'
  }, {
    type: 'string',
    label: 'Child Data Path',
    name: 'childDataPath',
    property: 'childDataPath'
  }, {
    type: 'string',
    label: 'Email Id',
    name: 'email',
    property: 'email'
  }, {
    type: 'string',
    label: 'Password',
    name: 'password',
    property: 'password'
  }]
}

var { RectPath, Shape } = scene

export default class Firebase extends RectPath(Shape) {

  added() {
    var {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      childDataPath,
      authToken,
      email,
      password
    } = this.model

    var email = 'test@example.com';
    var password = 'testpass';

    firebase.initializeApp({ apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId })
    // console.log(firebase.app().name);  // "[DEFAULT]"

    this._database = firebase.database();

    const auth = firebase.auth();

    var self = this

    function _(snapshot) {
      var data = snapshot.val();

      for(let key in data) {
        let val = data[key]
        self.root.variable(key, val);
      }
    }

    auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        // console.log('logged in', firebaseUser);
        var ref = firebase.database().ref().child(childDataPath);
        ref.once('value', _);
        ref.on('value', _);
      } else {
        console.log('not logged in.');
      }

    })

    const promise = email ? auth.signInWithEmailAndPassword(email, password) : auth.signInAnonymously();

    promise.catch(e => console.log(e.message))
  }

  disposed() {
    firebase.auth().signOut();
    // this._database && ..
  }

  _draw(context) {

    var {
      left,
      top,
      width,
      height,
      fillStyle,
      strokeStyle
    } = this.bounds;

    context.beginPath();

    context.fillStyle = fillStyle;
    context.strokeStyle = strokeStyle;

    context.rect(left, top, width * 0.8, height * 0.8);
    context.fill();
    context.stroke();

    context.beginPath();

    context.rect(left + width * 0.2, top + height * 0.2, width * 0.8, height * 0.8);
  }

  get nature(){
    return NATURE;
  }
}

scene.Component.register('firebase', Firebase);
