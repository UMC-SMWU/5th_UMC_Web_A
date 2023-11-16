import styled from 'styled-components';

const API_KEY = 'f96f8543a223e42bcc355a3f391d1ae6';
const CityName = styled.input`
        type: text;
        placeholder: '도시를 입력하세요';
        margin: 0 auto;
        padding: 10px;
        border-radius: 10px;
`;

export function Weather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`;
    
    const CityInput = () => {
        return <CityName />
    }
};