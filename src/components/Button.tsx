import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <ChakraButton
      colorScheme="blue"
      mt={4}
      size="lg"
      onClick={onClick}
      mx="auto"
      display="block"
      _hover={{ bg: "blue.600" }}
      _focus={{ boxShadow: "outline" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
