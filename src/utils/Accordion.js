import React, {useState} from "react";
import IconR from "../images/Accordion/icon-right.png";
import IconD from "../images/Accordion/icon-down.png";


const Accordion = ({items}) => {
    const [activeIndex,setActiveIndex] = useState(null);


    const onTitleClick = (index) => {
       setActiveIndex(index);  
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active} text-gray-200 flex items-center text-2xl font-medium hover:text-indigo-500`} onClick={ () => onTitleClick(index)}>
                    <i className="pr-2">
                       <img src={IconD} />
                    </i>
                    {item.title}
                </div>
                <div className={`content ${active} text-gray-400 flex items-strech px-6 text-xl pb-6`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );

    });


    return <div className>{renderedItems}</div>    
};

export default Accordion;


