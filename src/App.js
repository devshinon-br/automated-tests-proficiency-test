import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateSum } from './utils';
import './App.css';

const Container = styled.div`
    font-family: Arial, sans-serif;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    margin-top: 10vh;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const InputLabel = styled.label`
    margin-bottom: 5px;
`;

const Input = styled.input`
    background-color: #ebeae8;
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 1.2rem;
`;

const ResultContainer = styled.div`
    margin-top: 20px;
`;

const Result = styled.input`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
`;

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [resultado, setResultado] = useState(0);

    const getResult = () => {
        setResultado(calculateSum(a, b));
    }

    return (
        <Container>
            <Title>Calculadora de Soma</Title>
            <InputContainer>
                <InputLabel htmlFor="numero1">Número 1:</InputLabel>
                <Input
                    type="number"
                    id="numero1"
                    value={a}
                    onChange={(event) => setA(Number(event.target.value))}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="numero2">Número 2:</InputLabel>
                <Input
                    type="number"
                    id="numero2"
                    value={b}
                    onChange={(event) => setB(Number(event.target.value))}
                />
            </InputContainer>
            <Button id="calcular" onClick={getResult}>Calcular</Button>
            <ResultContainer>
                <Result id="resultado" value={resultado} disabled></Result>
            </ResultContainer>
        </Container>
    );
}

export default App;
