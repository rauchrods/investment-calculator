const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits:2
})


function TableItem({data}) {
    return (
        <tr>
            <td>{data.year}</td>
            <td>{ formatter.format (data.savingsEndOfYear)}</td>
            <td>{ formatter.format (data.yearlyInterest)}</td>
            <td>{formatter.format (data.savingsEndOfYear - data.yearlyContribution*data.year)}</td>
            <td>{formatter.format (data.yearlyInterest)}</td>
        </tr>
    )
}

export default TableItem

