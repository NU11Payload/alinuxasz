import { Shield, Zap, Code, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Command from '../components/Command';
import TypeWriter from '../components/TypeWriter';

export default function HomePage() {
  const HomeContent = () => {
    const navigate = useNavigate();
    
    const handleServicesClick = () => {
      navigate('/services');
    };

    return (
      <>
        <Navbar />
        <div className="terminal-window">
          <TypeWriter text="corp@Alinuxa.com. Alinuxa LLC Cybersecurity, Threat Intelligence, and Software Development. All rights reserved" />
          <div className="mt-8">
            <Command 
              command="./display_services.sh" 
              output={
                <div className="home-grid">
                  <div className="home-item">
                    <span 
                      className="home-link" 
                      onClick={handleServicesClick} 
                      role="button" 
                      tabIndex={0}
                    >
                   <Shield className="mr-2" />Services offered:</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="mr-2" />
                    <span>Security Advisory services: Compliance and Risk Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="mr-2" />
                    <span>Software Development: Front end and Back end web development</span>
                  </div>
                  <div className="flex items-center">
                    <Terminal className="mr-2" />
                    <span>VPS, Web and Dedicated Server Hardening service & Hositings</span>
                  </div>
                </div>
              }
            />
          </div>
          <div className="mt-8">
            <Command 
              command="cat about_us.txt" 
              output="Alinuxa LLC is a cutting-edge cybersecurity MSP providing Software Development And Server Hosting VPS and Web, dedicated to protecting your digital assets. Our innovative methods combines advanced threat intelligence with innovative software development to deliver comprehensive security solutions."
            />
          </div>
        </div>
      </>
    );
  };

  return <HomeContent />;
}
