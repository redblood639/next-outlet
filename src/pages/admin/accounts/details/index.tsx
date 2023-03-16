import React from "react";

import Label from "@/components/label";
import { DetailWrapper } from "@/pages/admin/accounts/details/details.styled";

import { getDetailAccount } from "@/assets/test_data";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }: any) {
  const flag = await getDetailAccount(params.id);
  return flag;
}

const DetailAccountSection: React.FC = () => {
  let checking = useLoaderData();

  if (checking) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return (
    <DetailWrapper>
      <Label fontWeight={700} fontSize={40} lineHeight={48} display="block">
        Account Management
      </Label>
      <div style={{ marginTop: "25px" }}>table content</div>
    </DetailWrapper>
  );
};

export default DetailAccountSection;
