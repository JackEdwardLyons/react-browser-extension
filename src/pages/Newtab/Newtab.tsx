import React, { useEffect, useState } from 'react';
import { emissionDataType } from '../../types';
import './Newtab.css';
import './Newtab.scss';

const Newtab: React.FC = () => {
  const [emissionData, setEmissionData] = useState<{
    [key: string]: emissionDataType;
  }>({});

  function setEmissionDataFromChromeStorage() {
    chrome.storage.local.get(null, function (items) {
      setEmissionData(items);
    });
  }

  // get all chrome storage data
  useEffect(setEmissionDataFromChromeStorage, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>

        <ul>
          {Object.values(emissionData).map((data: emissionDataType) => {
            return (
              <li key={data.id}>
                <span>url: {data.url}</span>
                <span>green: {data.green}</span>
                <span>bytes: {data.bytes}</span>
              </li>
            );
          })}
        </ul>
        <h2>The color of this paragraph is defined using SASS.</h2>
      </header>
    </div>
  );
};

export default Newtab;
