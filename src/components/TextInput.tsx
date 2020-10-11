import React from 'react';

const TextInput: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="button" value="Focus" onClick={handleClick} />
    </div>
  );
};

export default TextInput;
