import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data';


function Coursescreen(props) {
    console.log(props.match.params.id);
    const course = data.courses.find(x=>x._id===props.match.params.id);
    console.log(course);
    return <div>
        <div className="back-to-result">
        <Link to="/">To main main Page</Link>
        </div>
        <div className="details">
        <div className="details-image">
            <img src={course.image} alt={course.name}></img>
        </div>
        <div className="details-info">
            <ul>
                <li>
                    <h4>Name: {course.name}</h4>
                </li>
                <li>
                    <h4>University: {course.university}</h4>
                </li>
                <li>
                    <h4>Price: {course.price}</h4>
                </li>
                <li>
                    <h4>Enroll: {course.enrolment}</h4>
                </li>
                <li>
                    <h4>Description: {course.description}</h4>
                </li>
            </ul>
        </div>
        <div className="details-action">
            <ul>
                <li>
                    Price:{course.price}
                </li>
                <li>
                    Status:{course.status}
                </li>
                <li>
                    Oty:<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </li>
                <li>
                    <button>Add to cart</button>
                </li>
            </ul>
        </div>
        </div>
    </div>
}

export default Coursescreen;