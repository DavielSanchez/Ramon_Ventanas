import '../../public/Styles/Login.css'
// import { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, /* onAuthStateChanged */ } from "firebase/auth";
// import { FireBaseApp, userExist } from '../../FireBaseConfig/Firebase';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";


function Login() {

  const MySwal = withReactContent(Swal)

  // useEffect(() => {
  //   onAuthStateChanged(FireBaseApp, userStateChanged)
  // },[])

  // const userStateChanged = async (user) =>{
  //   if (user){
  //     // Mostrar cuando hay usuarios logeados
  //     const isRegistered = await userExist(user.uid);
  //     if (isRegistered){
  //       window.location.replace("/");
  //     }
  //     else{
  //       // window.location.replace("/");
  //       console.log('hello')

  //     }
  //   } else{
  //     // Mostrar cuando no hay usuarios logeados
  //   }
  // }

  const login = async  (e) => {
    e.preventDefault();
    const email = e.target.floatingInput.value
    const  password = e.target.floatingPassword.value

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log("User is signed in! " +  user.email);
        window.location.replace("/");
    // ...
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error: ", errorCode, "-", errorMessage);
        MySwal.fire({
          title: "Inicio de sesión fallido.",
          text: "Ha ocurrido un error en el procesamiento de la información. Inténtelo de nuevo.",
          icon: "error"
        });
  });
  }



  

  return (
    <>
    <title>BusinessName | Login</title>
    {/* <div className="d-flex align-items-center py-4 bg-body-tertiary"> */}
    <div className="form-signin w-100 m-auto">
  <form className='form' onSubmit={login}>
    
    <h1 className="text-center h3 mb-3 fw-normal">Inicia Seccion</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
</div>
    {/* </div> */}
    </>
  )
}

export default Login