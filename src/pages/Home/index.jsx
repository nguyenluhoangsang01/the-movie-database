import React, { useState } from "react";
import Modal from "../../components/Modal";

const Home = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div>
      {isActive && <Modal handleClick={handleClick} />}

      <div onClick={handleClick}>Open Modal</div>
    </div>
  );
};

export default Home;
