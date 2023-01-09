import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {RiUserFollowFill} from "react-icons/ri"
import {RiUserFollowLine} from "react-icons/ri"

const Card = ({ userData }) => {
  return (
    <Box
    textAlign={"center"}
      border="1px"
      borderColor="gray.300"
      p="10px"
    >
      <Stack spacing={"20px"}>
        <Box m="auto">
          <Avatar
            size="xxl"
            name="Faizal Siddiqui"
            src={userData?.avatar_url}
          />
        </Box>
        <Box m="auto">
          <Heading as={"h5"}>{userData?.name}</Heading>
        </Box>
        <Box m="auto">
            <Link href={`https://github.com/${userData.login}`}>
                <Text>@{userData?.login}</Text>
            </Link>
        </Box>
        <Box m="auto">
          <Text>{userData?.bio}</Text>
        </Box>
        <Link href="https://drive.google.com/file/d/1sxm7xUJK1GSk50jkHoUtq5GSLF3qk70V/view?usp=sharing">
          <Button bgColor="blue.300">Resume</Button>
        </Link>
        <Box m="auto">
          <Flex justify="space-around">
            <Flex>
              <Link href="https://github.com/faizal-siddiqui?tab=followers">
                <Box>
                  <Button color="#fff" borderRadius="20%" bgColor="green.300">
                    <Flex align={"center"}>
                        <Text><RiUserFollowFill /></Text>
                        <Text>{userData.followers}</Text>
                    </Flex>
                   
                  </Button>
                </Box>
              </Link>
            </Flex>
            <Flex>
              <Link href="https://github.com/faizal-siddiqui?tab=following">
                <Box>
                  <Button color="#fff" borderRadius="20%" bgColor="green.300">
                  <Flex align={"center"}>
                        <Text><RiUserFollowLine /></Text>
                        <Text>{userData.following}</Text>
                    </Flex>
                  </Button>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Card;
