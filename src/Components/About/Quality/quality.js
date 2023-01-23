import qualityLogo from "../../../Assets/images/qualityCertificate.png"
import "./quality.css"

const Quality = () => {
    return (
        <div className="qualitySection">
            <div className="qualityHeading">Quality, Safety, Health Environment Policy</div>
            <div className="qualityPara">We are committed to win the satisfaction of interested parties through continual
                improvement in product quality operational efficiency safety prevention of health and
                environmental pollution.
            </div>
            <div className="qualityPara2">
                We shall perform processes by recovering wealth from waste optimizing resources
                consumption, involving all persons working under control of organization at all levels and
                complying with statutory regulatory requirement.</div>
            <div className="managingDirector">
                MANAGING DIRECTOR
            </div>
            <div className="qualityPictures">
                <img className="qualityLogo" src={qualityLogo}></img>
                <img className="qualityLogo" src={qualityLogo}></img>
                <img className="qualityLogo" src={qualityLogo}></img>
            </div>
        </div>
    )
}

export default Quality