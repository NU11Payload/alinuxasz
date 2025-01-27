import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="terminal-window">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-green-500 text-2xl mb-8">Contact Information</h1>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="mr-4 text-green-500" />
              <div>
                <h2 className="text-green-500">Email</h2>
                <p className="text-gray-300">alinuxa@alinuxa.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-4 text-green-500" />
              <div>
                <h2 className="text-h2">Phone</h2>
                <p className="text-body">+1 877-822-8746</p>
              </div>
            </div>

            <div className="mt-8 p-4 border border-green-500 rounded">
              <h1 className="text-warn">NOTE: THIS WEBSITE IS STILL UNDER DEVELOPMENT</h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
