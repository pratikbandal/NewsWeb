import React, {useState, useEffect} from 'react'
import Section from './Section'
import Article from './Article'
import Nav from './Nav'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Health from './Health'
import Technology from './Technology'
import Entertainment from './Entertainment'
import Sports from './Sports'
import Science from './Science'
import Search from './Search'
import Covidtracker from './Covidtracker'
import Feedback from './Feedback'
import Footer from './Footer'
import alanBtn from '@alan-ai/alan-sdk-web';
import { NewsCards, Modal } from './components'
import wordsToNumbers from 'words-to-numbers';
import PoliticsIndia from './PoliticsIndia'

function App() {

    return(
            <Router>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path = '/' exact component= {Homepage}/>
                        <Route path= '/Health' component= {Health}/>
                        <Route path = '/Technology' component= {Technology}/>
                        <Route path = '/Entertainment' component= {Entertainment}/>
                        <Route path = '/Sports' component= {Sports}/>
                        <Route path = '/Science' component= {Science}/>
                        <Route path = '/Search' component= {Search}/>
                        <Route path = '/Covidtracker' component = {Covidtracker}/>
                        <Route path = '/Feedback' component = {Feedback}/>
                        <Route path = '/PoliticsIndia' component = {PoliticsIndia}/>
                    </Switch>
                </div>
            </Router>
    )
}


function Homepage() {
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        alanBtn({
          key: 'fdd3a6bc6fd20351ac1c6394056a38652e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({ command, articles, number }) => {
            if (command === 'newHeadlines') {
                setNewsArticles(articles)
                setActiveArticle(-1);
            } else if (command === 'instructions') {
              setIsOpen(true);
            } else if (command === 'highlight') {
              setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === 'open') {
              const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
              const article = articles[parsedNumber - 1];
    
              if (parsedNumber > 20) {
                alanBtn().playText('Please try that again...');
              } else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
              } else {
                alanBtn().playText('Please try that again...');
              }
            }
          },
        });
    }, []);

    if(newsArticles.length) {
        return (
            <div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        )
    }
    return (
    <div>
        <Section/>
        <Article/>
        <Footer/>
    </div>
    )
}

export default App