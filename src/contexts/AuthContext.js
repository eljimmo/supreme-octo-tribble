import React, { useContext, useEffect, useState} from 'react'
import { auth, db } from '../../src/firebase'
import { setDoc,doc } from "firebase/firestore"; 



const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    async function signup(email,password)
    {
        const washingtonRef = doc(db, "Users", email);
        const StockRef = doc(db, "Stocks", email);
        await setDoc(StockRef,{email:email});
        await setDoc(washingtonRef,{email:email});
        return await auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout(){
        return auth.signOut();
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }


    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePassword(password){
        return currentUser.updatePassword(password);
    }


    useEffect(()=>{
        const unsubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
           // console.log(currentUser);
            setLoading(false);
        })

        return unsubscribe
    },[])
    
    const value ={
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
  return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
  )
}
