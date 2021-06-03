import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Table from './Table'
const Page1 = (props) => {
    const history = useHistory();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState('');


    // ===============API POSTING DATA======================
    const PostData = () => {
        fetch("api/add", {
            method: "post",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender: gender
            }),
        })
            .then((res) => res.json())
            .then((data) => { history.push('/page_2') })
            .catch((error) =>
                console.log(error)
            )
    };

    return (
        <>
            <h2 class="text-center"><u><i>ADD DATA</i></u> </h2>

            {/* ===============================FORM TO ADD DATA START===================================== */}
            <div className="container">
                <div className="card">

                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label for="inputState">First name</label>
                                    <input type="text" required value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder="First name" />
                                </div>
                                <div className="col">
                                    <label for="inputState">Last name</label>
                                    <input type="text" value={last_name}
                                        onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Last name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label for="inputState">Gender</label>
                                    <select value={gender} required
                                        onChange={(e) => setGender(e.target.value)} id="inputState" class="form-control">
                                        <option selected>Select Gender</option>
                                        <option >Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="inputState">Email</label>
                                    <input type="emil" required value={email}
                                        onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                                </div>
                            </div><br />
                            <div className="row">
                                <button type="button" onClick={() => PostData()} class="btn btn-primary btn-lg btn-block">Submit Data</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {/* ===============================FORM TO ADD DATA END===================================== */}
            <Table />

        </>
    );
};
export default Page1;