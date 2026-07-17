import PropTypes from "prop-types";
import {
    Card,
    ButtonGroup,
    Button,
} from "react-bootstrap";
import {
    Line,
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);

const DashboardChart = ({
    labels,
    deposits,
    withdrawals,
    transfers,
    selectedPeriod,
    onPeriodChange,
}) => {

    const data = {
        labels,

        datasets: [
            {
                label: "Deposits",

                data: deposits,

                borderColor: "#198754",

                backgroundColor: "rgba(25,135,84,.12)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 4,
            },

            {
                label: "Withdrawals",

                data: withdrawals,

                borderColor: "#dc3545",

                backgroundColor: "rgba(220,53,69,.12)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 4,
            },

            {
                label: "Fund Transfer",

                data: transfers,

                borderColor: "#0d6efd",

                backgroundColor: "rgba(13,110,253,.12)",

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 4,
            },
        ],
    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        interaction: {
            mode: "index",
            intersect: false,
        },

        plugins: {

            legend: {
                position: "top",
            },

            tooltip: {
                backgroundColor: "#212529",
            },

        },

        scales: {

            y: {

                beginAtZero: true,

                ticks: {
                    callback: (value) => `₹ ${value}`,
                },

            },

        },

    };

    return (

        <Card
            className="border-0 shadow-sm rounded-4"
        >

            <Card.Header
                className="bg-white border-0 py-3"
            >

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h4 className="fw-bold mb-1">
                            Banking Analytics
                        </h4>

                        <small className="text-muted">
                            Deposits, Withdrawals & Transfers
                        </small>

                    </div>

                    <ButtonGroup>

                        <Button
                            size="sm"
                            variant={
                                selectedPeriod === "weekly"
                                    ? "primary"
                                    : "outline-primary"
                            }
                            onClick={() =>
                                onPeriodChange("weekly")
                            }
                        >
                            Week
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                selectedPeriod === "monthly"
                                    ? "primary"
                                    : "outline-primary"
                            }
                            onClick={() =>
                                onPeriodChange("monthly")
                            }
                        >
                            Month
                        </Button>

                        <Button
                            size="sm"
                            variant={
                                selectedPeriod === "yearly"
                                    ? "primary"
                                    : "outline-primary"
                            }
                            onClick={() =>
                                onPeriodChange("yearly")
                            }
                        >
                            Year
                        </Button>

                    </ButtonGroup>

                </div>

            </Card.Header>

            <Card.Body>

                <div
                    style={{
                        height: "420px",
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

DashboardChart.propTypes = {

    labels: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,

    deposits: PropTypes.arrayOf(
        PropTypes.number
    ).isRequired,

    withdrawals: PropTypes.arrayOf(
        PropTypes.number
    ).isRequired,

    transfers: PropTypes.arrayOf(
        PropTypes.number
    ).isRequired,

    selectedPeriod: PropTypes.string,

    onPeriodChange: PropTypes.func,

};

DashboardChart.defaultProps = {

    selectedPeriod: "monthly",

    onPeriodChange: () => {},

};

export default DashboardChart;