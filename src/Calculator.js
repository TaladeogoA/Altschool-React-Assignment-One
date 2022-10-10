import React, { useState } from 'react';
import './Calculator.css';

const buttonValues = [
  '.',
  'AC',
  'DEL',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '',
  '0',
  '',
  '=',
];

const signs = ['/', '*', '-', '+', '.'];

const Calculator = () => {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'DEL') {
      setCalculation(calculation.slice(0, -1));
    } else if (value === 'AC') {
      setCalculation('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(calculation));
      } catch (error) {
        setResult('Error');
      }
    } else if (
      signs.includes(value) &&
      signs.includes(calculation[calculation.length - 1])
    ) {
      return;
    } else {
      setCalculation(calculation + value);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <main>
        <div className="screen">
          <input readOnly type="text" value={calculation || '0'} />
          {result ? (
            <div>
              <p>=</p>
              <p className="result">{result}</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="btn-wrapper">
          {buttonValues.map((value, index) => (
            <input
            key={index}
              type="button"
              value={value}
              onClick={() => handleButtonClick(value)}
              className={
                value === 'A/C'
                  ? 'btn btn-clear'
                  : value === 'DEL'
                  ? 'btn btn-del'
                  : value === '='
                  ? 'btn btn-equal'
                  : value === '/'
                  ? 'btn btn-sign btn-divide'
                  : value === '+'
                  ? 'btn btn-sign btn-plus'
                  : value === '*' || value === '-'
                  ? 'btn btn-sign'
                  : value === ''
                  ? 'btn btn-empty'
                  : 'btn'
              }
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Calculator;
