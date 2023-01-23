import csrDiagram from "../../../Assets/images/csrDiagram.png"
import Carousel from "./carousel"
import "./csr.css"

const Csr = () => {
    return (
        <div className="csrSection">
            <div className="csrHeading">Making a Difference</div>
            <div className="csrIntro">
                <div className="csrPara">Alufluoride limited aspires for the development of community that we work with. This is
                    essential component of our corporate social responsibility (CSR) objectives. CSR activities
                    which works for sustainable improvement in the quality of life of the community.</div>
                <div className="csrPara">Every year we dedicated few manhours to identify the need of the community around us
                    and fill the gap with our efforts. We not only create employment opportunities for the local
                    around our manufacturing unit, but also take steps to improve their health and lifestyle
                    through several initiatives.</div>
            </div>
            <div className="csrDiagram"><img className="csrImage" src={csrDiagram}></img></div>
            <Carousel />
        </div>
    )
}

export default Csr