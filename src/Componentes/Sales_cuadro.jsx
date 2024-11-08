// import { Link } from 'react-router-dom'

function Sales_cuadro(content) {
    console.log(content.icon)
  return (
    <>

        <div className="sales_cuadros-item">
                <div className="sales_cuadros-header">
                    <div className="sales_cuadro_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className={content.icon} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d={content.path}/>
                    </svg>
                    </div>
                    <div className="sales_cuadro_info">
                        <span className='fs-5 sale_cuadro_title'>{content.title}</span>
                        <span className='fs-4 fw-bolder sale_cuadro_value'>{content.value}</span>
                        {/* {content.value} */}
                    </div>
                </div>
            </div>

        {/* <div className="sales_cuadros-item">
                <div className="sales_cuadros-header">
                    <span className='fs-5'>{content.title}</span>
                    <a className='color-primary' data-bs-toggle='dropdown' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path fill='Blue' d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
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
            </div> */}
    </>
  )
}

export default Sales_cuadro