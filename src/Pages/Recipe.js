import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const Recipe = () => {
  const params = useParams();
  const [details, setDatails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https:/api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailedData = await data.json();
    console.log(detailedData);
    setDatails(detailedData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div className="deatilsInfo">
            <h5 dangerouslySetInnerHTML={{ __html: details.summary }}></h5>
            <h5 dangerouslySetInnerHTML={{ __html: details.instructions }}></h5>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="deatilsInfo listItems">
            {details.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  img {
    height: 15rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  .deatilsInfo {
    position: absolute;
    top: 26rem;
    right: 7rem;
    left: 40rem;
  }
  .listItems {
    position: absolute;
    top: 23rem;
    right: 2rem;
    left: 47rem;
  }
`;
const Button = styled.button`
  padding: 1rem 1rem;
  height: 3rem;
  width: 7rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
  display: flex;
  //   height: 15px;
  //   width: 10px;
`;
export default Recipe;
