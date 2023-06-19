import { useState } from "react";
import "./index.css";

function App() {
	return <Chicken />;
}

function Chicken() {
	const [isChickenTender, setIsChickenTender] = useState(false);
	const [noButtonClass, setNoButtonClass] = useState("");
	const [noClicked, setNoClicked] = useState(false);

	const handleYesClick = () => {
		setIsChickenTender(true);
		setNoClicked(false);
	};
	const handleNoClick = () => {
		if (
			noButtonClass === "noButtonHidden" ||
			noButtonClass === "noButtonDisabled"
		) {
			return;
		}
		setNoClicked(true);
	};
	const handleNoHover = () => {
		const styles = ["noButtonHidden", "noButtonDisabled"];
		const randomStyle = styles[Math.floor(Math.random() * styles.length)];
		setNoButtonClass(randomStyle);
	};

	const handleNoHoverOut = (event) => {
		if (event.relatedTarget.className !== "noButtonWrapper") {
			setNoButtonClass("");
		}
	};

	return (
		<div>
			<h1>
				{noClicked
					? "Don't lie, you do"
					: isChickenTender
					? "You're a chicken tender"
					: "Do you tend to chickens?"}
			</h1>
			{!isChickenTender && !noClicked && (
				<div className="buttonsHolder">
					<button
						className={`btnNo ${noButtonClass}`}
						onMouseEnter={handleNoHover}
						onMouseOut={handleNoHoverOut}
						onClick={handleNoClick}
					>
						No
					</button>{" "}
					<button onClick={handleYesClick} className="btnYes">
						Yes
					</button>
				</div>
			)}
			{noClicked && (
				<button onClick={handleYesClick} className="btnYes">
					Yes
				</button>
			)}
		</div>
	);
}

export default App;
