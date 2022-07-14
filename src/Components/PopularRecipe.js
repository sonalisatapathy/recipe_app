import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//for styled component
import styled from "styled-components";
//for carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularRecipe = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopularRecipe();
  }, []);
  const getPopularRecipe = async () => {
    const checkItem = localStorage.getItem("popular");
    if (checkItem) {
      setPopular(JSON.parse(checkItem));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data);
      setPopular(data.recipes);
    }
  };
  return (
    <>
      <Wrapper>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {popular.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <Card>
                  <Link to={"/recipe/" + item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt={item.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;
const Card = styled.div`
  min-height: 10rem;
  border-radius: 2 rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    // height: 10rem;
    position: absolute;
    left: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 0%;
    bottom: 0%;
    width: 100%;
    color: white;
    text-align: center;
    font-weight: 650;
    font-size: 1 rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-graident(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default PopularRecipe;
