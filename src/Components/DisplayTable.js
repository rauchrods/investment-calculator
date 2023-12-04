import TableItem from "./TableItem";

function DisplayTable({ yearlyData }) {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {

                    yearlyData.map((data) => {

                        return <TableItem data={data} key={data.year} />

                    })
                }
            </tbody>
        </table>
    )
}

export default DisplayTable;