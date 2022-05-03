//import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });
import axios from 'axios';

fetch('http://localhost:8080/words')
.then(res => console.log(res));

export default app;