import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = ({userData}) => {
  const name = "";
  return (
    <Flex
      align={"center"}
      justify="space-between"
      h="60px"
      bgColor="blackAlpha.500"
      px="10px"
    >
      <Flex align={"center"} justify="space-between" w="40%">
        <Link href="/"><Text>{userData.name}</Text></Link>
        <Link href="/projects"><Text>Projects</Text></Link>
        <Link href="/education"><Text>Experience</Text></Link>
        
        
        
      </Flex>
      <Box>
        <Avatar src={userData.avatar_url} alt="Faizal Siddiqui" size={"sm"} />
      </Box>
    </Flex>
  );
};

export default Navbar;
