import React from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { setId, setPw, isLoading } from "./redux/action";

function App({ id, pw, token, loading, setId, setPw, isLoading }) {
  const Login = async (e) => {
    e.preventDefault();
    if (!id || !pw) {
      alert("아이디와 비밀번호를 모두 입력하세요.");
      return;
    }

    isLoading(true);

    try {
      await axios
        .post("http://localhost:8000/user/login", {
          id: id,
          pw: pw,
          token: token,
        })
        .then((res) => {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.access_token}`;
          setId(id);
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.result.AccessToken)
          );
          localStorage.setItem("id", id);
        })
        .then((res) => {
          setTimeout(() => {
            isLoading(false);
            alert("로그인 완료! ");
            window.location.replace("/");
          }, 1500);
        });
    } catch (err) {
      isLoading(false);
      alert("로그인 실패! " + err.response.data.message);
    }
  };

  return (
    <Container>
      <Box>
        <Title>
          <h1>로그인</h1>
          <span>아이디와 비밀번호를 입력해주세요.</span>
        </Title>
        <Form onSubmit={Login}>
          <Label>
            아이디
            <Input
              type='text'
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder='아이디 입력'
            />
          </Label>
          <Label>
            비밀번호
            <Input
              type='password'
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder='비밀번호 입력'
            />
          </Label>
          <Button
            type='submit'
            disabled={loading}
          >
            {loading ? "Loading..." : "로그인"}
          </Button>
        </Form>
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  id: state.id,
  pw: state.pw,
  loading: state.loading,
  token: state.token,
});

const mapDispatchToProps = {
  setId,
  setPw,
  isLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.div`
  & h1 {
    margin: 10px 0px;
    font-size: 40px;
  }

  & span {
    font-weight: 500;
    color: #3b3b3b;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px 0px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: 1px solid gray;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0px 10px;
`;

const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) =>
    props.disabled ? "#c2c2c2" : "rgb(3, 37, 65)"};
  color: white;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: gray;
  }
`;
