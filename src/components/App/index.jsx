import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "../Map/Map";
import Header from "../Header";
import { useEffect, useState } from "react";
import Search from "../Search";

function App() {
	const [tripID, setTripID] = useState("");
	const [btns, setBtns] = useState([]);

	// search function
	async function handleSearch(search) {
		await axios
			.get("https://api.mobilidade.rio/trip/?code=" + search)
			.then((value) => {
				setBtns(value.data.results);
			});
	}

	useEffect(() => {
		console.log(tripID);
	}, [tripID]);

	return (
		<div className="App">
			<Header />
			<div className="container my-5">
				<div className="d-flex align-items-center justify-content-center">
					<div className="col-12 col-md-8">
						<div className="card">
							<div className="card-header">
								<h4>Mapa das rotas dos itinerários</h4>
							</div>
							<div className="card-body">
								<Search search={handleSearch} />

								<div className="w-100">
									<div id="btns" className="row">
										{btns.map((element, index) => (
											<div className="col-4 mb-2">
												<button
													key={"btn" + index}
													className="btn-trips"
													onClick={() => {
														setTripID(element.id);
														console.log(tripID);
													}}
												>
													{element.headsign}
												</button>
											</div>
										))}
									</div>
								</div>

								<div id="map">
									{tripID.length === 0 ? (
										<Map trip_id="B0010AAF0AIDU01" />
										// <div>Loading...</div>
									) : (
										<Map trip_id={tripID} />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
