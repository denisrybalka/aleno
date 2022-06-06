import React, { Fragment } from "react";
import "../styles/styles.scss";


export function SliderTrack({ source, target, getTrackProps }) {
	const left = `${source.percent}%`;
	const width = `${target.percent - source.percent}%`;

	return (
		<Fragment>
			<div className="track" style={{ left, width }} />
			<div
				className="trackHotspot"
				style={{ left, width }}
				{...getTrackProps()}
			>
			</div>
		</Fragment>
	);
}
