import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Education from "../components/Education";
import Navbar from "../components/Navbar";

const EducationPage = ({ userData }) => {
  return (
    <Box>
      <Navbar userData={userData} />
      <Education />
    </Box>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(`https://api.github.com/users/faizal-siddiqui`);

  return {
    props: {
      userData: data.data,
    },
  };
};

export default EducationPage;
