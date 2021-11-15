import React from "react";
import ContactUs from "./ContuctUs";
import Download from "./Download";
import Help from "./Help";
import Home from "./Home";
import JoinUs from "./JoinUs";
import Login from "./Login";
import Search from "./Search";
import Settings from "./Settings";

function Button (){
    // const style = {
    //     padding: "0.25rem 1rem",
    //     margin: "0.25rem",
    //     minWidth: "0.25rem"
    // }

    return (
        <>
        <div>
            <JoinUs/> <Settings/>
        </div>
        <div>
            <Login/> <ContactUs/>
        </div>
        <div>
            <Search/> <Help/>
        </div>
        <div>
            <Home/> <Download/>
        </div>
        </>
        
    )
}

export default Button;