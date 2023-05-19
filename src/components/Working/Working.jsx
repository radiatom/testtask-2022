import React, { useEffect } from "react";
import "./Working.scss";
import { useDispatch, useSelector } from "react-redux";
import { addNextPage, getPage } from "../../redux/reducer";
import Card from "./Card/Card";
import { getData } from "../../selectors/selectors";

const Working = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPage());
    }, [props]);
    const data = useSelector(getData);
    const  click=()=>{
      dispatch(addNextPage(data.links.next_url))
    }
    return (
        <div className="Working">
            <h2 className="Working__title Title">Working with GET request</h2>
            <div className="Working__row">
                {data.users.map((el) => {
                    return (
                        <Card
                            key={el.id}
                            name={el.name}
                            phone={el.phone}
                            photo={el.photo}
                            position={el.position}
                            email={el.email}
                        />
                    );
                })}
            </div>
            <button className= "Working__btn btn" onClick={click}>Show more</button>
        </div>
    );
};

export default Working;
