import firebase from 'firebase/firebase-browser'

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

const FIREBASE_IMAGE = 'data:image/png;base64,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';

var { RectPath, Shape } = scene

export default class Firebase extends RectPath(Shape) {

  added() {
    if(!Firebase.image) {
      Firebase.image = new Image()
      Firebase.image.src = FIREBASE_IMAGE
    }

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
      height
    } = this.bounds;

    context.drawImage(Firebase.image, left, top, width, height);
  }

  get nature(){
    return NATURE;
  }
}

scene.Component.register('firebase', Firebase);
