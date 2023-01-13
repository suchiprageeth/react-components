import React from "react";
import Button from "../components/Button";
import {
  GoBell,
  GoDatabase,
  GoFlame,
  GoGear,
  GoGitCommit,
} from "react-icons/go";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-5">
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline className="mb-5">
          <GoFlame />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger className="mb-5">
          <GoGear />
          Click Me!
        </Button>
      </div>
      <div>
        <Button primary className="mb-5">
          <GoGitCommit />
          Click Me!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
