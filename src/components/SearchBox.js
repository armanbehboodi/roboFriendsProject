import React from "react";

    const SearchBox = function ({searchField,SearchChange}){
        return(
            <div style={{marginBottom : "15px"}}>
                <input className={"pa1 ba br2 bg-light-blue"} type="search" placeholder="search robots" onChange={SearchChange}/>
            </div>
        )
    }

export default SearchBox;