import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import {
  DashBoardWrapper,
  GameCardContent,
  GameCardWrapper,
  MenuWrapper,
} from "@/pages/admin/dashboard/dashboard.styled";

import { GameModal } from "@/components/modal/game";
import GameCard from "@/components/card/gamecard";
import { GamePayLoad, createGame } from "@/services/gameService";

export const DashboardPage: React.FC = () => {
  let navigate = useNavigate();
  const [newGame, setNewGame] = useState<GamePayLoad>();
  const [isOpen, setIsOpen] = useState(false);
  const [gameList, setGames] = useState<any>(null);

  useEffect(() => {
    setGames([
      {
        blockchainPlatform: "ETH",
        gameName: "Fantasy game ",
        gameIconLink: "/gameicon.png",
      },
    ]);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleCreate = (data: GamePayLoad) => {
    setIsOpen(!isOpen);
    createGame(data);
  };

  const viewGame = () => {
    navigate("/admin/dashboard");
  };

  return (
    <>
      <DashBoardWrapper>
        <MenuWrapper></MenuWrapper>
        <GameCardWrapper>
          <GameCardContent>
            <GameCard newCard onHander={toggleModal} />
            {gameList &&
              gameList.map((_game: any, idx: number) => (
                <GameCard onHander={viewGame} key={idx} {..._game} />
              ))}
          </GameCardContent>
        </GameCardWrapper>
      </DashBoardWrapper>
      {/* modal */}
      <GameModal open={isOpen} onHandle={handleCreate} />
    </>
  );
};

export default DashboardPage;
