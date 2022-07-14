import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const onSubmitHandler = (event) => {
    navigate("/searched/" + input);
    event.PreventDefault();
  };
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <>
        <FaSearch></FaSearch>
        <input type="text" value={input} onChange={onChangeHandler} />
      </>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  margin: 0rem 7rem;

  position: relative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 70%;
    color: white;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
