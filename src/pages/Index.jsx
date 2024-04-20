// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, Button, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaBook, FaDraftingCompass, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
          <Heading fontSize="xl">Meet ArchiBot: Your Architecture and Design Guide</Heading>
          <Text mt={4}>ArchiBot knows everything about Architecture, AutoCAD, 3Ds Max, Revit, and related software. It's also a legend in Interior Designing and Design Course building.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
          <Heading fontSize="xl">Explore Software Tools</Heading>
          <VStack align="stretch" mt={4}>
            <Button leftIcon={<FaLaptopCode />} colorScheme="teal">
              Learn AutoCAD
            </Button>
            <Button leftIcon={<FaLaptopCode />} colorScheme="teal">
              Master 3Ds Max
            </Button>
            <Button leftIcon={<FaLaptopCode />} colorScheme="teal">
              Dive into Revit
            </Button>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
          <Heading fontSize="xl">Interior Designing</Heading>
          <Text mt={4}>Get expert advice and insights into the latest trends in interior design.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" bg={bg} color={color}>
          <Heading fontSize="xl">Design Course Building</Heading>
          <Text mt={4}>Learn how to build effective and engaging design courses with ArchiBot.</Text>
        </Box>

        <Box align="center">
          <Button rightIcon={<FaRobot />} colorScheme="pink" size="lg">
            Talk to ArchiBot
          </Button>
        </Box>

        <Box align="center">
          <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBvZmZpY2V8ZW58MHx8fHwxNzEzNTcyNTkxfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" objectFit="cover" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
