import React from 'react'
import './privacyPolicy.scss'

export default function privacyPolicy() {
    const currentYear = new Date().getFullYear();

  return (
    <div className='content'>
        <div className='privacy-container'>
            <h1>Privacy Policy for AOE Studios</h1>
            <p>Effective Date: 11/30/2024</p>
            <p>At AOE Studios, we value the privacy of our users and are committed to safeguarding any personal information you provide to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit and interact with our website.</p>

            <section>
                <h2>1. Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>When you submit a form, sign up for our mailing list, or contact us directly, we may collect personal information such as:</p>
                <ul>
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Social Media Handles (if provided)</li>
                    <li>Other Contact Information you provice</li>
                </ul>

                <h3>Non-Personal Information</h3>
                <p>We may also collect non-personal information automatically when you visit our website, including:</p>
                <ul>
                    <li>IP Address</li>
                    <li>Browser Type</li>
                    <li>Device Information</li>
                    <li>Pages Visited and the time spent on those pages</li>
                    <li>Referring Websites</li>
                </ul>
                <p>This information helps us analyze website usage, troubleshoot issues, and improve our services.</p>
            </section>

            <section>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect in the following ways:</p>
                <ul>
                    <li>To provide you with updates, newsletters, or marketing materials related to AOE Studios and our projects (with your consent).</li>
                    <li>To respond to inquiries, support requests, or feedback submitted through our contact forms.</li>
                    <li>To improve our website’s functionality, user experience, and content based on analytics.</li>
                    <li>To ensure compliance with legal obligations or to protect our rights.</li>
                </ul>
            </section>

            <section>
                <h3>3. Sharing Your Information</h3>
                <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following limited circumstances:</p>
                <ul>
                    <li><strong>Service Providers: </strong> We may share your data with trusted third-party service providers who assist us in operating our website and providing services to you, such as email marketing services.</li>
                    <li><strong>Legal Requirements: </strong> We may disclose your information if required by law or to protect the rights, property, or safety of AOE Studios, its users, or others.</li>
                </ul>
            </section>

            <section>
                <h3>4. Cookies and Tracking Technologies</h3>
                <p>We use cookies and other tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences, analyze website traffic, and improve our services.</p>
                <p>You can control cookie settings through your browser, including blocking or deleting cookies, but please note that this may affect your ability to use certain features of our website.</p>
            </section>

            <section>
                <h3>5. Data Security</h3>
                <p>We implement reasonable security measures to protect the personal information we collect. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
                <h3>6. Your Rights</h3>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                    <li><strong>Access:</strong> You have the right to request access to the personal data we hold about you.</li>
                    <li><strong>Correction: </strong> You have the right to request correction of inaccurate or incomplete data.</li>
                    <li><strong>Deletion: </strong> You can request the deletion of your personal data, subject to certain exceptions.</li>
                    <li><strong>Opt-out of Marketing: </strong> You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly.</li>
                </ul>
            </section>

            <section>
                <h3>7. Third-Party Links</h3>
                <p>Our website may contain links to third-party websites. These third parties have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of those websites before providing them with any personal information.</p>
            </section>

            <section>
                <h3>8. Children's Privacy</h3>
                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can take appropriate action to delete such data.</p>
            </section>

            <section>
                <h3>9. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            </section>

            <section>
                <h3>10. Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at:</p>
                <dl>
                    <dt>AOE Studios</dt>
                    <dd>Email: <a href="mailto:contact@aoestudios.com">contact@aoestudios.com</a></dd>
                </dl>
            </section>

            <p className='copyright'>&copy; {currentYear} AOE Studios. All Rights Reserved.</p>
        </div>
        
    </div>
  )
}
