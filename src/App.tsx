import React from "react";
import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import { useFetchUser } from "./hooks/useFetchUser";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const { user, loading, error, getUser } = useFetchUser();

  return (
    <ChakraProvider >
      <Box p={6}>
        <Heading textAlign="center" mb={4}>
          User Profile Viewer
        </Heading>
        {loading && <Loader />}
        {error && <Box textAlign="center" color="red.500">{error}</Box>}
        {user && (
          <UserCard
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            picture={user.picture.large}
          />
        )}
        <Button onClick={getUser}>Fetch New User</Button>
      </Box>
    </ChakraProvider>
  );
};

export default App;
