import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#fff1e5">
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

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>
            Latest Articles
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Article Title 1</Heading>
              <Text mt={2}>This is a summary of the first article. It provides a brief overview of the content.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Article Title 2</Heading>
              <Text mt={2}>This is a summary of the second article. It provides a brief overview of the content.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Article Title 3</Heading>
              <Text mt={2}>This is a summary of the third article. It provides a brief overview of the content.</Text>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50">
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Sidebar Item 1</Heading>
              <Text mt={2}>Additional content or links can go here.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Sidebar Item 2</Heading>
              <Text mt={2}>Additional content or links can go here.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;