import React, {useEffect} from "react";

const Navigation = (props) => {

    useEffect(() => {
        document.title = 'Lost and Sound ' + props.currentPageSelection;
    })

    return (
        <section className="d-flex align-items-end navBtnContainer">
        <ul className="d-flex flex-row justify-content-between">
                    {props.pages.map((page,i) => (
                        <li className="nav-item" key={i}>
                            <span 
                                className={`navBtn ${props.currentPageSelection === page && 'navBtnActivated'}`} 
                                onClick = { () => {
                                    props.setCurrentPageSelection(page)
                                }}
                            >{page}
                            </span>
                        </li>    
                    ))}
                </ul>
        </section>
    );
}

export default Navigation;