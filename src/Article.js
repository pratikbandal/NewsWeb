import React from 'react'

class Article extends React.Component {
    render() {
        return (
            <article className="text-gray-700 body-font">
                <hr id= 'end'/>
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full resize" src="https://s02.sgp1.cdn.digitaloceanspaces.com/article/42656-rdyzhtkapn-1475398937.jpg"/>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">News Web</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-600"></p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4" style={{textAlign: "justify"}} >The way our government is handling Sushant Singh Rajput's death(suicide) and the 'media' is making every one of us believe that there could be multiple reasons behind his suicide. We all want justice for Sushant Singh Rajput but, don't let the social media drive us through their conclusion. We have our honorable court for justice, not the people who are sitting at their home and enjoying the drama. Meanwhile, a question struck in my mind that why such detailed investigation did not happened WHEN OUR BELOVED PM DIED ON FOREIGN SOIL? WAS THERE NO SCOPE OF INVESTIGATION? WHY WE REFUSED POST-MORTEM..? Unfortunately or consciously our government at that time could not investigate Lal Bahadur Shastri's death. But, after more than 50 years have passed, everyone of us wants the government to declassify all documents related to the death of the former prime minister.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
export default Article