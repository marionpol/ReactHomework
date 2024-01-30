import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return(
    <li><Card className="expense-item">
       <ExpenseDate
       date={props.expenseData.date}/>
        <div className='expense-item__description'>
            <h2>{props.expenseData.title}</h2>
            <div className='expense-item__amount'>{props.expenseData.amount}</div>
        </div>

    </Card></li>)
}

export default ExpenseItem;