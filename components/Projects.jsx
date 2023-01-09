import { Box, Grid, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = ({ projects }) => {
  return (
    <Box border="1px" borderColor="gray.300" p={"10px"} >
      <Heading w="30%" m="auto" as={"h5"} mb="20px">
        Projects
      </Heading>
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
        {projects?.map((el) => (
            <Link  key={el.id} href={`https://github.com/faizal-siddiqui/${el.name}`}>
                <ProjectsCard project={el} />
            </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
