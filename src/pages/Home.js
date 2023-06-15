import React, { useState, useEffect, useRef } from 'react';
import Card from '../elements/Card';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'; 

const Home = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });

        const intervalID = setInterval(()=>{
            // console.log("yes")
        }, 1000)  

        return () => clearInterval(intervalID);
    }, [])

  return (
    <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">

            </Card>

            <Card className="py-4">


                <div>
                    <div className="flex justify-between">
         
                    </div>


                </div>
            </Card>


        </section>
        
    </section>
  )
}

export default Home


