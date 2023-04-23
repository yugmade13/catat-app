import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    background: #fff;
  }
`;

const Wrapper = styled.div`
  width: 375px;
  background: #fff;
  color: #252525;
  padding: 24px;
  border-radius: 15px;
  
  h1 {
    text-align: center;
    margin-bottom: 32px;
  }
  
  input {
    width: 100%;
    margin-bottom: 18px;
  }
  
  button {
    width: 100%;
  }
  
  span {
    display: block;
    text-align: center;
    margin-top: 18px;
  }
  
  a {
    font-weight: 400;
    color: #252525;
  }
`;

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    font-size: 24px;
  }
`;

export { Background, Wrapper, Loading };
