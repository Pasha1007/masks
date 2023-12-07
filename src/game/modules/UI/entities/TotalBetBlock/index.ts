import { Container, Text } from "pixi.js-legacy";
import { Position } from "../../../types";
import { createSprite } from "../../../../utils/createSprite";
import { ByttonKey, buttonsConfig } from "./config";
import { Button } from "./Button";
import { TextField } from "../TextField";
import { theme } from "../../style";
import { MaskManager } from "../../../manager";

type TotalBetBlockType = {
  position: Position;
  manager: MaskManager;
  scaleSize: number;
  onClick?: (buttonType: ByttonKey) => void;
};

export class TotalBetBlock extends Container {
  private totalBetValue: TextField;
  private buttonsContainer = new Container();
  private onClick?: (buttonType: ByttonKey) => void;
  private manager: MaskManager;

  constructor({ position, manager, scaleSize, onClick }: TotalBetBlockType) {
    super();
    this.manager = manager;
    this.onClick = onClick;
    const gapX = 10;
    this.position.set(position.x, position.y);

    const betFieldContainer = new Container();

    const totalBetField = createSprite({
      textureName: "totalBetField",
      anchor: { x: 0.05, y: 0.05 },
      size: 850
    });
    betFieldContainer.addChild(totalBetField);

    this.buttonsContainer.y = betFieldContainer.height * 1.05;

    const text = new Text("TOTAL BET (€)", {
      fontFamily: theme.fontFamily.primary,
      fill: theme.color.primaryText,
      fontSize: 50,
      fontWeight: "400",
    });
    text.x = totalBetField.width / 25;
    text.y = (totalBetField.height - text.height) / 2;
    betFieldContainer.addChild(text);

    this.totalBetValue = new TextField({
      position: { x: 0, y: 0 },
      defaultValue: this.manager.state.gameState.totalBet,
      valueStyle: {
        fontSize: 60,
      },
    });

    this.totalBetValue.x =
      (betFieldContainer.width - text.width) / 2 + text.width - this.totalBetValue.width / 2;
    this.totalBetValue.y = (betFieldContainer.height - this.totalBetValue.height) / 2;
    betFieldContainer.addChild(this.totalBetValue);

    let offsetX = 0;
    buttonsConfig.forEach((config) => {
      const button = new Button({ config, onClick: this.onClickHandler });
      button.x = offsetX;
      offsetX += button.width + gapX;
      this.buttonsContainer.addChild(button);
    });

    this.addChild(betFieldContainer, this.buttonsContainer);
    this.buttonsContainer.x = (this.width - this.buttonsContainer.width) / 2;

    this.scale.set(scaleSize);
    this.updateDisableButtons();
  }

  onClickHandler = (buttonType: ByttonKey) => {
    this.onClick && this.onClick(buttonType);
  };

  setTotalBet = (value: number) => {
    this.totalBetValue.setValue(value);
    this.updateDisableButtons();
  };

  setAllDisabled(disable: boolean) {
    this.buttonsContainer.children.forEach((button) => {
      if (button instanceof Button) {
        button.setDisable(disable);
      }
    });

    if (!disable) {
      this.updateDisableButtons();
    }
  }

  private updateDisableButtons = () => {
    const { gameState, init } = this.manager.state;
    this.buttonsContainer.children.forEach((button) => {
      if (button instanceof Button) {
        if (button.key === "min" || button.key === "prev") {
          const disable = gameState.totalBet === Number(init.available_bets[0]);
          button.setDisable(disable);
        }

        if (button.key === "max" || button.key === "next") {
          const disable =
            gameState.totalBet === Number(init.available_bets[init.available_bets.length - 1]);
          button.setDisable(disable);
        }
      }
    });
  };
}
