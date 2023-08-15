import { useEffect, useState } from 'react';

import { BasicModeling } from './components/BasicModeling/BasicModeling';
import { BasicState } from './components/BasicState/BasicState';
import { StateCaveat } from './components/StateCaveat/StateCaveat';

import './index.css'

function App() {
  const hash = useHash()

  return (
    <div className="App">
      <header className='banner'>
        <h1>Event Handling</h1>
        <p>Current hash: {hash}</p>
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
          <section id='state-modeling' className={hash === "state-modeling" ? "active" : ""}>
            <h2>State Modeling</h2>

            <BasicModeling />
          </section>
          
          <section id='basic-state' className={hash === "basic-state" ? "active" : ""}>
            <h2>Basic State</h2>

            <BasicState />
          </section>

          <section id='state-caveat' className={hash === "state-caveat" ? "active" : ""}>
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


/**
 * Gets the current URL hash segment and updates when it changes
 * 
 * @returns {string?} the current hash or null
 */
function useHash() {
  const [ hash, setHash ] = useState(
    window.location.hash
    ? window.location.hash.slice(1)
    : null
  )

  // Tying a block (function) of code to the component lifecycle
  useEffect(
    () => {
      function handleHashChange() {
        setHash(window.location.hash ? window.location.hash.slice(1) : null)
      }

      window.addEventListener("hashchange", handleHashChange)

      // Cleanup function
      return () => window.removeEventListener("hashchange", handleHashChange)
    },
    []
  )

  return hash
}