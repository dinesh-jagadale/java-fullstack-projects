import PropTypes from "prop-types";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TransactionChart = ({
    title = "Monthly Transactions",
    labels = [],
    deposits = [],
    withdrawals = [],
}) => {
    const data = {
        labels,
        datasets: [
            {
                label: "Deposits",
                data: deposits,
            },
            {
                label: "Withdrawals",
                data: withdrawals,
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
            mode: "index",
            intersect: false,
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0,
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
                    <Bar
                        data={data}
                        options={options}
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

TransactionChart.propTypes = {
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    deposits: PropTypes.arrayOf(PropTypes.number),
    withdrawals: PropTypes.arrayOf(PropTypes.number),
};

export default TransactionChart;