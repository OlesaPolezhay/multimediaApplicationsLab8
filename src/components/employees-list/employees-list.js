import React from 'react';

const EmployeesList = ({ data }) => {
    // Відобразіть дані безпосередньо, щоб переконатися, що кнопки не з'являються через ці дані
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p>Name: {item.name} Salary: {item.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeesList;
