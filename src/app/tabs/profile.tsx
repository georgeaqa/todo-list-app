import { log_out } from "@/src/services/authService";
import React from "react";
import { CustomButton, CustomScreenWrapper } from "@/src/components";

export default function profile() {
  return (
    <CustomScreenWrapper>
      <CustomButton tittle="Log Out" onPress={log_out} />
    </CustomScreenWrapper>
  );
}
