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
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { Show, Hide } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Hide below="md">
        <Flex>
          <Link href="/" passHref>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<FcHome />}
              marginRight="5px"
              border="none"
            >
              Home
            </Button>
          </Link>
          <Link href="/search" passHref>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<BsSearch />}
              marginLeft="5px"
              marginRight="5px"
              border="none"
            >
              Search
            </Button>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<FcAbout />}
              marginLeft="5px"
              marginRight="5px"
              border="none"
            >
              Buy Property
            </Button>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <Button
              colorScheme="teal"
              variant="outline"
              leftIcon={<FiKey />}
              marginLeft="5px"
              border="none"
            >
              Rent Property
            </Button>
          </Link>
          <IconButton onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <BsSun />}
          </IconButton>
        </Flex>
      </Hide>
      <Show breakpoint="(max-width: 768px)">
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outline"
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
      </Show>
    </Flex>
  );
};
export default Navbar;
