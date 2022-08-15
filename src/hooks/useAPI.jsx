import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
	const [trip, setTrip] = useState([]);
	const [sequence, setSequence] = useState([]);
	const [qrcode, setQrcode] = useState([]);
	// const [mode, setMode] = useState([]);
	// const [stop, setStop] = useState([]);
	// const [linha, setLinha] = useState([]);
	// const [agency, setAgency] = useState([]);
	// const [route, setRoute] = useState([]);

	const tripUrl = axios.get("https://api.mobilidade.rio/trip/");
	const sequenceUrl = axios.get("https://api.mobilidade.rio/sequence/");
	const qrcodeUrl = axios.get("https://api.mobilidade.rio/qrcode/");
	// const modeUrl = axios.get("https://api.mobilidade.rio/mode/");
	// const stopUrl = axios.get("https://api.mobilidade.rio/stop/");
	// const linhaUrl = axios.get("https://api.mobilidade.rio/linha/");
	// const agencyUrl = axios.get("https://api.mobilidade.rio/agency/");
	// const routeUrl = axios.get("https://api.mobilidade.rio/route/");


	axios
		.all([
			tripUrl,
			sequenceUrl,
			qrcodeUrl,
			// modeUrl,
			// stopUrl,
			// linhaUrl,
			// agencyUrl,
			// routeUrl,
		])
		.then(
			axios.spread((...responses) => {
				setTrip(responses[0].data.results);
				setSequence(responses[1].data.results);
				setQrcode(responses[2].data.results);
				// setMode(responses[3].data.results);
				// setStop(responses[4].data.results);
				// setLinha(responses[5].data.results);
				// setAgency(responses[6].data.results);
				// setRoute(responses[7].data.results);
			})
		)
		.catch((errors) => {
			console.log(errors);
		});

	return (
		<ApiContext.Provider
			value={{ trip, sequence, qrcode }}
		>
			{children}
		</ApiContext.Provider>
	);
}

export function useApi() {
	return useContext(ApiContext);
}
