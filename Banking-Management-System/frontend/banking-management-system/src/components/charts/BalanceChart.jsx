import PropTypes from "prop-types";
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const BalanceChart = ({
    title = "Balance Overview",
    labels = [],
    values = [],
}) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Balance",
                data: values,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "top",
            },

            title: {
                display: false,
            },

            tooltip: {
                mode: "index",
                intersect: false,
            },
        },

        interaction: {
            mode: "nearest",
            intersect: false,
        },

        scales: {
            y: {
                beginAtZero: true,

                ticks: {
                    callback(value) {
                        return "₹ " + value.toLocaleString("en-IN");
                    },
                },
            },
        },
    };

    return (
        <Card className="border-0 shadow-sm h-100">

            <Card.Body>

                <h5 className="fw-bold mb-4">
                    {title}
                </h5>

                <div
                    style={{
                        height: "350px",
                    }}
                >
                    <Line
                        data={data}
                        options={options}
                    />
                </div>

            </Card.Body>

        </Card>
    );
};

BalanceChart.propTypes = {
    title: PropTypes.string,

    labels: PropTypes.arrayOf(
        PropTypes.string
    ),

    values: PropTypes.arrayOf(
        PropTypes.number
    ),
};

export default BalanceChart;