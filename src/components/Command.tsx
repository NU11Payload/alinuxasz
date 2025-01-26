import React from 'react';

interface CommandProps {
  command: string;
  output: React.ReactNode;
}

const Command = ({ command, output }: CommandProps) => (
  <div>
    <div className="command-line">
      <span className="prompt">Security@alinuxa:~$</span>
      <span className="command">{command}</span>
    </div>
    <div className="output">{output}</div>
  </div>
);

export default Command;
