const functions = require('firebase-functions');
const admin = require('firebase-admin');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
admin.initializeApp();
const db = admin.firestore();

exports.onTicketAdd = functions.firestore.document('boards/Sales/tasks/{taskId}').onCreate(async (change, context) => {
    db.doc('boards/Sales').get('num_tasks')
    .then(doc => {
      db.doc('boards/Sales').set({num_tasks: doc.data().num_tasks + 1})  
    }).catch(e => console.error(e));
});

exports.onTicketRemove = functions.firestore.document('boards/Sales/tasks/{taskId}').onDelete(async (change, context) => {
  db.doc('boards/Sales').get('num_tasks')
  .then(doc => {
    db.doc('boards/Sales').set({num_tasks: doc.data().num_tasks - 1})  
  }).catch(e => console.error(e));
});

exports.setDb = functions.storage