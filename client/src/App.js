import "./App.css";
import useData from "./useData";

function App() {
	let [word] = useData();
	return (
		<div className='App'>
			<main>wordle test : {word}</main>
		</div>
	);
}

export default App;
