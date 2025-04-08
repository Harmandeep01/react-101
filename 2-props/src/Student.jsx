import React from 'react';
// import PropTypes from 'prop-types';
function Student(props){
    return(
        <div className="student-card">
            <p>Name : {props.name ? props.name : "Unknown"}</p>
            <p>Age : {props.age ? props.age : 0}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

//Prop Types to check the types of props passed to the component

//Default Props to set default values for props if not passed

export default Student;