import React from 'react';

import './Input.css';

const input = (props) => (
	<div className="input">
		{/* {props.label && <label htmlFor={props.id}>{props.label}</label>} */}
		{props.control === "input" && (
			<div class="form-floating">
				<input
					type={props.type}
					class="form-control"
					id={props.id}
					required={props.required}
					value={props.value}
					placeholder="name@example.com"
					onChange={(e) =>
						props.onChange(props.id, e.target.value, e.target.files)
					}
					onBlur={props.onBlur}
				/>
				<label for="floatingInput">{props.label}</label>
				{/* <input
					className={[
						!props.valid ? "invalid" : "valid",
						props.touched ? "touched" : "untouched",
					].join(" ")}
					type={props.type}
					id={props.id}
					required={props.required}
					value={props.value}
					placeholder={props.placeholder}
					onChange={(e) =>
						props.onChange(props.id, e.target.value, e.target.files)
					}
					onBlur={props.onBlur}
				/> */}
			</div>
		)}
		{props.control === "textarea" && (
			<textarea
				className={[
					!props.valid ? "invalid" : "valid",
					props.touched ? "untouched" : "touched",
				].join(" ")}
				id={props.id}
				rows={props.rows}
				required={props.required}
				value={props.value}
				onChange={(e) => props.onChange(props.id, e.target.value)}
				onBlur={props.onBlur}
			/>
		)}
	</div>
);

export default input;