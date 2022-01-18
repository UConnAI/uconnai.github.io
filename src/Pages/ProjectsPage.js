import React from "react";
import LeftProjectTitle from "../Components/LeftProjectTitle";
import RightProjectTitle from "../Components/RightProjectTitle";
import Jisoo from "../image0.jpg";

function ProjectsPage() {
  return (
    <div>
      <div>
        <h1 className="Header">PROJECTS</h1>
      </div>
      <LeftProjectTitle
        Image={Jisoo}
        Title="Kim Jisoo"
        Description="(Copied from her fandom for testing ) Kim Ji-soo (Hangul: 김지수, born
          January 3, 1995 in Gunpo, Gyeonggi Province, South Korea), better
          known mononymously as Jisoo, is a South Korean singer and actress. She
          is a member of BLACKPINK. Biography Early life Kim Ji-soo was born on
          January 3, 1995, in Gunpo, Gyeonggi, South Korea. "
      />
      <RightProjectTitle
        Image={Jisoo}
        Title="Kim Jisoo"
        Description="(Copied from her fandom for testing ) Kim Ji-soo (Hangul: 김지수, born
          January 3, 1995 in Gunpo, Gyeonggi Province, South Korea), better
          known mononymously as Jisoo, is a South Korean singer and actress. She
          is a member of BLACKPINK. Biography Early life Kim Ji-soo was born on
          January 3, 1995, in Gunpo, Gyeonggi, South Korea. "
      />
      <LeftProjectTitle
        Image={Jisoo}
        Title="Kim Jisoo"
        Description="(Copied from her fandom for testing ) Kim Ji-soo (Hangul: 김지수, born
          January 3, 1995 in Gunpo, Gyeonggi Province, South Korea), better
          known mononymously as Jisoo, is a South Korean singer and actress. She
          is a member of BLACKPINK. Biography Early life Kim Ji-soo was born on
          January 3, 1995, in Gunpo, Gyeonggi, South Korea. "
      />
    </div>
  );
}
export default ProjectsPage;
