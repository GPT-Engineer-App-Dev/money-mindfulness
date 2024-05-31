import { Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
      <Heading as="h1" size="lg">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          Financial Times
        </Link>
      </Heading>
      <Flex>
        <Link as={RouterLink} to="/" mx={2} _hover={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" mx={2} _hover={{ textDecoration: "none" }}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" mx={2} _hover={{ textDecoration: "none" }}>
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;