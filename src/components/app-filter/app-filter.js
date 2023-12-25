import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Сортувати за спаданням
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    Сортувати за зростанням
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                Сортувати за алфавітом
            </button>
        </div>
    )
}

export default AppFilter;