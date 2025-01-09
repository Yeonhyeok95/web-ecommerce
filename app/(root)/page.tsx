import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const SetupPage = () => {
  return (
    <div className="p-4">
      {/* <UserButton afterSwitchSessionUrl="/" /> */}
      <UserButton />
    </div>
  );
};

export default SetupPage;
