import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: white;
    text-color: rgba(3, 37, 65, 1);
    padding: 10px 20px;
    border-radius: 2em;
    border-line: none;
    cursor: pointer;
    margin: 10px;
`;

const P = styled.p`
    color: white;    
`;


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div>
                {isLoggedIn ? (
                    <P><Button onClick={this.handleLogoutClick}>로그아웃</Button>환영합니다!</P>
                ) : (
                    <P><Button onClick={this.handleLoginClick}>로그인</Button>로그인 해주세요! </P>
                )}
            </div>
        );
    }
}

export default LoginControl;
