import MasterLayout from '../layout/MasterLayout';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Login from '../components/login/Login';
import {accordionData} from '../data/home';
import PerfectScrollbar from 'react-perfect-scrollbar'

function HomePage() {

  return (
    <MasterLayout>
      <div className="content">
        <Row className="d-flex justify-content-center align-items-center at-home-login pt-3">
          <Col md={6} lg={4} xs={12}>
            <Login />
          </Col>
        </Row>
        <PerfectScrollbar>
          <Row className="at-home-accordion-row">
            <Col lg={12}>
              <Accordion
                defaultActiveKey={['0']}
                alwaysOpen
                className="at-home-accordion"
              >
                {accordionData?.map((todo, index) => (
                  <Accordion.Item eventKey={todo.id} key={index}>
                    <Accordion.Header>
                      <div className="text-primary">{todo.title}</div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              {todo?.data?.map((item, index) => (
                                <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </PerfectScrollbar>
      </div>
    </MasterLayout>
  );
}

export default HomePage;
