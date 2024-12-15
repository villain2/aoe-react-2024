import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, addDoc, collection } from './../../firebase';
import './Contact.scss';

export default function Contact() {
  const [socialMedia, setSocialMedia] = useState('');
  const [otherPlatform, setOtherPlatform] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const socialHandle = e.target.socialMedia.value;

    // Create a new document in Firestore
    try {
      setLoading(true);
      await addDoc(collection(db, "contactForms"), {
        name,
        email,
        socialMedia,
        otherPlatform,
        socialHandle,
        timestamp: new Date(),
      });

      // Set confirmation message
      setConfirmationMessage('Thank you for reaching out! Your message has been sent successfully.');
    } catch (error) {
      console.error("Error adding document: ", error);
      setConfirmationMessage('There was an issue submitting your form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="left-half">
          <div className="content">
            <h1>Contact</h1>

            {/* Start form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" name="email" required placeholder="Email address" />
              </div>

              <div className="form-group">
                <label htmlFor="socialMedia">Social Media</label>
                <select
                  id="socialMedia"
                  name="socialMedia"
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                >
                  <option value="">Select a platform</option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="instagram">Instagram</option>
                  <option value="snapchat">Snapchat</option>
                  <option value="tiktok">TikTok</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {socialMedia === 'other' && (
                <div className="form-group">
                  <label htmlFor="otherPlatform">Other Platform</label>
                  <input
                    type="text"
                    id="otherPlatform"
                    name="otherPlatform"
                    value={otherPlatform}
                    onChange={(e) => setOtherPlatform(e.target.value)}
                    placeholder="Enter a platform name"
                  />
                  <input
                    type="text"
                    id="socialHandle"
                    name="socialHandle"
                    placeholder="Your handle (e.g., @username)"
                  />
                </div>
              )}

              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {/* End form */}

            {/* Confirmation message */}
            {confirmationMessage && (
              <div className="confirmation-message">
                <p>{confirmationMessage}</p>
              </div>
            )}
          </div>
        </div>

        <div className="right-half">
          <section id="company-contacts" className="company-contacts">
            Email us directly:<br />
            <a href="mailto:contact@aoestudios.com">contact@aoestudios.com</a>
          </section>

          <section id="legal" className="legal">
            <dl>
              <dt><Link to="/privacy-policy">Privacy Policy</Link></dt>
              <dt><Link to="/terms-of-use">Terms of Use</Link></dt>
            </dl>
          </section>
        </div>
      </section>
    </div>
  );
}
