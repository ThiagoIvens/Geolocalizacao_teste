switch (props.type) {
	case "qrcode":
		const [qr_code, setQRCODE] = useState([]);
		// qrcode - Pontos já cadastrados no app com QRCode:
		async function getQrCode() {
			const response = await axios.get(
				"https://api.mobilidade.rio/qrcode/"
			);
			return response.data.results;
		}
		return <></>;
	case "allTrip":
		const [trips, setTrips] = useState([]);

		// trip - Itinerário de todas as linhas cadastradas:
		function getAllTrip() {
			axios.get("https://api.mobilidade.rio/trip/").then((value) => {
				setTrips(value.data.results);
			});
		}

		return <></>;
	case "sequence":
		const [sequence, setSequence] = useState([]);
		// sequence - Sequência de paradas de todos os itinerários:
		async function getSequence() {
			const response = await axios.get(
				"https://api.mobilidade.rio/sequence/"
			);
			return response.data.results;
		}
		return <></>;
}
