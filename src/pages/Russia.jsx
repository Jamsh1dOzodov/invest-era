import React from "react";
import Table from "../components/table/Table";

const Russia = () => {
    return (
        <div className="russia">
            <div className="container">
                <Table url={'http://127.0.0.1:8000/api/tables/online-table-chn/'} />
            </div>
        </div>
    )
}



export default Russia;