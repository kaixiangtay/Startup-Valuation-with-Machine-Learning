import React from "react";

function Sidebar() {

    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src="../images/logo.svg" alt="logo" />
                    <h2>FIN<span className="danger">KERS</span></h2>
                </div>
            <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>
            <div className="sidebar">
                <a href = "#" >
                    <span className="material-icons-sharp">
                        query_stats
                    </span>
                    <h3>Prediction</h3>
                </a>
                <a href = "#" className="active">
                    <span className="material-icons-sharp">
                        info
                    </span>
                    <h3>About</h3>
                </a>

            </div>
        </aside>
    );
}

export default Sidebar;