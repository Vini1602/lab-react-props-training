import React from 'react';

const Greetings = ({ lang, children }) => {
  const getGreeting = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello'; // Default to English if lang is not recognized
    }
  };

  const greeting = getGreeting(lang);

  return (
    <div>
      <p>{`${greeting}, ${children}`}</p>
    </div>
  );
};

export default Greetings;