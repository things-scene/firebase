import locales from './locales'

var templates = [{
  name: 'firebase',
  /* 다국어 키 표현을 어떻게.. */
  description: '...',
  /* 다국어 키 표현을 어떻게.. */
  group: 'dataSource',
  /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../',
  /* 또는, Object */
  template: {
    type: 'firebase',
    model: {
      type: 'firebase',
      top: 50,
      left: 50,
      width: 100,
      height: 100,
      apiKey: "AIzaSyBtJayCKxuU-_lPaZvbLmOgqFlynMIu_sM",
      authDomain: "things-rtls.firebaseapp.com",
      databaseURL: "https://things-rtls.firebaseio.com",
      projectId: "things-rtls",
      storageBucket: "things-rtls.appspot.com",
      messagingSenderId: "32358989541",
      childDataPath: "boards/template/data",
      email: 'test@example.com',
      password: 'testpass'
    }
  }
}];

module.exports = {
  templates,
  locales
};
