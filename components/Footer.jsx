import Link from "next/link";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Flex,
	Box,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Footer = () => (
	<Box
		style={{
			backgroundColor: "#f09d51",
			margin: "0 auto",
			display: "flex",
			justifyContent: "center",
			color: "white",
			padding: "40px",
		}}
	>
		<Text fontSize="lg" fontWeight="bold">
			Cottage Inc. 2022{" "} by Adekunle Stephen O.
		</Text>
	</Box>
);

export default Footer;
