import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Code, Zap } from 'lucide-react';

const TypeWriter = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor"></span>
    </span>
  );
};

const Command = ({ command, output }: { command: string; output: string }) => (
  <div>
    <div className="command-line">
      <span className="prompt">alana@fedora:~$</span>
      <span className="command">{command}</span>
    </div>
    <div className="output">{output}</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="terminal-window">
        <TypeWriter text="corp@Alinuxa.com. Alinuxa LLC Cybersecurity, Threat Intelligence, and Software Development. All rights reserved" />
        
        <div className="mt-8">
          <Command 
            command="./display_services.sh" 
            output={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center">
                  <Shield className="mr-2" />
                  <span>Cybersecurity Solutions</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-2" />
                  <span>Threat Intelligence</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-2" />
                  <span>Software Development</span>
                </div>
                <div className="flex items-center">
                  <Terminal className="mr-2" />
                  <span>Penetration Testing</span>
                </div>
              </div>
            }
          />
        </div>

        <div className="mt-8">
          <Command 
            command="cat about_us.txt" 
            output="Alinuxa LLC is a cutting-edge cybersecurity firm dedicated to protecting your digital assets. Our team of experts combines advanced threat intelligence with innovative software development to deliver comprehensive security solutions."
          />
        </div>

        <div className="mt-8">
          <Command 
            command="./contact_us.sh" 
            output={
              <div>
                <p>Email: info@alinuxa.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Cyber Street, Tech City, TC 12345</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;