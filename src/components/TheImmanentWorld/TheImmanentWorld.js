import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet';
import './TheImmanentWorld.scss'


export default function TheImmanentWorld() {
  // Scroll to the section on component load if the hash exists in the URL
  useEffect(() => {
    // Listen for changes in the hash in the URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scroll to the element with the corresponding id
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this effect runs once after the component mounts
  
  return (
    <div className="tiw-container">
      <Helmet>
        <title>Clive Barker - Author of The Immanent World horror short story series.</title>
        <meta name="description" content="Learn more about author Clive Reznor, writer of the horror anthology series The Immanent World" />
        <meta name="keywords" content="clive reznor, the immanent world, author clive reznor, scary books, horror short stories, horror anthology, ghosts, paranormal,monsters, like black mirror, like twilight zone" />
      </Helmet>
      {/* Cluichi */}
    <section className="tiw-section" id="cluichi">
      <div className="left-half">
        <div className="content">
          <h1>Cluichi</h1>
          <h3>Book 1</h3>
          <p>
          <strong>Clive Reznor's</strong> newest horror anthology book will test your limits. 
          Told in <span className='red'>six short stories</span> ranging from gothic horror to social commentary 
          to dark comedy, <strong><em>The Immanent World: Cluichi - A Horror Anthology Series</em></strong>&nbsp; 
          is a thrill ride through the darkest hidden corners of the human mind.
          </p>

          
          <div className="d-grid gap-2">
            <button className='btn btn-danger'
              onClick={() => window.open("https://amzn.to/2L9dCWy", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://itunes.apple.com/us/book/the-immanent-world-cluichi-a-horror-anthology-series/id1441988800", "_blank")}>
                iTunes
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.barnesandnoble.com/w/the-immanent-world-clive-reznor/1129850505?ean=9781987009132", "_blank")}>
                Barnes &amp; Noble
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://play.google.com/store/books/details/Clive_Reznor_The_Immanent_World_Cluichi_A_Horror_A?id=NK54DwAAQBAJ", "_blank")}>
                Google Books
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.kobo.com/us/en/ebook/the-immanent-world-cluichi-a-horror-anthology-series", "_blank")}>
                Kobo
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.smashwords.com/books/view/906142", "_blank")}>
                Smashwords
            </button>
          </div>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/tiw-book-1-standing.png" alt="The Immanent World: Cluichi" />
      </div>
    </section>

    
      {/* 404 */}
    <section className="tiw-section" id="four-zero-four">
      <div className="left-half">
        <div className="content">
          <h1>404</h1>
          <h3>Book 2</h3>
          <p>
          <strong>"It's like Black Mirror with a Paranormal edge." </strong>
          <br />It's the fear we all have using the internet: 
          <br />Who is watching? 
          What have I left out there? 
          <br />David Clegg ignored that fear, 
          posted his musings on the <strong>Dark Web</strong>, and paid the price. 
          When a mysterious hacker hijacks his computer, 
          Clegg is shown a series of real-time videos, 
          each one a story of mankind's dark dealings with technology and the paranormal.

          </p>

          
          <div className="d-grid gap-2">
            <button className='btn btn-danger'
              onClick={() => window.open("https://amzn.to/2CHvnu4", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://itunes.apple.com/us/book/the-immanent-world-404-a-horror-anthology-series/id1440854700", "_blank")}>
                iTunes
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.barnesandnoble.com/w/the-immanent-world-clive-reznor/1129786552?ean=2940161601747", "_blank")}>
                Barnes &amp; Noble
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://play.google.com/store/books/details/Clive_Reznor_The_Immanent_World_404_A_Horror_Antho?id=HTV0DwAAQBAJ", "_blank")}>
                Google Books
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.kobo.com/us/en/ebook/the-immanent-world-404-a-horror-anthology-series", "_blank")}>
                Kobo
            </button>

            <button className='btn btn-danger'
              onClick={() => window.open("https://www.smashwords.com/books/view/902764", "_blank")}>
                Smashwords
            </button>
          </div>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/tiw-book-2-standing.png" alt="The Immanent World: Cluichi" />
      </div>
    </section>

    { /* Box Set */}
    {/*
    <section className="kanacold-section full-screen">
      <div className="content-container">
        <div className="panel left-panel">
          <img src="./img/book-thumbnails/boxset1-cropped.png" alt="Kana Cold: Case of the Shinigami" />
        </div>
        <div className="panel right-panel">
          <p>
            <strong>Get the Boxset and Save!</strong><br />
            The first three novels and the prequel novella of the Kana Cold Paranormal Adventure series.<br /> <span className="red">A 30% discount</span>!
            <br /><br />
            <button className='btn btn-primary'
            onClick={() => window.open("https://amzn.to/3FmZ5BN", "_blank")}>
              Get Your Copy Now!
            </button>
          </p>
        </div>
      </div>
    </section>
    */}
  </div>
  )
}
