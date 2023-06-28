import { useState } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(username, password);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    navigate('/top', { state: { isLogin: true } });
  };

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title className="pb-2 text-center">ログイン</Card.Title>
        <Form
          autoComplete="off"
          noValidate
          validated={validated}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            handleSubmitLogin(e)
          }
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FormLabel>ユーザー名</FormLabel>
            <Form.Control
              required
              type="text"
              placeholder=""
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              ユーザー名を入力してください。
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FormLabel>パスワード</FormLabel>
            <Form.Control
              required
              type="password"
              placeholder=""
              value={password}
              autoComplete="new-password"
              onChange={(pw) => setPassword(pw.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              パスワードを入力してください。
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              ログイン
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
