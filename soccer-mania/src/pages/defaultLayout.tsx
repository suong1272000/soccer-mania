import SelectedListItem from "@/components/atoms/SelectedListItem";
import Registry from "./registry";
import HomeToolbar from "@/components/atoms/HomeToolbar";
import ContentBox, { LayoutProps } from "@/components/atoms/ContentBox";

const DefaultLayout = ({ children }: LayoutProps) => {
	return (
		<Registry>
			<div style={{ display: "flex", }}>
				<SelectedListItem />
				<HomeToolbar />
				<ContentBox children={children} />
			</div>
		</Registry>
	);
};
export default DefaultLayout;
