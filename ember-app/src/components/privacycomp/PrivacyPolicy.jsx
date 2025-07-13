import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#fdfcdc] px-4 py-12 md:px-16 text-gray-800 ">
      <div className="max-w-5xl mx-auto bg-[#fdfcdc]  rounded-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-center text-[#0081A7]">Privacy Policy</h1>
        <p className="text-center text-gray-600 text-sm">
          Last Updated: <span className="font-medium">July 13, 2025</span>
        </p>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Introduction</h2>
          <p>
            At <strong>EMBER</strong>, we understand that your mental health journey is personal and private. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our platform. By accessing or using EMBER, you agree to the terms of this policy. We are committed to maintaining your trust by handling your data with transparency and care.
          </p>
        </section>

        {/* Data We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Information We Collect</h2>
          <p>
            We collect information that helps us personalize your experience and improve the platform. This includes:
          </p>
          <p>
            <strong>Personal Information:</strong> When you sign up or interact with our platform, we may collect your name, email address, and login credentials. These are used strictly for authentication and account management.
          </p>
          <p>
            <strong>Usage Data:</strong> We collect data about your activity on EMBER, including your interactions with our AI, feedback you provide, and time spent using various features. This helps us improve your experience and tailor support to your needs.
          </p>
          <p>
            <strong>Device & Log Data:</strong> Information such as your IP address, browser type, device type, and referral links are automatically collected through standard web protocols and used for system administration, troubleshooting, and security.
          </p>
        </section>

        {/* Use of Information */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">How We Use Your Information</h2>
          <p>
            Your information is used to deliver a meaningful and secure experience on EMBER. We use it to create personalized interactions, improve the performance of our mental health tools, send important account updates, and protect against fraud. We may analyze your interactions anonymously to identify common concerns and improve the quality of support our AI provides.
          </p>
        </section>

        {/* Consent */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Your Consent</h2>
          <p>
            By using our services, you give EMBER permission to collect and process your information in accordance with this policy. If you do not agree with our terms, you should discontinue using the platform. You can withdraw your consent at any time by deleting your account or contacting our support team.
          </p>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Third-Party Services</h2>
          <p>
            We may partner with third-party providers like OpenAI (for generating responses), analytics tools, and authentication services to enhance the EMBER experience. These providers are only allowed to use your data to perform specific functions on our behalf and are contractually bound to protect your information. We do not sell your personal data under any circumstances.
          </p>
        </section>

        {/* Children’s Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Children’s Privacy</h2>
          <p>
            EMBER is not designed for use by children under the age of 13. We do not knowingly collect data from individuals under this age. If we discover that a child has provided us with personal information, we will promptly delete it. Parents or guardians who believe their child has used our platform without consent should contact us immediately.
          </p>
        </section>

        {/* Security Measures */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">How We Protect Your Data</h2>
          <p>
            We implement strong technical and organizational security measures to protect your information from unauthorized access, loss, or misuse. This includes encryption, secure servers, firewall protection, and regular audits. Despite these efforts, no system can be 100% secure, so we also encourage you to safeguard your account credentials.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Data Retention</h2>
          <p>
            We retain your personal data for as long as your account remains active or as needed to provide you services. You may request deletion of your data at any time. We also retain certain data where required by law or for legitimate business purposes such as fraud prevention or dispute resolution.
          </p>
        </section>

        {/* Cookies and Tracking */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Cookies and Tracking Technologies</h2>
          <p>
            Our platform uses cookies and similar technologies to enhance user experience, remember preferences, and analyze traffic patterns. You can disable cookies in your browser settings, but this may affect the functionality of some features on the site.
          </p>
        </section>

        {/* External Links */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">External Links</h2>
          <p>
            EMBER may contain links to third-party websites or resources. We do not control the privacy practices of these sites and encourage you to review their policies before sharing any personal data. We are not responsible for their actions or content.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Your Rights</h2>
          <p>
            You have the right to access, update, correct, or delete your personal information at any time. Depending on your location, you may also have rights related to data portability and objection to processing. Contact us directly to exercise these rights.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Policy Updates</h2>
          <p>
            We may occasionally update this Privacy Policy to reflect new features, changes in law, or feedback from users. When significant changes are made, we will notify you via email or in-app alerts. Please review this page periodically to stay informed.
          </p>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-2">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us at:
          </p>
          <p className="text-[#0081A7] font-medium">support@emberapp.com</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
