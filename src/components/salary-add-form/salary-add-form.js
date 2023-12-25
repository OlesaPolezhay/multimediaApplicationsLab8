

const SalaryAddForm = () => {
    return (
        <div className="salary-add-form">
            <h3>Розрахувати заробітну плату для співробітника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Прізвище ім'я" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Кількість годин" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Ставка за годину" />

                <button type="submit"
                        className="btn btn-outline-light">Обчислити</button>
            </form>
        </div>
    )
}

export default SalaryAddForm;