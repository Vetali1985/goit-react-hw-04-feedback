import React from "react";
import PropTypes from "prop-types"
import { SectionTitle } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionTitle>
      <h2>{title}</h2>
      {children}
      </SectionTitle>
    
    </>
    
  );}
  
     



Section.propTypes = {
  title: PropTypes.string.isRequired,
};