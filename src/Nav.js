import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'



function Nav() {
    const [value,Setvalue] = useState()
    return (
        <header className="text-gray-700 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'><img alt='content' id= 'logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/GNOME_Web_logo--2018.svg/768px-GNOME_Web_logo--2018.svg.png'/></Link>
                    <Link id = 'name' to='/'><span className="ml-3 text-xl">NewsWeb</span></Link>
                
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" id= 'font'>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Health'>Health</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Technology'>Technology</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Entertainment'>Entertainment</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Sports'>Sports</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Science'>Science</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/Covidtracker'>Covid-19</Link>
                        <Link className = 'mr-5 hover:text-gray-900' to= '/PoliticsIndia'>Politics India</Link>
                </nav>
                <div className= 'search-box'>
                    <input className= 'search-txt'
                        type= 'text' 
                        name= 'searchbar'
                        onChange= {handleValue}
                        placeholder="Type to search"/>
                    <Link onClick={handleProps} className= "search-btn" to= {{pathname:'/Search', state: {value}}}>
                        <i className="fas fa-search"></i>
                    </Link>
                </div>
                <Link id= 'feedback' to= '/Feedback'><button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Feedback
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                </Link>
            </div> 
        </header>
    )
    function handleValue(e) {
        Setvalue(e.target.value)
        //console.log(value)
    }
    function handleProps() {
        //console.log(value)
        return <Search data = {value}/>
        
        
    }
}

export default Nav