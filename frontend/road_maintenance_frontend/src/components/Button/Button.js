import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const button = (props) =>
	!props.link ? (
		<button
			className="w-100 btn btn-lg btn-primary"
			onClick={props.onClick}
			disabled={props.disabled || props.loading}
			type={props.type}
		>
			{props.loading ? "Loading..." : props.children}
		</button>
	) : (
		<Link
			className={[
				"button",
				`button--${props.design}`,
				`button--${props.mode}`,
			].join(" ")}
			to={props.link}
		>
			{props.children}
		</Link>
	);

export default button;
