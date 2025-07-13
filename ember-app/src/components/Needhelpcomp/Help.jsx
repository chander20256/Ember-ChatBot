import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-[#fdfcdc] px-4 py-12 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto bg-[#fdfcdc]  rounded-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-[#0081A7] mb-6 text-center">Need Help?</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Whether you're experiencing technical difficulties, account issues, or just need emotional support — we're here to help you in every way possible.
        </p>

        {/* Section 1: Account Help */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-3">🔐 Account Support</h2>
          <p className="mb-3">
            If you're having trouble logging into your account, make sure your credentials are entered correctly and that your caps lock is off. You can easily reset your password by clicking the <span className="text-[#0081A7] font-medium underline">“Forgot Password”</span> link on the login page.
          </p>
          <p className="mb-3">
            Want to update your profile details like your name, email, or password? Navigate to your profile settings where you’ll be able to manage your account securely.
          </p>
          <p className="mb-3">
            If you'd like to delete your account and remove all data associated with it, please send a request through our support email. Once verified, your data will be permanently deleted.
          </p>
        </section>

        {/* Section 2: Mental Health & Chatbot Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-3">💬 Mental Health Support</h2>
          <p className="mb-3">
            Our AI-powered chatbot is available 24/7 to help you talk through feelings like anxiety, loneliness, or stress. It offers a judgment-free space to express what you're going through and helps guide you with mindfulness prompts, affirmations, and journaling ideas.
          </p>
          <p className="mb-3">
            However, please note: <span className="text-red-600 font-medium">EMBER is not a replacement for licensed therapy</span>. If you’re facing a crisis, reach out to a mental health professional or call a local helpline immediately.
          </p>
        </section>

        {/* Section 3: Technical Support */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-3">🛠 Technical Help</h2>
          <p className="mb-3">
            Encountering bugs or broken pages? Try refreshing the browser or clearing your cache. Make sure your browser is updated to the latest version for the best experience on EMBER.
          </p>
          <p className="mb-3">
            If animations or chat features aren’t working, try switching to another browser or device. For ongoing issues, contact our support team with a screenshot and description of the problem.
          </p>
          <p className="mb-3">
            You can also report bugs directly using our in-app “Report Issue” button or by sending us an email.
          </p>
        </section>

        {/* Section 4: Contact & Feedback */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0081A7] mb-3">📞 Contact & Feedback</h2>
          <p className="mb-3">
            We’re always listening. If you have any questions, feedback, or concerns, reach out to us via email at <span className="text-[#0081A7] font-medium">support@emberapp.com</span>. Our team typically responds within 1–2 business days.
          </p>
          <p className="mb-3">
            For partnership or media inquiries, contact us at <span className="text-[#0081A7] font-medium">partners@emberapp.com</span>.
          </p>
        </section>

        {/* Final Note */}
        <div className="border-t pt-6 mt-8 text-sm text-gray-500 text-center">
          Thank you for trusting <span className="text-[#0081A7] font-semibold">EMBER</span>. You’re never alone — we’re always here to help you heal, grow, and thrive.
        </div>
      </div>
    </div>
  );
};

export default Help;
