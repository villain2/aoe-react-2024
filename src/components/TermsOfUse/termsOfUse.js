import React from 'react'
import './termsOfUse.scss'

export default function termsOfUse() {
    const currentYear = new Date().getFullYear();
  return (
    <div className='content'>
        <div className='termsofuse-container'>
            <h1>Terms of Use for AOE Studios</h1>
            <p>Effective Date: 11/30/2024</p>
            <p>Welcome to the AOE Studios website ("Website"), owned and operated by AOE Studios ("we", "us", or "our"). By accessing or using this Website, you agree to comply with and be bound by the following terms and conditions ("Terms of Use"). Please read these Terms of Use carefully before using our Website. If you do not agree with these Terms of Use, you must not access or use the Website.</p>

            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>
                By using the Website, you agree to these Terms of Use and our Privacy Policy. We reserve the right to update or modify these Terms of Use at any time, without prior notice. All changes will be posted on this page, and the effective date will be updated. Your continued use of the Website after any changes will signify your acceptance of those changes.
                </p> 
            </section>

            <section>
                <h2>2. Use of the Website</h2>
                <ul>
                    <li><strong>Eligibility</strong>: You must be at least 18 years of age or have the consent of a parent or guardian to access and use the Website.</li>
                    <li><strong>License</strong>: We grant you a non-exclusive, non-transferable, limited license to use the Website for personal, non-commercial purposes. You may not modify, distribute, or reproduce any content from the Website unless authorized by us.</li>
                    <li><strong>Prohibited Activities</strong>: You agree not to use the Website for any unlawful purpose or to engage in any activity that could harm or disrupt the Website, including but not limited to:
                        <ul>
                            <li>Uploading or transmitting harmful code or viruses.</li>
                            <li>Engaging in fraudulent activity.</li>
                            <li>Harvesting or scraping user data without consent.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h3>3. User Accounts</h3>
                <p>In some cases, users may be required to create an account to access certain features of the Website, such as making purchases or accessing content. You agree to:</p>
                
                <ul>
                    <li>Provide accurate, current, and complete information when creating your account.</li>
                    <li>Maintain the confidentiality of your account information and password.</li>
                    <li>Notify us immediately of any unauthorized use of your account.</li>
                </ul>

                <p>You are responsible for all activities that occur under your account, even if those activities are conducted by others.</p>
            </section>

            <section>
                <h3>4. Payment and Purchases</h3>
                <p>If you purchase products or services through the Website, you agree to provide valid payment information and pay all applicable charges, including taxes and fees. We reserve the right to modify prices, cancel orders, or refuse service at our discretion.</p>
                <p>All digital products are sold "as-is" and are non-refundable unless otherwise specified. After a successful purchase, users will receive access to the digital content, which will be available for download or access as stated.</p>
                
            </section>

            <section>
                <h3>5. Content and Intellectual Property</h3>
                <ul>
                    <li><strong>Ownership</strong>: All content on the Website, including but not limited to text, images, videos, graphics, logos, trademarks, and software, is owned by or licensed to AOE Studios and is protected by intellectual property laws.</li>
                    <li><strong>User Content</strong>: If you submit content to the Website (e.g., reviews, comments, etc.), you grant us a worldwide, royalty-free, non-exclusive license to use, modify, and distribute that content.</li>
                    <li><strong>Copyright Infringement</strong>: We respect the intellectual property rights of others. If you believe your copyrighted work has been used without permission, please contact us at <a href="mailto:contact@aoestudios.com">contact@aoestudios.com</a>, and we will take appropriate action.</li>
                </ul>
            </section>

            <section>
                <h3>6. Privacy</h3>
                <p>Your use of the Website is also governed by our Privacy Policy, which can be found at [link to Privacy Policy]. By using the Website, you consent to the collection and use of your personal information as described in the Privacy Policy.</p>
            </section>

            <section>
                <h3>7. Third-Party Links and Services</h3>
                <p>We reserve the right to suspend or terminate your access to the Website at any time and for any reason, including but not limited to violation of these Terms of Use or any unlawful conduct.</p>
            </section>

            <section>
                <h3>8. Termination of Use</h3>
                <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can take appropriate action to delete such data.</p>
            </section>

            <section>
                <h3>9. Disclaimers and Limitation of Liability</h3>
                <ul>
                    <li><strong>No Warranty</strong>: The Website and its content are provided "as-is" and "as available" without any warranties, express or implied. We do not guarantee that the Website will be free from errors, interruptions, or viruses.</li>
                    <li><strong>Limitation of Liability</strong>: To the fullest extent permitted by law, AOE Studios will not be liable for any damages arising out of or in connection with your use of the Website, including but not limited to loss of data, profits, or business interruption.</li>
                </ul>
            </section>

            <section>
                <h3>10. Indemnification</h3>
                <p>You agree to indemnify and hold harmless AOE Studios, its officers, employees, agents, and affiliates from any claims, losses, liabilities, damages, and expenses (including legal fees) arising out of or in connection with your use of the Website or your violation of these Terms of Use.</p>
            </section>

            <section>
                <h3>11. Governing Law</h3>
                <p>These Terms of Use are governed by and construed in accordance with the laws of the state or country in which AOE Studios operates. Any disputes relating to these Terms of Use will be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>
            </section>

            <section>
                <h3>12. Contact Us</h3>
                <p>If you have any questions or concerns about these Terms of Use or need further information, please contact us at:</p>
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
