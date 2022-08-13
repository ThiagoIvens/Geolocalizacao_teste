import { useEffect, useState, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "./styles.css";

import RoutingControl from "./RoutingControl";

function MapComponent(props) {
	const map = useMap();
	map.setView(props.center, props.zoom);
	console.log("map center:", map.getCenter());
	return null;
}

export default function Map(props) {
	var redIcon = new L.Icon({
		iconUrl:
			"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
		shadowUrl:
			"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	const rMachine = useRef();
	
	const [tripID, setTripID] = useState([]);

	// trip_id: filtra paradas de um itinerário específico (ex - linha 105: https://api.mobilidade.rio/sequence/?trip_id=2200105101020101)
	// O valor de trip_id corresponde ao results: {id: ...} do endpoint trip
	function getTripWithId(id) {
		axios
			.get("https://api.mobilidade.rio/sequence/?trip_id=" + id)
			.then((value) => {
				setTripID(value.data.results);
			});
	}

	useEffect(() => {
		getTripWithId(props.trip_id);
		console.log(props.trip_id);
	}, [props.trip_id]);

	return (
		<>
			{tripID.length === 0 ? (
				<div>Loading...</div>
			) : (
				<div>
					<MapContainer
						center={[
							tripID[0].stop.latitude,
							tripID[0].stop.longitude,
						]}
						zoom={13}
						scrollWheelZoom={true}
						id="map"
						className="map-container"
					>
						<MapComponent
							center={[
								tripID[0].stop.latitude,
								tripID[0].stop.longitude,
							]}
							zoom={13}
						/>

						<RoutingControl
							bus_stops={tripID}
							color={"#4169E1"}
						/>

						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						{tripID.map((e) => (
							<Marker
								position={[e.stop.latitude, e.stop.longitude]}
							>
								<Popup>{e.stop.name}</Popup>
							</Marker>
						))}
						<Marker
							position={[
								tripID[0].stop.latitude,
								tripID[0].stop.longitude,
							]}
							icon={redIcon}
						>
							<Popup>
								Você está aqui
								<br />
								{tripID[0].stop.name}
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			)}
		</>
	);
}

// export function getStaticPaths() {
// 	const maps = fetch("https://api.mobilidade.rio/sequence/");
// 	const paths = maps.map((e) => {
// 		const tripIDTeste = e.id;
// 		return {
// 			params: tripIDTeste,
// 		};
// 	});
// 	console.log(maps);
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// export const getStaticProps = async (params) => {
// 	const tripIDTeste = params.tripIDTeste;
// 	const results = await fetch(
// 		`https://api.mobilidade.rio/sequence/?trip_id=${tripIDTeste}`
// 	);
// 	return {
// 		props: {
// 			tripIDTeste: results,
// 		},
// 	};
// };
