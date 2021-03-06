import React, { useState } from "react";
export function Trafficlight() {
	//aquí usamos la variable 'color' para setearle el color según el estado de la variable
	//       ↓ variable name       ↓ default value
	const [color, setColor] = useState([]);
	//               ⬆ function to change the color
	return (
		<div className="miContenedor">
			<div className="miCable"></div>
			<div className="miSemaforo">
				<div
					className={
						color == "rojo"
							? "rojo misLuces selectedRojo"
							: "rojo misLuces"
					}
					onClick={() => setColor("rojo")}></div>
				<div
					className={
						color == "amarillo"
							? "amarillo misLuces selectedAmarillo"
							: "amarillo misLuces"
					}
					onClick={() => setColor("amarillo")}></div>
				<div
					className={
						color == "verde"
							? "verde misLuces selectedVerde"
							: "verde misLuces"
					}
					onClick={() => setColor("verde")}></div>
			</div>
		</div>
	);
}
