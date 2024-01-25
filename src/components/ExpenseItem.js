import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){

    return(<div className="expense-item">  
       <ExpenseDate
       date={props.expenseData.date}/>
        <div className='expense-item_description'>
            <h2>{props.expenseData.title}</h2>
            <div>{props.expenseDataprice}</div>
        </div>
    </div>)
}

export default ExpenseItem;