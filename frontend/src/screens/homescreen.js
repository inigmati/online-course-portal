import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import data from '../data'
import axios from 'axios';

function Homescreen(props){

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            const {data} = await axios.get("api/courses");
            setCourses(data);
        }
        fetchData();
        return () => {
            //
        }
    }, [])

    return<div>
        <ul className="courses">
            {
                courses.map(course=>
                    <li key={course._id}>
                        <div class="course">
                            <Link to={"/courses/"+course._id}>
                            <img class="course-image" src={course.image} alt="product"/>
                            </Link>
                            <div class="course-name">
                                <Link to={"/courses/"+course._id}>{course.name}</Link>
                            </div>
                            <div class="course-university">{course.university}</div>
                            <div class="course-price">${course.price}</div>
                            <div class="course-enrolment">{course.enrolment}</div>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
}

export default Homescreen;