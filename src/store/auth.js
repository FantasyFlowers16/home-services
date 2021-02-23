import firebase from 'firebase/app'


export  default {
    actions:{
       async  login({dispatch},{email,password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email,password)
                console.log('succses')
            }catch (e){
                console.log('fail')
                console.log(dispatch)
                console.log(email)
                console.log(password)
            }

        }
    }
}