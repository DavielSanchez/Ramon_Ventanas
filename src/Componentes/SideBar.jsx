import '../../public/Styles/SideBar.css'
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
function SideBar() {

  const MySwal = withReactContent(Swal)

  const logout = () =>{

    MySwal.fire({
        title: "Estas seguro?",
        text: "Estas a punto de cerrar tu seccion.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar seccion"
      }).then((result) => {
        if (result.isConfirmed) {
            const auth = getAuth();
            signOut(auth).then(() => {
                window.location.replace("/");
          });
        }
      });

  }

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
  <symbol id="bootstrap" viewBox="0 0 118 94">
    <title>Bootstrap</title>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
  </symbol>
  <symbol id="home" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
  </symbol>
  <symbol id="archive" viewBox="0 0 16 16">
  <path fill='currentColor' d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</symbol>
  <symbol id="sales" viewBox="0 0 16 16">
  <path fill='currentColor' fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path fill='currentColor' d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
    </symbol>
  <symbol id="productos" viewBox="0 0 16 16">
  <path fill='currentColor' d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
  </symbol>
  <symbol id="customer" viewBox="0 0 16 16">
  <path fill='currentColor' d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill='currentColor' d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
    </symbol>
    <symbol id="settings" viewBox="0 0 16 16">
    <path fill='currentColor' d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path fill='currentColor' d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
    </symbol>
    <symbol id="salir" viewBox="0 0 16 16">
    <path fill='currentColor' fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
    <path fill='currentColor' fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
    </symbol>

    <symbol id='cotizacion' viewBox="0 0 16 16">
  <path fill='currentColor' fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
  <path fill='currentColor' d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
  <path fill='currentColor' d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
  <path fill='currentColor' d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
</symbol>

</svg>
        {/* <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;"> */}
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none justify-content-center mt-4">
      <span className="fs-2">Business Logo</span>
    </a>
  
    <ul className="nav nav-pills flex-column mb-auto mt-5">
      <li className="nav-item">
      <NavLink to= '/' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#home"/></svg>
          <span className='fs-4 home'>Home</span>
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to= '/inventario' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#archive"/></svg>
          <span className='fs-4'>Inventario</span>
          </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to= '/ventas' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#sales"/></svg>
          <span className='fs-4'>Ventas</span>
          </NavLink>
      </li>
      {/* <li className="nav-item">
      <NavLink to= '/clientes' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-2 mb-1" width="18" height="18"><use xlinkHref="#customer"/></svg>
          Clientes
          </NavLink>
      </li> */}
      <li className="nav-item">
      <NavLink to= '/clientes' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#customer"/></svg>
          <span className='fs-4'>Clientes</span>
          </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to= '/cotizaciones' className={({isActive})=> isActive ? 'nav-link text-white active' : 'nav-link text-white'} aria-current="page">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#cotizacion"/></svg>
          <span className='fs-4'>Cotizaciones</span>
          </NavLink>
      </li>
      {/* <hr /> */}
      <h2 className='settings text-light'>Settings</h2>
      {/* <hr /> */}
      <li className="nav-item">
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#settings"/></svg>
          <span className='fs-4'>Ajustes</span>
        </a>
      </li>
      <li className="nav-item">
        <a onClick={logout} href="#" className="nav-link text-white">
          <svg className="bi pe-none me-3 mb-1" width="35" height="35"><use xlinkHref="#salir"/></svg>
          <span className='fs-4'>Salir</span>
        </a>
      </li>
    </ul>
  </div>
    </>
  )
}

export default SideBar