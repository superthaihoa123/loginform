import MasterLayout from '../layout/MasterLayout';
import { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    console.log(username, password, rememberMe);
    navigate('/', { state: { isLogin: true } });
  };

  return (
    <MasterLayout>
      <Container className='translate-y-50'>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} lg={4} xs={12}>
            <Card className="shadow">
              <Card.Body>
              <Card.Title className='pb-2 text-center'>ログイン</Card.Title>
                    <Form autoComplete='off'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="ユーザー名"
                          value={username}
                          autoComplete='off'
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="password"
                          placeholder="パスワード"
                          value={password}
                          autoComplete='new-password'
                          onChange={(pw) => setPassword(pw.target.value)}
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={handleSubmitLogin}
                        >
                          ログイン
                        </Button>
                      </div>
                    </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MasterLayout>
  );
}

export default Login;
