import React from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: "Test 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tenetur accusamus. Ipsum, at est? Libero quos mollitia vitae deleniti excepturi laborum eaque impedit cumque ex debitis! Eligendi deserunt qui praesentium.",
    },
    {
      id: 2,
      label: "Test 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam provident ab ipsa in, fuga ea exercitationem pariatur alias, iste placeat quo? Est sunt ex dolore dolorem quia? Eius, fugit ad!",
    },
    {
      id: 3,
      label: "Test 3",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci totam quia, quo, blanditiis reiciendis voluptatibus aliquam unde enim recusandae ipsum accusamus sed animi nobis nisi, vitae quam repudiandae nam?",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
