import React from 'react';
import Home from './(main)/home/page';
import { ReduxProvider } from "@/redux/ReduxProvider";


const page = () => {
  return (
    <ReduxProvider>
      <div>
        <Home />
      </div>
    </ReduxProvider>
  );
};

export default page;