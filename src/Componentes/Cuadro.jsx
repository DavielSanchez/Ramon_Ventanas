import { Link } from 'react-router-dom'

function Cuadro(content) {
  return (
    <>
        <div className="cuadros-item">
                <div className="cuadros-header">
                    <span className='fs-5'>{content.title}</span>
                    <a className='color-white' data-bs-toggle='dropdown' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path fill='White' d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">{content.action1}</a></li>
                        <li><Link to={'/ventas'} className="dropdown-item">{content.action2}</Link></li>
                    </ul>
                </div>
                <div className="cuadros-content">
                    <span>20K</span>
                </div>
            </div>
    </>
  )
}

export default Cuadro