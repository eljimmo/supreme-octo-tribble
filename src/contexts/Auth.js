// import React, { useContext, useState, useEffect } from "react";
// import { altogic } from "../helpers/altogic";

// const AuthContext = React.createContext();
// export function useAuth() {
//   return useContext(AuthContext);
// }
// export function AuthProvider({ children }) {
//   const [user, setUser] = useState();
//   const [accessToken, setAccessToken] = useState();
//   const [session, setSession] = useState();
//   const [loading, setLoading] = useState(true);

//   async function getUserFromDB() {
//     let { user, errors } = await altogic.auth.getUserFromDB();
//     if (errors) return { errors };
//     setUser(user);
//   }

//   useEffect(() => {
//     // Check active sessions and sets the user and session
//     const session = altogic.auth.getSession();
//     getUserFromDB();

//     // do not set user and session if there is no session
//     // if (!session) return;
      
//     // setUser(session.user);
//     // setSession(session);
//     // setUser(user ?? null);
//     setUser(user => user ?? null);
//     setSession(session => session ?? null);

//     // setSession(session ?? null);


//     setLoading(false);
//   }, []);

//   // Will be passed down to Signup, Login and Home components
//   const value = {
//     user,
//     session,
//     setUser,
//     setSession,
//     loading,
//     setLoading,
//     accessToken,
//     setAccessToken,
//   };

//   return (
//     <AuthContext.Provider value={value}>

//       {!loading && children}

//     </AuthContext.Provider>
//   );
// }
