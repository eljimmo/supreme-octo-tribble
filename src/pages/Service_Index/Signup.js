import React, {useState} from 'react';
import Text from '../../elements/Text';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import Footer from '../../components/Footer/index';
// import Videoapp from '../../components/VideoTexture/App';
import Navbar from '../../components/Navbar/index';
import Sidebar from '../../components/Sidebar/index';

const Signup = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };   
    const onSubmit = async (e) => {
      e.preventDefault()
      
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

    
    }
  
  

  return (
    <main >
                    <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />         
        <section>
            <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Text className="text-4xl text-white text-center font-bold mb-2">
                            Project <span className="text-tertiary">Leibniz</span>
                        </Text>

                        <h2 className="text-white text-center text-base  tracking-tight text-gray-900">
                            Are you new? Sign up today
                        </h2>                        
                    </div>

                    
                    <form onSubmit={onSubmit} className="mt-8 space-y-6" >                    
                        <div className=" space-y-6 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    First name
                                </label>
                                <input
                                    label="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}                                    
                                    name="firstname"
                                    type="text"                                    
                                    required                                
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="First name"                                   
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Last name
                                </label>
                                <input
                                    label="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}                                    
                                    required
                                    type="text"
                                    name="lastname"                                                                       
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Last name"                                    
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}                                    
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"                                
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}                                    
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"                                
                                />
                            </div>
                        </div>                        

                        <div>
                            <button
                                type="submit"                                                               
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 "
                            >   
                                Sign up                                                             
                            </button>
                        </div>
                                             
                    </form>
                   

                    <p className="text-sm text-white text-center">
                        Already have an account?{' '}
                        <NavLink to="/login" className="underline text-tertiary text-sm text-white text-center">
                            Sign in
                        </NavLink>
                    </p>
                    
                </div>
            </div>
            {/* <Videoapp/> */}
                    <Footer/>
        </section>
    </main>
  )
}

export default Signup