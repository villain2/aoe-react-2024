import React from 'react'
import { Helmet } from 'react-helmet'
import './About.scss'

export default function About() {
  return (
    <div className="about-container">

    <Helmet>
      <title>About AOE Studios Urban Fantasy, Horror, Paranormal Fiction</title>
      <meta name="description" content="We celebrate the Wonderfully Weird. AOE Studios presents various stories that take new and interesting twists on existing fiction to make something new." />
      <meta name="keywords" content="kana cold, the kana cold series, kc hunter, author kc hunter, kc hunter baltimore, clive reznor, the immanent world, the immanent world 404, horror anthology, wonderfully weird, urban fantasy, paranormal adventure, paranormal fiction, young adult fiction, metaphysical, shinigami, japanese female, asian female hero, asian female heroine, ghosts, monsters, anthology, like black mirror, like twilight zone" />
      <meta name="author" content="AOE Studios" />
      <meta name="canonical" content="https://www.aoestudios.com/" />
    </Helmet>
      
      {/* Top Section - Explaining the Wonderfully Weird */}
      <section className="about-section full-screen">
        <div className="content-container">
          
          <section>
            <h1>The <span className="red">Wonderfully</span> Weird</h1>
            <p>Merging the world of the bizarre with the normal, AOE Studios tells stories that stretch the boundaries of <span className="strong">imaginative fiction.</span></p>
          </section>
        </div>
      </section>

      
      {/* Section 1 - Split screen with text and image */}
      <section className="about-section">
        <div className="left-half">
          <div className="content">
            <h1>She's Not Supposed To Be The Hero...</h1>
            <p>
              <strong>Kana Cold</strong> loves a good game of pool, a cold glass of rum, and her vintage Dodge Challenger.
              She also happens to love investigating <span className='red'>ghosts and demons</span>.
              While most of her cases have been hoaxes, one turned out to be dangerously real.
              What follows is an sprawling <em>urban fantasy</em> adventure that she could have never imagined.
            </p>
            <button className='btn btn-warning' onClick={() => window.open('/kana-cold', '_self')}>Learn More About The Series</button>
          </div>
        </div>
        <div className="right-half">
          <img src="./img/page_images/about-page-image-1.webp" alt="Kana Cold" />
        </div>
      </section>

      {/* Section 2 - Another full-screen section */}
      <section className="about-section">
        <div className="left-half white">
          <div className="content">
            <h2>A Sinister Twist on the Horror Anthology</h2>
            <p>
              Inspired by horror fiction like <em>Tales from the Crypt</em>, <em>Black Mirror</em>,
              <em>The Books of Blood</em>, and <em>The New Weird</em>, author Clive Reznor's ongoing series 
              of anthologies, <strong>The Immanent World</strong>, offers fans of the darker corners
              of human imagination a collection of interconnected short stories twisting what we know of humanity,
              society, technology, and the afterlife.
            </p>
            <button className='btn btn-warning' onClick={() => window.open('/immanent-world', '_self')}>More From Clive Reznor</button>
          </div>
        </div>
        <div className="right-half">
          <img src="./img/page_images/about-page-image-2.webp" alt="The Immanent World" />
        </div>
      </section>

      {/* Section 3 - Another full-screen section */}
      <section className="about-section full-screen">
        <div className="content-container">
          <div className="panel left-panel">
            <img src="./img/book-thumbnails/kc-book-0-standing.png" alt="Kana Cold: Case of the Shinigami" />
          </div>
          <div className="panel right-panel">
            <p>
              <strong>Free Prequel Novella</strong><br />
              Join our mailing list and get a free copy of the first book in the Kana Cold series: 
              "The Reaping of the Black Grimoires". Don't miss out on this special offer!
              <br /><br />
              <button className='btn btn-primary'
              onClick={() => window.open("https://BookHip.com/CPGCMK", "_blank")}>
                Get Your Free Copy!
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
