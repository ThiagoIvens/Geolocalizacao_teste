import { useState, useEffect } from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({ bus_stops, color }) => {

	const instance = new L.Routing.control({
		show: false,
		collapsible: false,
		waypoints: bus_stops.map((element) => {
			return [element.stop.latitude, element.stop.longitude];
		}),
		fitSelectedRoutes: true,
		draggableWaypoints: false,
		routeWhileDragging: false,
		addWaypoints: false,
		lineOptions: {
			styles: [
				{
					color,
				},
			],
		},
	});

	return instance;
};

const RoutingControl = createControlComponent(createRoutineMachineLayer);

export default RoutingControl;
