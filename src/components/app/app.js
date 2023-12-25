import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import ChangeSalary from '../change-salary/change-salary';
import SalaryAddForm  from '../salary-add-form/salary-add-form';
import CalculateBonus  from '../calculate-bonus/calculate-bonus';
import CalculateBonusPercent  from '../calculate-bonus/calculate-bonus-percent';
import CalculateDeductions from "../calculate-deductions/calculate-deductions";
import './app.css';

function App() {

    const data = [
        {name: 'Sarah D.', salary: 2500},
        {name: 'Emily S.', salary: 4000},
        {name: 'John C.', salary: 800},
        {name: 'Alex M.', salary: 3000},
        {name: 'Carl W.', salary: 5000}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <ChangeSalary/>
            <SalaryAddForm/>
            <CalculateBonus/>
            <CalculateBonusPercent/>
            <CalculateDeductions/>
        </div>
    );
}

export default App;