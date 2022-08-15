import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "../Map/Map";
import Header from "../Header";
import { useContext, useEffect, useState } from "react";
import Search from "../Search";
import { Tab, Tabs } from "react-bootstrap";
import { useApi } from "../../hooks/useAPI";
import ReactDOM from "react-dom";

function App() {
	const [tripID, setTripID] = useState("");
	const [btns, setBtns] = useState([]);
	const [btnsAll, setBtnsAll] = useState([]);
	const { sequence } = useApi();

	// search function
	async function handleSearch(search) {
		await axios
			.get(
				"https://api.mobilidade.rio/trip/?code=" + search.toUpperCase()
			)
			.then((value) => {
				setBtns(value.data.results);
			});
	}

	useEffect(() => {
		axios.get("https://api.mobilidade.rio/trip/").then((value) => {
			setBtnsAll(value.data.results);
			console.log(value.data.results)
		});
	}, []);

	return (
		<div className="App">
			<Header />
			<div className="container my-5">
				<div className="d-flex align-items-center justify-content-center">
					<div className="col-12 col-md-12">
						<div className="card">
							<div className="card-header">
								<h4>Mapa das rotas dos itinerários</h4>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-12">
										<Search search={handleSearch} />
									</div>
									{btns.length > 0 ? (
										<div className="col-12">
											{btns.map((element, index) => (
												<div className="col-12 mb-2 px-0">
													<button
														key={"btn" + index}
														className="btn-trips"
														onClick={() => {
															setTripID(
																element.id
															);
														}}
													>
														<div className="row">
															<div className="col-3 p-0 m-0">
																<div className="number">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 448 512"
																	>
																		<path
																			d="M224 0C348.8 0 448 35.2 448 80V416C448 433.7 433.7 448 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V448C14.33 448 0 433.7 0 416V80C0 35.2 99.19 0 224 0zM64 256C64 273.7 78.33 288 96 288H352C369.7 288 384 273.7 384 256V128C384 110.3 369.7 96 352 96H96C78.33 96 64 110.3 64 128V256zM80 400C97.67 400 112 385.7 112 368C112 350.3 97.67 336 80 336C62.33 336 48 350.3 48 368C48 385.7 62.33 400 80 400zM368 400C385.7 400 400 385.7 400 368C400 350.3 385.7 336 368 336C350.3 336 336 350.3 336 368C336 385.7 350.3 400 368 400z"
																			fill="#FFF"
																		/>
																	</svg>
																	<p>
																		{
																			element
																				.route
																				.short_name
																		}
																	</p>
																</div>
															</div>
															<div className="col-9">
																<div className="trip-name">
																	<p>
																		{
																			element
																				.route
																				.vista
																		}
																	</p>
																</div>
															</div>
														</div>
													</button>
												</div>
											))}
										</div>
									) : (
										<></>
									)}
									<div className="col-12 col-md-5">
										<Tabs
											defaultActiveKey="ida"
											id="uncontrolled-tab-example"
											className="mt-1"
										>
											<Tab eventKey="ida" title="IDA">
												<div id="btns" className="row">
													{btnsAll.map(
														(element, index) => (
															<>
																{element.direction ===
																1 ? (
																	<div className="col-12 mb-2 px-0">
																		<button
																			key={
																				"btn" +
																				index
																			}
																			className="btn-trips"
																			onClick={() => {
																				setTripID(
																					element.id
																				);
																			}}
																		>
																			<div className="row">
																				<div className="col-3 p-0 m-0">
																					<div className="number">
																						<svg
																							xmlns="http://www.w3.org/2000/svg"
																							viewBox="0 0 448 512"
																						>
																							<path
																								d="M224 0C348.8 0 448 35.2 448 80V416C448 433.7 433.7 448 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V448C14.33 448 0 433.7 0 416V80C0 35.2 99.19 0 224 0zM64 256C64 273.7 78.33 288 96 288H352C369.7 288 384 273.7 384 256V128C384 110.3 369.7 96 352 96H96C78.33 96 64 110.3 64 128V256zM80 400C97.67 400 112 385.7 112 368C112 350.3 97.67 336 80 336C62.33 336 48 350.3 48 368C48 385.7 62.33 400 80 400zM368 400C385.7 400 400 385.7 400 368C400 350.3 385.7 336 368 336C350.3 336 336 350.3 336 368C336 385.7 350.3 400 368 400z"
																								fill="#FFF"
																							/>
																						</svg>
																						<p>
																							{
																								element.route.short_name
																							}
																						</p>
																					</div>
																				</div>
																				<div className="col-9">
																					<div className="trip-name">
																						<p>
																							{
																								element.route.vista
																							}
																						</p>
																					</div>
																				</div>
																			</div>
																		</button>
																	</div>
																) : (
																	<></>
																)}
															</>
														)
													)}
												</div>
											</Tab>
											<Tab eventKey="volta" title="VOLTA">
												<div id="btns" className="row">
													{btnsAll.map(
														(element, index) => (
															<>
																{element.direction ===
																2 ? (
																	<div className="col-12 mb-2 px-0">
																		<button
																			key={
																				"btn" +
																				index
																			}
																			className="btn-trips"
																			onClick={() => {
																				setTripID(
																					element.id
																				);
																			}}
																		>
																			<div className="row">
																				<div className="col-3 p-0 m-0">
																					<div className="number">
																						<svg
																							xmlns="http://www.w3.org/2000/svg"
																							viewBox="0 0 448 512"
																						>
																							<path
																								d="M224 0C348.8 0 448 35.2 448 80V416C448 433.7 433.7 448 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448H128V480C128 497.7 113.7 512 96 512H64C46.33 512 32 497.7 32 480V448C14.33 448 0 433.7 0 416V80C0 35.2 99.19 0 224 0zM64 256C64 273.7 78.33 288 96 288H352C369.7 288 384 273.7 384 256V128C384 110.3 369.7 96 352 96H96C78.33 96 64 110.3 64 128V256zM80 400C97.67 400 112 385.7 112 368C112 350.3 97.67 336 80 336C62.33 336 48 350.3 48 368C48 385.7 62.33 400 80 400zM368 400C385.7 400 400 385.7 400 368C400 350.3 385.7 336 368 336C350.3 336 336 350.3 336 368C336 385.7 350.3 400 368 400z"
																								fill="#FFF"
																							/>
																						</svg>
																						<p>
																							{
																								element.route.short_name
																							}
																						</p>
																					</div>
																				</div>
																				<div className="col-9">
																					<div className="trip-name">
																						<p>
																							{
																								element.route.vista
																							}
																						</p>
																					</div>
																				</div>
																			</div>
																		</button>
																	</div>
																) : (
																	<></>
																)}
															</>
														)
													)}
												</div>
											</Tab>
										</Tabs>
									</div>
									<div className="col-12 col-md-7">
										<div id="map">
											<Map trip_id={tripID} />
										</div>
									</div>
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
