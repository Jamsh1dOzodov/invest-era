import React from "react";
import Table from "../components/table/Table";

const Usa = () => {
    return (
        <div className="usa">
            <div className="container">
                <Table url={'http://127.0.0.1:8000/api/tables/model-portfolio-usa/'} />
            </div>
        </div>
    )
}



export default Usa;