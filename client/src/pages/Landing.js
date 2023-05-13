// import {useState, useEffect} from 'react';
import axios from 'axios';

function Landing(props) {

    return (
        <main>
            <section className="header">
                <h1>Ryan Floersch</h1>
                <h2>Software Developer</h2>
            </section>

            <section className='hero'>
                <h3>Hello!</h3>
                <p>My name is Ryan Floersch, I'm from Princeton NJ and studdied Software development at DeVry University. </p>
                <span></span>
                <p>I'm currently completing a web development bootcamp. I am always interested in learnign more and I'm excited to apply that knowledge within a professional environment.</p>
            </section>

            <section className='portfolio'>
                <div className='portfolio-container'>
                    <div className='portfolio-item'>
                        <a href="https://github.com/RyanmFloersch/BowlCrawl" target='_blank' rel='noreferrer'>
                            <img src="/BowlCrawlScreenshot.png" alt="image of bowl crawl website" />
                        </a>
                        <p>Test</p>
                    </div>
                </div>
                <div className='portfolio-container'>
                    <div className='portfolio-item'>
                    <p>Test</p>

                    <a href="https://github.com/RyanmFloersch/BowlCrawl" target='_blank' rel='noreferrer'>
                        <img src="/BowlCrawlScreenshot.png" alt="image of bowl crawl website" />
                    </a>
                    </div>
                </div>
            </section>

        </main>
    )

}

export default Landing; 