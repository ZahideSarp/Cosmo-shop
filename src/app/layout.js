import { roboto } from "@/utils/font";
import "./index.scss";

export const metadata = {
	title: {
		template: "%s | Cosmo Shop",
		default: "Cosmo Shop",
	},
	description: "You can get luxury electornic devices",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} h-100`}>
			<body className="d-flex flex-column justify-content-between h-100">
				{children}
			</body>
		</html>
	);
}
