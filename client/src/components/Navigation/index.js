import React, {useEffect} from "react";
import Auth from '../../utils/auth';

const Navigation = (props) => {

    useEffect(() => {
        document.title = 'Lost and Sound ' + props.currentPageSelection;
    },[])

    if(Auth.loggedIn()) {
        let pageList = props.pages
        pageList.splice(0,3)
        console.log(pageList, 'pageList')
        return (
            <section className="">
            <ul className="flex-row">
                        {pageList.map((page,i) => (
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
        let pageList = props.pages
        pageList.splice(3,2);
        return (
            <section className="">
            <ul className="flex-row">
                        {pageList.map((page,i) => (
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