import React, { useState, useEffect } from 'react';

const DISCLAIMER_ACCEPTED_KEY = 'disclaimerAccepted';

const DisclaimerModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the disclaimer has already been accepted
    const accepted = localStorage.getItem(DISCLAIMER_ACCEPTED_KEY);
    if (!accepted) {
      // Delay showing the modal slightly to allow the page to render
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 500ms delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(DISCLAIMER_ACCEPTED_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 md:p-8 transform transition-all scale-100 opacity-100">
        <h2 className="text-2xl font-semibold font-serif text-law-900 mb-4">
          Disclaimer
        </h2>
        <div className="text-law-700 space-y-4 mb-6 max-h-[60vh] overflow-y-auto pr-2">
          <p>
          Current rules of the Bar Council of India impose restrictions on maintaining a webpage and do not permit lawyers to provide information concerning their areas of
          practice. Chaudhary & Co. is, therefore, constrained from providing any further information on this web page.
          </p>
        <p>
          The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on 'I AGREE', the user acknowledges that:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>The user wishes to gain more information about Chaudhary & Co., its practice areas and its attorneys for his/her own information and use.</li>
          <li>None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.</li>
          <li>Chaudhary & Co., is not liable for any consequence of any action taken by the user relying on material/information provided under this website.</li>
        </ul>
        <p className="mt-4">
          In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
        </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-md bg-law-800 text-white font-medium transition-all duration-300 hover:bg-law-700 law-btn-hover"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;