import "./team.css"

const Team = () => {
    return (
        <div className="teamSection">
            <div className="keyManagementSection">
                <hr />
                <div className="keyManagementHeading">Key Management Personell</div>
                <div className="keyManagementBox">
                    <div className="keyManagementDetails">
                        <div className="keyManagementName">Venkat Akkineni</div>
                        <div className="keyManagementPost">Managing Director</div>
                    </div>
                    <div className="keyManagementDetails">
                        <div className="keyManagementName">K purshotham Naidu</div>
                        <div className="keyManagementPost">Director-Finance & Commercial</div>
                    </div>
                    <div className="keyManagementDetails">
                        <div className="keyManagementName">S Someswara Rao</div>
                        <div className="keyManagementPost">COO</div>
                    </div>
                </div>
                <hr />
            </div>

            <div className="bodSection">
                <div className="bodHeading">Board Of Directors</div>
                <div className="bodBox">
                    <div className="bodDetails">
                        <div className="bodName">Grandhi Sreeramakrishna</div>
                        <div className="bodPost">Chairman and Independent Director</div>
                    </div>
                    <div className="bodDetails">
                        <div className="bodName">Yugandhar Meka</div>
                        <div className="bodPost">Independent Director</div>
                    </div>
                    <div className="bodDetails">
                        <div className="bodName">AVVSSChb Sekhar babu</div>
                        <div className="bodPost">Independent Director</div>
                    </div>
                    <div className="bodDetails">
                        <div className="bodName">Ashok Vemulapalli</div>
                        <div className="bodPost">Non-Executive Director</div>
                    </div>
                    <div className="bodDetails">
                        <div className="bodName">Jyothsana Akkineni</div>
                        <div className="bodPost">Executive Director</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;