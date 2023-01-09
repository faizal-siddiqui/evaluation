import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <Box p="10px" border="1px" borderColor="gray.300" >
      <Stack spacing={3}>
        {EDUCATION.map((el) => (
          <Box key={el.id}  border={"1px"} borderColor="gray.300" p="10px">
            <Text fontWeight="bold">{el.institute}</Text>
            <Text fontSize={"14px"} fontStyle="italic">{el.dur}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const EDUCATION = [
  {
    id: 1,
    institute: "Masai school",
    dur: "07/2022 - Present",
  },
  {
    id: 2,
    institute: "Brahmanand College",
    dur: "07/2018 - 07/2021",
  },
  {
    id: 1,
    institute: "Sughar Singh academy",
    dur: "04/2016 - 05/2018",
  },
];

export default Education;
