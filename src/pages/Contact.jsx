import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg" mb={6}>
          If you have any questions or feedback, feel free to reach out to us.
        </Text>
        <VStack spacing={4} align="stretch">
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Email</Heading>
            <Text mt={2}>contact@financialtimes.com</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">Phone</Heading>
            <Text mt={2}>+1 234 567 890</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;