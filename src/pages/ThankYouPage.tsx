import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your request has been received. We're excited to learn about your goals and will be in touch within 24 hours to schedule a discovery call.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base py-3 px-8 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
            Back to Home
          </Button>
        </Link>
      </div>
       <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Stepin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;
