import React from "react"
import { Link } from "gatsby"

import JessicaProfile from "../images/jessica-profile"
import KileyProfile from "../images/kiley-profile"
import RachaelProfile from "../images/rachael-profile"

const TeamHeads = () => (
    <div className="team-heads">
        {/* depending on the CSS I might just make square images for here */}
        <div>
            <Link to="/team#jessica">
                <JessicaProfile />
            </Link>
            <Link to="/team#jessica">
                Jessica, PT.
            </Link>
        </div>
        
        <div>
            <Link to="/team#jessica">
                <KileyProfile />
            </Link>
            <Link to="/team#jessica">
                Kiley
            </Link>
        </div>
        
        <div>
            <Link to="/team#jessica">
                <RachaelProfile />
            </Link>
            <Link to="/team#jessica">
                Rachael
            </Link>
        </div>
    </div>
)

export default TeamHeads


