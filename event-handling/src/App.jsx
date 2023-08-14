import { BasicHandler } from './components/BasicHandler/BasicHandler'
import { InlineHandler } from './components/InlineHandler/InlineHandler'
import { InternalHandler } from './components/InternalHandler/InernalHandler'
import { ExternalHandler } from './components/ExternalHandler/ExternalHandler'

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
              <li><a href="#basic-component">Basic Handler</a></li>
              <li><a href="#inline-component">Inline Handler</a></li>
              <li><a href="#internal-component">Internal Handler</a></li>
              <li><a href="#external-component">External Handler</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id='basic-handler'>
            <h2>Basic Handler</h2>

            <BasicHandler />
          </section>

          <section id='inline-handler'>
            <h2>Inline Handler</h2>

            <InlineHandler />
          </section>
          
          <section id='internal-handler'>
            <h2>Internal Handler</h2>

            <InternalHandler />
          </section>
          
          <section id='external-handler'>
            <h2>External Handler</h2>

            <ExternalHandler />
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