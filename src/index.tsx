import { render } from 'preact';
import './index.less';
import { Main } from './Main';
function App() {
	return <div>
		<Main/>
		</div>
}
render( <App />, document.getElementById( 'app' ) );