import { Col, Container, Row } from "react-bootstrap";
import SpotyMain from "./SpotyMain";
import SpotyPlayer from "./SpotyPlayer";
import SpotySidebar from "./SpotySidebar";

const SpotyHome = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <SpotySidebar />
        </Col>
        <Col xs={12} lg={9} className="offset-md-3 mainPage">
          <SpotyMain />
        </Col>
      </Row>
      <SpotyPlayer />
    </Container>
  );
};
export default SpotyHome;