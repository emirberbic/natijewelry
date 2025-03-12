import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-gray-100 py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Contact Us</h1>
          <p className="text-secondary-light max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, comments, or inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
            <Phone size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-serif font-medium mb-2">Call Us</h3>
            <p className="text-secondary-light mb-3">We're available Monday-Friday</p>
            <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
            <Mail size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-serif font-medium mb-2">Email Us</h3>
            <p className="text-secondary-light mb-3">We'll respond as soon as possible</p>
            <a href="mailto:info@natijewelry.com" className="text-primary font-medium hover:underline">
              info@natijewelry.com
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 flex flex-col items-center text-center">
            <MapPin size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-serif font-medium mb-2">Visit Us</h3>
            <p className="text-secondary-light mb-3">Come see our collection in person</p>
            <address className="text-primary font-medium not-italic">
              123 Jewelry Lane<br />
              New York, NY 10001
            </address>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-medium mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-medium mb-6">
              Store Hours
            </h2>
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Clock size={20} className="text-primary mr-2" />
                <span className="font-medium">Opening Hours</span>
              </div>
              <div className="border-t border-b border-gray-200">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span>Sunday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-medium mb-6">
              Our Location
            </h2>
            <div className="bg-gray-200 h-[300px] flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">
            Customer Service
          </h2>
          <p className="text-secondary-light mb-6 max-w-2xl mx-auto">
            Have questions about an order or need assistance? Our customer service team is here to help with returns, repairs, sizing, and any other inquiries you might have.
          </p>
          <a href="mailto:support@natijewelry.com" className="btn-primary">
            Contact Customer Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;