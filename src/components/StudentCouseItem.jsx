import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { selectCoursesList } from './global-states/coursesListSlice';

const StudentCourseItem = (course) => {
    const coursesList = useSelector(selectCoursesList)
    const [checkboxes, setCheckboxes] = useState([false, false]);

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
        console.log(coursesList)
    };

    const calculateProgress = () => {
        const checkedCount = checkboxes.filter((checkbox) => checkbox).length;
        const progress = (checkedCount / checkboxes.length) * 100;
        return progress.toFixed(2)
    };

    return (
        <div className="d-flex flex-row justify-content-center" style={{ width: '100%' }}>
            <div className="card mb-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={course.course.thumbnail}
                            className="img-fluid rounded-start"
                            style={{ maxHeight: '400px' }}
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body justify-content-between">
                            <h5 className="card-title">{course.course.name}</h5>
                            <p className="card-text">{course.course.description}</p>
                            {course.course.syllabus.map((task, index) => (
                                <div className="form-check" key={index}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={checkboxes[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                        {task.topic}: {task.content}
                                    </label>
                                </div>
                            ))}
                            <div className="progress my-2">
                                <div className="progress-bar" role="progressbar" style={{ width: `${calculateProgress()}%` }} aria-valuenow={calculateProgress()} aria-valuemin="0" aria-valuemax="100">
                                    {calculateProgress()}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCourseItem;
