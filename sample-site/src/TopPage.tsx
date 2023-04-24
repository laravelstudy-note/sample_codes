import Header from "./Parts/Header";
import Nav from "./Parts/Nav";
import Section1 from "./Parts/Section1";
import Section2 from "./Parts/Section2";
import Section3 from "./Parts/Section3";
import Footer from "./Parts/Footer";
import Copyright from "./Parts/Copyright";
import "./style.css";

export default function TopPage() {
	return (
		<>
			<Nav />
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
			<Copyright />
		</>
	)
}