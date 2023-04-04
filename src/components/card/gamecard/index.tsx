import React, { FC } from "react";
import { CardWrapper, IconWrapper, NewCardWrapper } from "./gamecard.styled";
import Label from "@/components/label";
import Button from "@/components/button";

type GameCardProps = {
  newCard?: boolean;
  onHander: any;
  gameName?: string;
  gameIconLink?: string;
  blockchainPlatform?: string;
};

const GameCard: FC<GameCardProps> = ({
  newCard = false,
  onHander,
  blockchainPlatform,
  gameIconLink,
  gameName,
}) => {
  return newCard ? (
    <NewCardWrapper>
      <Button
        onClick={onHander}
        width={"80%"}
        height={40}
        background={"#7956ff"}
        hoveredBackground={"#684ae2"}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={10}
      >
        <Label fontSize={14} lineHeight={14} fontColor={"white"}>
          Add Game
        </Label>
      </Button>
    </NewCardWrapper>
  ) : (
    <CardWrapper>
      <IconWrapper src={gameIconLink}></IconWrapper>
      <Label
        fontSize={16}
        lineHeight={16}
        fontColor={"#4e4e4e"}
        fontWeight={800}
      >
        {gameName}
      </Label>
      <Label
        fontSize={16}
        lineHeight={16}
        fontColor={"#0095ff"}
        fontWeight={800}
      >
        {blockchainPlatform}
      </Label>
      <Button
        onClick={onHander}
        width={"80%"}
        height={40}
        background={"#7956ff"}
        hoveredBackground={"#684ae2"}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={10}
      >
        <Label fontSize={14} lineHeight={14} fontColor={"white"}>
          Select
        </Label>
      </Button>
    </CardWrapper>
  );
};

export default GameCard;
