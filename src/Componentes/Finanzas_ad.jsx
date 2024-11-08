import '../../public/Styles/Finanzas_ad.css'

function Finanzas_add() {


  return (
    <>
    <div className="finanzas_ad">
        <div className="finanzas_ad_header">
            <h1>Finanzas</h1>
            <select className="form-select w-25 bg-transparent border-transparent rounded-pill px-4" aria-label="Default select example">
                <option selected>Last 30 days</option>
                <option value="1">This month</option>
                <option value="2">This year</option>
                <option value="3">Last Year</option>
            </select>
        </div>
        <div className="finanzas_ad_content">
          <div className="ingresos_ad">
            <h3 className='Value_ad text-success'>RD$1,000,000.00</h3>
            <span className='Subtitle_ad'>Ingresos</span>
          </div>
          <div className="gastos_ad">
          <h3 className='Value_ad text-warning'>RD$500,000.00</h3>
            <span className='Subtitle_ad'>Gastos</span>
          </div>
          <div className="beneficios_ad">
          <h3 className='Value_ad text-success'>RD$500,000.00</h3>
            <span className='Subtitle_ad'>Beneficios</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Finanzas_add