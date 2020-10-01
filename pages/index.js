import React from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Layout from "../components/Layout";

const Body = styled.div`
  min-height: 100vh;
  color: #333;
`;

const Home = () => {
  return (
    <div>
      <Layout>
        <Body>
          <Flex flexWrap="wrap" justifyContent="center">
            <Box>
              <h1>Start dev!</h1>
            </Box>
          </Flex>
        </Body>
      </Layout>
    </div>
  );
};

export default Home;
