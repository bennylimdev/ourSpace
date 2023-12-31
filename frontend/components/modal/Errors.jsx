import React from 'react';

const Errors = ({ errors }) => {
    
    const errorHandler = {};
    console.log(errors);
    
    if (errors.includes("First name can't be blank")) {
        errorHandler['firstname'] = "First name can't be blank";
    };

    if (errors.includes("Last name can't be blank")) {
        errorHandler['lastname'] = "Last name can't be blank";
    };

    if (errors.includes("Email can't be blank")) {
        errorHandler['email'] = "Email can't be blank";
    };

    if (errors.includes("Password is too short (minimum is 6 characters)")) {
        errorHandler['password'] = "Password is too short (minimum is 6 characters)";
    };

    return (
        <div className="errors-container">
            <ul>
                {
                    Object.values(errorHandler).map((error, i) => (
                        <li key={`${i}`}>{error}</li>
                    ))
                }
            </ul>
        </div>
  );
};

export default Errors;