import styled from 'styled-components';
import Banner from '../components/main/Banner';

export default function main() {
  return (
    <Container>
      <Banner />
      <InfoWrapper></InfoWrapper>
    </Container>
  );
}

const Container = styled.div``;
const InfoWrapper = styled.div`
  width: 100%;
  height: 500px;
`;
