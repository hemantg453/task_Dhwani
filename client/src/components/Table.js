import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const Table = (props) => {
    const [UserData, setAllUserData] = useState({});


    // ============API TO GET ALL THE DATA=====================
    const getAllUser = () => {
        fetch("api/getData", { })
            .then((res) => res.json())
            .then((data) => {

                setAllUserData(data.data);
            })
            .catch((error)=>
                console.log(error)
            )
    };



    useEffect(() => {

        getAllUser();
    }, []);


    return (
        <>

            {/* ===============================TABLE TO SHOW DATA START===================================== */}
            <div className="container table-responsive-sm-md-lg-xl"><br /><br />
                <h2 class="text-center"><i><u>ALL DATA </u>({UserData.length})</i> </h2>
                {window.location.pathname != "/" ? <Link className="btn btn-success float-lg-right" to="/">Page1</Link> : <Link className="btn btn-success float-lg-right" to="/page_2">Page2</Link>}<br/>
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            UserData.length > 0 && UserData.map((value, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{value.first_name}</td>
                                        <td>{value.last_name}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.email}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* ===============================TABLE TO SHOW DATA END===================================== */}
        </>
    );
};
export default Table;