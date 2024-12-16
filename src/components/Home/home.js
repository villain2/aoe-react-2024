import React from 'react'
import { Helmet } from 'react-helmet'
import './home.scss'; // Import the Sass file for custom styles

export default function home({
  setModalShow
}) {
  return (
    <div className="home-container">

    <Helmet>
      <title>AOE Studios - Home of Wonderfully Weird Fiction</title>
      <meta name="description" content="Welcome to AOE Studios, the home of Wonderfully Weird fiction from authors KC Hunter and Clive Reznor." />
      <meta name="keywords" content="kana cold, the kana cold series, kc hunter, author kc hunter, kc hunter baltimore, clive reznor, the immanent world, the immanent world 404, horror anthology, wonderfully weird, urban fantasy, paranormal adventure, paranormal fiction, young adult fiction, metaphysical, shinigami, japanese female, asian female hero, asian female heroine, ghosts, monsters, anthology, like black mirror, like twilight zone" />
      <meta name="author" content="AOE Studios" />
      <meta name="canonical" content="https://www.aoestudios.com/" />
    </Helmet>

      {/* Background */}
      <div className="background">
        <video className="background-video" autoPlay loop muted>
          <source src="https://aoevideos.s3.us-east-1.amazonaws.com/home-page-video-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content (or other content that goes on Home page) */}
      <section className="home_page_tag">
          <p><i>"Humanity's greatest gift is its unbridled imagination..."</i></p>
          <p>Stories of adventure, thrills, love, and horror.<br />
          Welcome to the <span className='highlight_red'>Wonderfully Weird</span>.</p>

          <button className="btn btn-primary" onClick={() => setModalShow(true)}>Get Your Free Gift!</button>
      </section>
    </div>
  )
}
