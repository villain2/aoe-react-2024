import React from 'react'
import './home.scss'; // Import the Sass file for custom styles

export default function home({
  setModalShow
}) {
  return (
    <div className="home-container">

      {/* Background */}
      <div className="background">
        <video className="background-video" autoPlay loop muted>
          <source src="/video/home-page-video-bg.mp4" type="video/mp4" />
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
