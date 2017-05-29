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
  },{
    type: 'string',
    label: 'Auth Domain',
    name: 'authDomain',
    property: 'authDomain'
  },{
    type: 'string',
    label: 'Database URL',
    name: 'databaseURL',
    property: 'databaseURL'
  },{
    type: 'string',
    label: 'Project ID',
    name: 'projectId',
    property: 'projectId'
  },{
    type: 'string',
    label: 'Storage Bucket',
    name: 'storageBucket',
    property: 'storageBucket'
  },{
    type: 'string',
    label: 'Messaging Sender Id',
    name: 'messagingSenderId',
    property: 'messagingSenderId'
  }]
}

var { RectPath, Shape } = scene

export default class Firebase extends RectPath(Shape) {

  created() {
    var {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId
    } = this.model

    firebase.initializeApp({ apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId })
    this._database = firebase.database();

    console.log(firebase.app().name);  // "[DEFAULT]"

    // var ref = firebase.database().ref('/bluetoothscan');
    var ref = firebase.database().ref().child('bluetoothscan');
    ref.once('value', function(snapshot) {
      console.log(snapshot);
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.key(), childSnapshot.val());
      });
    });
  }

  disposed() {
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
