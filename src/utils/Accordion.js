import React, {useState} from "react";
import IconR from "../images/Accordion/icon-right.png";
import IconD from "../images/Accordion/icon-down.png";

const Accordion = () => {
    const accordionData = {
        title:'Обучающие уроки',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, temporibu'
    };

    const {title, content} = accordionData;

    return (
        <React.Fragment>
            <div className="accordion max-w-2xl my-8 mx-auto">
                <div className="accordion-item">
                    <div className="accordion-title text-gray-200 flex flex-row justify-between cursor-pointer">
                        <div>{title}</div>
                        <i><img src={IconR}/></i>
                    </div>
                    <div className="accordion-content text-gray-400">{content}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Accordion;



/*
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
*/

