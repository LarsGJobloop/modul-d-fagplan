import {BasicComponent} from './components/BasicComponent/BasicComponent'
import {ComponentProperties} from './components/ComponentProperties/ComponentProperties'
import {CustomContainer} from './components/CustomContainer/CustomContainer'
import {ListingComponents} from './components/ListingComponents/ListingComponents'
import {Destructuring} from './components/Destructuring/Destructuring'
import {InnlineDestructuring} from './components/InlineDestructuring/InlineDestructuring'
import {ArrowSyntaxt} from './components/ArrowSyntaxt/ArrowSyntaxt'
import {ClassComponent} from './components/ClassComponent/ClassComponent'

function App() {
  return (
    <div className="App">
      <header className='banner'>
        <h1>Stateless Components</h1>
      </header>

      <section className='content'>
        <header className='navbar'>
          <nav>
            <ul>
              <li><a href="#basic-component">Basic Component</a></li>
              <li><a href="#component-properties">Component Properties</a></li>
              <li><a href="#container-components">Container Components</a></li>
              <li><a href="#generating-lists">Generating Lists</a></li>
              <li><a href="#variations">Variations</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id='basic-component'>
            <h2>Basic Component</h2>

            <BasicComponent />
          </section>

          <section id='component-properties'>
            <h2>Component Properties</h2>

            <ComponentProperties name="Fiona" />
          </section>

          <section id='container-components'>
            <h2>Container Components (Children)</h2>

            <CustomContainer>
              <h3>Container</h3>
              <p>Wrapping things up</p>
            </CustomContainer>
          </section>

          <section id='generating-lists'>
            <h2>Generating Lists</h2>

            <ListingComponents list={[
              {id: 0, name: "Greg"},
              {id: 1, name: "Gregory"},
              {id: 2, name: "Gregor"},
              {id: 3, name: "Grethe"},
            ]} />
          </section>

          <section id='variations'>
            <h2>Variations</h2>

            <ul>
              <li>
                <Destructuring name="Dom Shanks" />
              </li>

              <li>
                <InnlineDestructuring name="Spritneys Bears" />
              </li>

              <li>
                <ArrowSyntaxt name="Mash Jordan" />
              </li>

              <li>
                <ClassComponent />
              </li>
            </ul>
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