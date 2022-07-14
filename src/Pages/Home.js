import React from "react";
import PopularRecipe from "../Components/PopularRecipe";
import VegRecipe from "../Components/VegRecipe";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transformation={{ duration: 0.5 }}
    >
      <PopularRecipe />
      <VegRecipe />
    </motion.div>
  );
};

export default Home;
