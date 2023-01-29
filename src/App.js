import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/index';
import Add from './components/Add';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Dashboard />} />
					<Route path="/add" element={<Add />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
