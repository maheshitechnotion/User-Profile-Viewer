import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface UserProps {
  name: string;
  email: string;
  picture?: string; // Optional to handle missing images
}

const UserCard: React.FC<UserProps> = ({ name, email, picture }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      p={4}
      maxW="sm"
      mx="auto"
      boxShadow="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <Image
        borderRadius="full"
        boxSize="100px"
        src={picture || 'https://via.placeholder.com/150'}
        alt={name}
        mx="auto"
        objectFit="cover"
        _hover={{ border: "2px solid #3182ce" }}
      />
      <Text mt={3} fontSize="lg" fontWeight="bold" textTransform="capitalize">
        {name}
      </Text>
      <Text mt={1} fontSize="sm" color="gray.500">
        <a href={`mailto:${email}`} style={{ textDecoration: "underline" }}>
          {email}
        </a>
      </Text>
    </Box>
  );
};

export default UserCard;
