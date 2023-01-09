import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Projectss = ({ userData, repos }) => {
  return (
    <Box>
      <Navbar userData={userData} />
      <Projects projects={repos.items} />
    </Box>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(`https://api.github.com/users/faizal-siddiqui`);
  const repo = await axios.get(
    `https://api.github.com/search/repositories?q=user:faizal-siddiqui+fork:true&sort=updated&per_page=10&type=Repositories`
  );

  return {
    props: {
      userData: data.data,
      repos: repo.data,
    },
  };
};

export default Projectss;
