import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
        toast.error('Please fill out all required fields.');
        return;
    }
    // Here you would typically send the data to a server
    console.log({ name, email, company, phone, message });
    toast.success('Your request has been submitted successfully!');
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        <div className="text-center md:text-left">
          <header>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Turn Your <span className="text-blue-600">Knowledge</span> into <span className="text-blue-600">Income</span>.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              You have the expertise. We have the strategy. Let's build your digital empire and monetize your knowledge, together.
            </p>
          </header>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Get Started for Free</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name (Optional)</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your Company Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+250 788 123 456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">Tell Us About Your Goals</Label>
              <Textarea
                id="message"
                placeholder="Describe your area of expertise and what you want to achieve..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 min-h-[100px]"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
              Unlock Your Potential
            </Button>
          </form>
        </div>
      </div>
       <footer className="mt-16 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Stepin. All rights reserved.</p>
          <p className="text-sm mt-1">Inspired by the innovation of Rwanda.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
