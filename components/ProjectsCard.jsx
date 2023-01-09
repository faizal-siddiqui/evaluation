import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { AiOutlineStar } from "react-icons/ai";
const ProjectsCard = ({ project }) => {
  return (
    <Box border={"1px"} borderColor="gray.300" p="10px">
      <Stack spacing="15px">
        <Flex align="center" fontWeight="bold">
          <Text>
            <BsFillFileEarmarkPostFill />
          </Text>
          <Text>{project.name}</Text>
        </Flex>
        <Text>{project.full_name}</Text>
        <Flex align="center" fontWeight="bold" justify="space-between">
          <Flex>
            <Flex align="center" fontWeight="bold">
              <Text>
                <AiOutlineStar />
              </Text>
              <Text>{project.stargazers_count}</Text>
            </Flex>
            <Flex align="center" fontWeight="bold">
              <Text>
                <CgGitFork />
              </Text>
              <Text>{project.forks_count}</Text>
            </Flex>
          </Flex>
          <Box>{project.language}</Box>
        </Flex>
        {/* <Flex align="center">
          {project?.topics?.map((el) => (
            <Text ml="5px" key={el}>
              {el}
            </Text>
          ))}
        </Flex> */}
      </Stack>
    </Box>
  );
};

export default ProjectsCard;
