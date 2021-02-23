import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from "@/components/firebaseConfig";

const  firebaseApp=firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()

