import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  DetailWrapper,
  ContentFooter,
  MainContent,
} from "@/pages/admin/devices/details/details.styled";
import Button from "@/components/button";
import Label from "@/components/label";

import { Chart } from "react-google-charts";
// import icons
import RefreshIcon from "@/assets/svgs/refresh";

import { getDetailDevice } from "@/assets/test_data";

export async function loader({ params }: any) {
  const flag = await getDetailDevice(params.id);
  return flag;
}

export const data = [
  ["Task", "Hours per Day"],
  ["Charged", 82],
  ["Left", 12],
];

export const options = {
  is3D: true,
  colors: ["#379E2E", "#c5c7ca"],
  legend: "none",
};

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
        Device Information
      </Label>
      <MainContent>
        <div>
          <table>
            <tr>
              <td>{"Model"}</td>
              <td>: G025N</td>
            </tr>
            <tr>
              <td>{"Owner"}</td>
              <td>: James</td>
            </tr>
            <tr>
              <td>{"Charge"}</td>
              <td>: 82%</td>
            </tr>
            <tr>
              <td>{"Time left on charge"}</td>
              <td>: 10min</td>
            </tr>
            <tr>
              <td>{"Phone Number"}</td>
              <td>: 37891273891</td>
            </tr>
          </table>
        </div>
        <div>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            legendToggle={false}
            legend_toggle={false}
          />
        </div>
      </MainContent>
      <ContentFooter>
        <Button
          background="#007DF8"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
          borderRadius={50}
          width={"350px"}
          height={80}
        >
          <RefreshIcon />
          <Label
            fontWeight={700}
            fontSize={30}
            lineHeight={36}
            fontColor="#ffffff"
          >
            Check again
          </Label>
        </Button>
      </ContentFooter>
    </DetailWrapper>
  );
};

export default DetailAccountSection;
