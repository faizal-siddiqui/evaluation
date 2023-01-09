import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Language = () => {
  return (
    <Box p="10px" border="1px" borderColor="gray.300">
      {LANGUAGES.map((el) => (
        <Text display="inline" ml="5px" color="#fff" bgColor="blackAlpha.400" key={el}>
          {el}
        </Text>
      ))}
    </Box>
  );
};

const LANGUAGES = [
  "HTML",
  "CSS",
  "Javascripr",
  "React",
  "REdux",
  "Chakra Ui",
  "NextJs",
  "NodeJs",
  "MangoDB",
];

export default Language;
