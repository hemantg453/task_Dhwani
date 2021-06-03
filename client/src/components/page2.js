import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import ApexCharts from 'apexcharts'
import Table from './Table'
const Page2 = (props) => {
    const history = useHistory();
    const [UserData, setAllUserData] = useState({});
    const [men, setmen] = useState([]);
    const [fem, setfem] = useState([]);
    //console.log("UserData",UserData)




    const getAllUser = () => {
        fetch("api/getData", {

        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("ALL USER DATA===>",data.data)
                setAllUserData(data.data);
                var men = data.data.filter(gen => gen.gender == "Male")
                var fem = data.data.filter(gen => gen.gender == "Female")
                setfem(fem)
                setmen(men)
                console.log("abc", men.length, fem.length)

                var options = {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    series: [men.length, fem.length],
                    labels: ["Male", "Female"],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }
                var chart = new ApexCharts(document.querySelector("#chart"), options);

                chart.render();
            })
            .catch((error) =>
                console.log(error)
            )
    };
    useEffect(() => { getAllUser() }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        {/* =====================CHART================== */}
                        <div id="chart">
                        </div>

                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{ marginTop: "-25px" }}>
                        {/* =====================TABLE===================== */}
                        <Table />
                    </div>
                </div>

                <br />

            </div>

        </>
    );
};
export default Page2;