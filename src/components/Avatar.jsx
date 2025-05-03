import React from "react";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const AvatarStatus = () => {
  return (
    <GluestackUIProvider mode="light"><div>
        <div className="avatar avatar-online">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar avatar-offline">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div></GluestackUIProvider>
  );
};

export default AvatarStatus;
