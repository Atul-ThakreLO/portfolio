import { University } from "lucide-react";
import React from "react";

const EducationCard = () => {
  return (
    <div className="rounded-2xl border p-4 max-w-3xl text-background">
      <h3>Education</h3>
      <div>
        <div>
          <div className="rounded-full bg-background/50 p-2 w-min">
            <University />
          </div>
          <div>YCCE</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EducationCard;
