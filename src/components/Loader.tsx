import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

const Loader: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="top" height="100vh">
    <Spinner size="xl" />
  </Box>
);

export default Loader;
