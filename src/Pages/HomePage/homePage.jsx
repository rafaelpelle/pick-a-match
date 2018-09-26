import React from 'react'
import MobileSidebar from "../../Components/MobileSidebar/mobileSidebar";
import PageHeader from "../../Components/PageHeader/pageHeader";
import PickMatchButton from "../../Components/PickMatchButton/pickMatchButton";

class HomePage extends React.Component {
	render() {
		return (
			<MobileSidebar >
				<PageHeader />
				<PickMatchButton />
			</MobileSidebar>
		)
	}
}
export default HomePage
