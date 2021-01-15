// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import * as functions from 'firebase-functions'

const admin = require('firebase-admin')
// import * as admin from 'firebase-admin';
admin.initializeApp()

// export const dailyJob = functions.pubsub
//
//   .schedule('30 5 * * *').onRun(context => {
//     console.log('This will be run every day at 5:30AM');
//   });

export const everyFiveMinuteJob = functions.pubsub.schedule('every 5000 minutes').onRun((context) => {
  // console.log('This will be run every 5 minutes!');
  // var sams_key = 'etfjGeR9knRCQE-bvjBIyM:APA91bFV1dfcBWHcTW4k1nqLIEbbKkU0YcgZl7UtAzQMJFTh5thZ3BQImgmhWK69hH9LfZTLfaYN453GaVDuX4CfqXTzFHMmGdyvFpT8niB10RMSaqA898Xe31XIF9oQw-xn0gpv7e-5';
  // @ts-ignore
  const payload = {
    notification: {
      title: 'You have been invited to a trip.',
      body: 'Tap here to check it out!',
    },
  }

  const db = admin.firestore()
  // @ts-ignore
  db.collection('users')
    .get()
    .then(function (snapshot: any) {
      console.log(snapshot)
      // admin.messaging().sendToDevice(snapshot.noteToken, payload)
      // snapshot.forEach(function (doc) {
      //   console.log(doc.data(), doc.id)
      //   admin.messaging().sendToDevice(doc.data().noteToken, payload)
      // })
    })
  //
  //
  // const users = db.collection('users').get()
  // users.forEach((doc: { noteToken: string; }) => {
  //   console.log(doc.noteToken)
  //
  // })

  //var keys = db.collection('users/{uid}/noteToken').get()

  // console.log(keys)

  //console.log("notification sent to ", sams_key)
})

