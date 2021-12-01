import React, {useEffect} from "react";
import Auth from '../../utils/auth';

const Navigation = (props) => {

    useEffect(() => {
        document.title = 'Lost and Sound ' + props.currentPageSelection;
    })

    if(Auth.loggedIn()) {
        return (
            <section className="">
            <ul className="flex-row">
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
                        <li>
                        <a href="/" onClick={() => Auth.logout()}> Logout </a>
                        </li>
                    </ul>
            </section>
        );
    } else {
        return (
            <section className="">
            <ul className="flex-row">
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
}

export default Navigation;