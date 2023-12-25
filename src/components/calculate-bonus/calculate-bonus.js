import './calculate.css';


const CalculateBonus = () => {
    return (
        <div className="salary-add-form">
            <h3>Розрахувати бонус фіксовано</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Прізвище ім'я" />
                <input type="number"
                       className="form-control new-post-label"
                       placeholder="Cума бонусу" />

                <button type="submit"
                        className="btn btn-outline-light">Обчислити</button>
            </form>
        </div>
    )
}

export default CalculateBonus;