import React from 'react';

const Instruction = ({ title, steps }) => {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </section>
  );
};

export default Instruction;
