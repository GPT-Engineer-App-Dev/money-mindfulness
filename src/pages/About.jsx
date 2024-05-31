import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <Box>
      <Navbar />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" mb={6}>
          Welcome to Financial Times. We provide the latest financial news and insights.
        </Text>
        <VStack spacing={4} align="stretch">
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Our Mission</Heading>
            <Text mt={2}>To deliver accurate and timely financial news to our readers.</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Our Vision</Heading>
            <Text mt={2}>To be the most trusted source of financial news and analysis.</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default About;