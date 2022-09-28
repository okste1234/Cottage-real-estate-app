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
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
	<Box
		p="2"
		borderBottom="1px"
		borderColor="gray.200"
		style={{
			width: "100%",
			margin: "0 auto",
			position: "fixed",
			zIndex: "10",
			paddingTop: "0",
			top: "0",
			backgroundColor: "#fff",
		}}
	>
		<Flex
			p="2"
			style={{
				width: "80%",
				margin: "0 auto",
			}}
		>
			<Box fontSize="3xl" color="#f09d51">
				<Link href="/" paddingLeft="2">
					Cottage
				</Link>
			</Box>

			<Spacer />
			<Box>
				<Menu>
					<MenuButton
						as={IconButton}
						icon={<FcMenu />}
						variant="outlined"
						color="red.400"
					/>
					<MenuList>
						<Link href="/" passHref>
							<MenuItem icon={<FcHome />}>Home</MenuItem>
						</Link>
						<Link href="/search" passHref>
							<MenuItem icon={<BsSearch />}>Search</MenuItem>
						</Link>
						<Link href="/search?purpose=for-sale" passHref>
							<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
						</Link>
						<Link href="/search?purpose=for-rent" passHref>
							<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
						</Link>
					</MenuList>
				</Menu>
			</Box>
		</Flex>
	</Box>
);

export default Navbar;
