import React, { useState } from "react";
// styled component
import { ModalWrapper, ModalContent } from "./game-modal.styled";
import Label from "@/components/label";

import { Formik, Form } from "formik";
import * as Yup from "yup";
// components
import Button from "@/components/button";
import { GamePayLoad } from "@/services/gameService";
import { Item } from "@/pages/landing/sign-up";
interface ModalType {
  open: boolean;
  onHandle: any;
}

export const GameModal: React.FC<ModalType> = ({ open, onHandle }) => {
  const [initialValue, _] = useState<GamePayLoad>({
    gameName: "Fantasy game ",
    blockchainPlatform: "ETH",
    gameIconLink: "https://gameIconLink.org/234.png",
    googleLink: "https://drive.google.com/supaki/sdk#2",
    gamePreviewLink: "https://gamePreviewLink.com",
    videoUrls: ["videoUrl#1", "videoUrl#2", "videoUrl#3"],
    imageLinks: ["imageLinks#1", "imageLinks#2", "imageLinks#3"],
    bannerLink: "https://banner.link.com",
    downloads: "downloads string",
    rating: "rating-string",
    genre: "fighting game",
    intro: "This game is about the game that is very interesting. lmao!",
    description: "This is the game which the zombie and the fighter VS match!",
  });

  //  validate Schema
  const validationSchema = () => {
    return Yup.object().shape({
      gameName: Yup.string().required("This field is required!"),
      blockchainPlatform: Yup.string().required("This field is required!"),
      // gameIconLink: Yup.string().required("This field is required!"),
      // googleLink: Yup.string().required("This field is required!"),
      // gamePreviewLink: Yup.string().required("This field is required!"),
      // videoUrls: Yup.string().required("This field is required!"),
      // imageLinks: Yup.string().required("This field is required!"),
      // bannerLink: Yup.string().required("This field is required!"),
      // downloads: Yup.string().required("This field is required!"),
      // rating: Yup.string().required("This field is required!"),
      // genre: Yup.string().required("This field is required!"),
      // intro: Yup.string().required("This field is required!"),
      description: Yup.string().required("This field is required!"),
    });
  };

  const onHandleSubmit = (formValue: GamePayLoad) => {
    onHandle(formValue);
  };
  return (
    <ModalWrapper open={open}>
      <ModalContent>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={onHandleSubmit}
        >
          <Form
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Item label="Game Name" name="gameName" placeholder="" />

            <Item
              label="Bblockchain Platform"
              name="blockchainPlatform"
              placeholder=""
            />

            <Item label="Description" name="description" placeholder="" />

            <Button
              height={45}
              background={"#0080ff"}
              hoveredBackground={"#06c"}
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              borderRadius={10}
              typeof="submit"
            >
              <Label fontSize={15} fontColor={"white"} padding="0 25px 0 25px">
                Confirm
              </Label>
            </Button>
          </Form>
        </Formik>
      </ModalContent>
    </ModalWrapper>
  );
};
