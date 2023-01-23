import AwardImg from "../../../Assets/images/awardGiving.png"
import "./carousel.css"

const carousel = () => {

    return (
        <div className="carouselSection">
                <div className="carouselItem active">
                    <div className="carouselImage"><img src={AwardImg}></img></div>
                    <div className="carouselText"><b>Infrastructure Development</b> - He gave her the award fanoiefna aneaoignon naognaon oinga gak noignoiebgaon  ajogneoiangaon  gnaoeigneognioaegn</div>
                </div>
                <div className="carouselItem">
                    <div className="carouselImage"><img src={AwardImg}></img></div>
                    <div className="carouselText"><b>Infrastructure Development</b> - He gave her the award fanoiefna aneaoignon naognaon oinga gak noignoiebgaon  ajogneoiangaon  gnaoeigneognioaegn</div>
                </div>
                <div className="carouselItem">
                    <div className="carouselImage"><img src={AwardImg}></img></div>
                    <div className="carouselText"><b>Infrastructure Development</b> - He gave her the award fanoiefna aneaoignon naognaon oinga gak noignoiebgaon  ajogneoiangaon  gnaoeigneognioaegn</div>
                </div>
        </div>
    )
}

export default carousel
