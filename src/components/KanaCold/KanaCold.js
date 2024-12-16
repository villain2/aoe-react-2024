import React, {useEffect} from 'react'
import './KanaCold.scss'
import { ButtonGroup } from 'react-bootstrap'

export default function KanaCold() {
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
    <div className="kanacold-container">
      {/* Case of the Shinigami */}
    <section className="kanacold-section" id="case-of-the-shinigami">
      <div className="left-half">
        <div className="content">
          <h1>Case of the Shinigami</h1>
          <h3>Prequel</h3>
          <p>
          After dropping out of Harvard, <strong>Kana Cold</strong> started a business as a sarcastic, rum drinking, bar fighting paranormal investigator. 
          Most of her early cases were hoaxes, much to Kana's disappointment, until one case involving a little girl haunted by a powerful demon opens the door to the real <em>Paranormal Underground...</em> changing her life forever.
          </p>

          <button className='btn btn-primary book-btn'
            onClick={() => window.open("https://BookHip.com/CPGCMK", "_blank")}>
              Get Your Free Copy!
          </button>

          <button className='btn btn-warning book-btn'
            onClick={() => window.open("https://amzn.to/2VadAmp", "_blank")}>
              Download From Amazon
          </button>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/kc-book-0-standing.png" alt="Kana Cold: Case of the Shinigami" />
      </div>
    </section>

    
      {/* The Reaping of the Black Grimoires */}
      <section className="kanacold-section" id="the-reaping-of-the-black-grimoires">
      <div className="left-half">
        <div className="content">
          <h1>The Reaping of the Black Grimoires</h1>
          <h3>Book 1</h3>
          <p>
          Secret societies, death gods, and ancient spirits all want Kana dead or to use her skills for their own gain. 
          With the help of an Italian archeologist and playboy, Kana must find a way to keep the <span className='red'>Black Grimoires</span> from unleashing hell on Earth. 
          Can she outwit those who seek to destroy her and save the world from ultimate destruction?
          </p>

          <ButtonGroup>
            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2VjpPwI", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2VadAmp", "_blank")}>
                Paperback
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2VadAmp", "_blank")}>
                Audiobook
            </button>
          </ButtonGroup>
          
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/kc-book-1-standing.png" alt="Kana Cold: Case of the Shinigami" />
      </div>
    </section>

    
      {/* The Deception of Seraphim Asylum */}
      <section className="kanacold-section" id="the-deception-of-seraphim-asylum">
      <div className="left-half">
        <div className="content">
          <h1>The Deception of Seraphim Asylum</h1>
          <h3>Book 2</h3>
          <p>
          With her best friend AJ called away to his family—who are dealing with their own supernatural curse—Kana is forced to protect two refugees who wield a power simply known as <strong>"Art"</strong>, 
          contend with a visit from the FBI, and deal with the mystery of <span className="red">Seraphim Asylum</span>—the most dangerous haunted mental hospital in the Western world. 
          Behind it all is a secret figure from her past hoping to lead her and her friends to a ghastly end.
          </p>

          <ButtonGroup>
            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2VNtrXz", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2VNtrXz", "_blank")}>
                Paperback
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/3vvH3dw", "_blank")}>
                Audiobook
            </button>
          </ButtonGroup>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/kc-book-2-standing.png" alt="Kana Cold: Case of the Shinigami" />
      </div>
    </section>

    
    {/* Wrath of the Burning Gods */}
    <section className="kanacold-section" id="wrath-of-the-burning-gods">
      <div className="left-half">
        <div className="content">
          <h1>Wrath of the Burning Gods</h1>
          <h3>Book 3</h3>
          <p>
          During her latest case in the streets of Hell's Kitchen, 
          Kana comes across a familiar face who has tracked her down to help him find his 
          sister. This starts a chain of events leading to the <strong>Dismal Swamp</strong>—a massive 
          wetland on the Virginia/North Carolina border rumored to be swarming with spirits 
          of the past. It is also the supposed domain of a fearsome group of supernatural 
          entities known as <span className="red">The Burning Gods</span>. Kana's mysterious past, life-threatening 
          present, and uncertain future all collide in this new adventure with a shocking 
          ending that changes the series, and Kana, forever.
          </p>

          <ButtonGroup>
            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Paperback
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Audiobook
            </button>
          </ButtonGroup>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/kc-book-3-standing.png" alt="Kana Cold: Case of the Shinigami" />
      </div>
    </section>
    
    {/* Secrets on the Island of Hell */}
    <section className="kanacold-section" id="secrets-on-the-island-of-hell">
      <div className="left-half">
        <div className="content">
          <h1>Secrets on the Island of Hell</h1>
          <h3>Book 4</h3>
          <p>
          What starts out for <strong>Kana Cold</strong> as a means of escaping her guilt turns into another wild 
          adventure, this time on the ghostly remains of Japan's Hashima Island—also 
          known as <span className='red'>The Island of Hell</span>. Some old faces Kana never thought she'd see 
          again, and some new faces she hopes to never see again, turn a research 
          mission into something far more dangerous and even more personal.

          </p>

          <ButtonGroup>
            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Amazon Kindle
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Paperback
            </button>

            <button className='btn btn-primary'
              onClick={() => window.open("https://amzn.to/2UubkIw", "_blank")}>
                Audiobook
            </button>
          </ButtonGroup>
        </div>
      </div>
      <div className="right-half">
        <img src="./img/book-thumbnails/kc-book-4-standing-pages.png" alt="Kana Cold: Case of the Shinigami" />
      </div>
    </section>

    {/* The Starlight Child */}
    <section className="kanacold-section" id="the-starlight-child">
      <div className="left-half">
        <div className="content">
          <h1>The Starlight Child</h1>
          <h3>Book 5</h3>
          <p>
          <span className='red'>Coming Soon!</span>
          </p>
        </div>
      </div>
      <div className="right-half">
        <img className="full" src="./img/book-thumbnails/kc-starlight-image.jpg" alt="Kana Cold: The Stralight Child" />
      </div>
    </section>

    { /* Box Set */}
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
            onClick={() => window.open("https://amzn.to/3xVcJZr", "_blank")}>
              Get Your Copy Now!
            </button>
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}
