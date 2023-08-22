import { useEffect, useState } from 'react';

import { BasicModeling } from './components/BasicModeling/BasicModeling';
import { BasicState } from './components/BasicState/BasicState';
import { StateCaveat } from './components/StateCaveat/StateCaveat';

import './index.css'

function App() {
  return (
    <div className="App">
      <header className='banner'>
        <h1>Event Handling</h1>
      </header>

      <section className='content'>
        <header className='navbar'>
          <nav>
            <ul>
              <li><a href="#state-modeling">State Modeling</a></li>
              <li><a href="#basic-state">Basic State</a></li>
              <li><a href="#state-caveat">State Caveat</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id='state-modeling'>
            <h2>State Modeling</h2>

            <BasicModeling />
          </section>
          
          <section id='basic-state'>
            <h2>Basic State</h2>

            <BasicState />
          </section>

          <section id='state-caveat'>
            <h2>State Caveat</h2>

            <StateCaveat />
          </section>
        </main>
      </section>

      <footer>
        <h2><a href="https://www.jobloop.no">&copy; Jobloop AS</a></h2>
        <h3>By Lars Gunnar</h3>
      </footer>
    </div>
  );
};

export default App