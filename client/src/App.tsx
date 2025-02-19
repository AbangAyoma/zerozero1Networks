import Navbar from './components/NavBar'
import { Fragment } from 'react/jsx-runtime';  // to enable react render multiple elements or u use <> empty angles

function App() {
  return (
  <Fragment>
  <h1>Nav bar</h1>
  < Navbar />
  </ Fragment>)
}
export default App;