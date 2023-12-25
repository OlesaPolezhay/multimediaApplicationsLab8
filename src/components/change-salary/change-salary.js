import './change-salary.css';

const ChangeSalary = () => {
    return (
        <div className="app-add-form">
            <h3>Змінити зарплату</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Ім'я, Прізвище" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Заробітна плата" />

                <button type="submit"
                        className="btn btn-outline-light">Змінити</button>
            </form>
        </div>
    )
}

export default ChangeSalary;