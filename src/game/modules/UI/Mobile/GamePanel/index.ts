import { Container } from "pixi.js-legacy";
import { SpinButton } from "../../entities/SpinButton";
import { TextFieldAdorment } from "../../entities/TextFieldAdorment";
import { theme } from "../../style";
import { TextField } from "../../entities/TextField";
import { SoundButton } from "../../entities/SoundButton";
import { Position, ScreenVersion } from "../../../types";
import { MaskManager } from "../../../manager";
import { GameController } from "../../gamePanelController";
import { FreeGamesCounter } from "../../entities/FreeGamesCounter";
import { TotalBetBlock } from "../../entities/TotalBetBlock";
import { Menu } from "../../entities/Menu";
import { AutoButton } from "../../entities/AutoButton";

type GameControlType = {
  position: Position;
  manager: MaskManager;
};

export class MobileGamePanel extends Container {
  public spinButton: SpinButton;
  public balanceAdorment: TextFieldAdorment;
  public balance: TextField;
  public winAmountAdorment: TextFieldAdorment;
  public winAmount: TextField;
  public soundButton: SoundButton;
  public freeGameCounter: FreeGamesCounter;
  public totalBetBlock!: TotalBetBlock;
  public menu: Menu;
  public autoButton: AutoButton;
  private controller: GameController;


  constructor({ position, manager }: GameControlType) {
    super();
    this.position.set(position.x, position.y);
    const { balance } = manager.state.gameState;
    this.controller = new GameController({
      manager,
      ui: this,
    });

    this.spinButton = new SpinButton({
      position: { x: 0, y: 870 },
      onClick() {
        const { isRunSpin, isRunRotateAnimation } = manager.state.gameState;
        if (!isRunSpin) {
          manager.spin();
        }

        if (isRunRotateAnimation) {
          manager.emitter.spiningSpeedUp();
        }
      },
      scaleSize: 0.65,
      manager,
    });
    this.autoButton = new AutoButton({
      position: { x: 170, y: 910 },
      onClick: () => {
        const { isAutoMode } = manager.getValue("autoMode");
        if (isAutoMode) {
          manager.setValue("setAutoMode", false);
          return;
        }
        const { isOpenModal } = manager.getValue("gameState");
        manager.setValue("setVisibleModal", !isOpenModal);
        manager.setValue("setActiveModalTab", "auto");
      },
      scaleSize: 1.5,

    });
    this.autoButton.scale.set(0.8)
    this.autoButton.position.set(180, 870)
    this.autoButton.visible = true;

    this.soundButton = new SoundButton({
      position: { x: -145, y: 920 },
    });

    this.menu = new Menu({
      position: { x: -230, y: 920 },
      onClick: () => {
        const { isOpenModal } = manager.getValue("gameState");
        manager.setValue("setVisibleModal", !isOpenModal);
        manager.setValue("setActiveModalTab", "bet");
      },
    });

    this.balanceAdorment = new TextFieldAdorment({
      body: "BALANCE",
      fontSize: theme.mobile.fontSize.modalTitle,
    });

    this.balance = new TextField({
      position: { x: -300, y: 20 },
      defaultValue: balance,
      adornment: this.balanceAdorment,
      valueStyle: {
        fontSize: theme.mobile.fontSize.primary,
      },
    });

    this.winAmountAdorment = new TextFieldAdorment({
      body: "WIN",
      fontSize: theme.mobile.fontSize.modalTitle,
    });

    this.winAmount = new TextField({
      position: { x: 0, y: 20 },
      defaultValue: Number(manager.state.sesionResult?.game_result.win_amount) || 0,
      adornment: this.winAmountAdorment,
      valueStyle: {
        fontSize: theme.mobile.fontSize.primary,
      },
    });

    this.freeGameCounter = new FreeGamesCounter({
      position: { x: 0, y: 738 },
      screenVersion: ScreenVersion.MOBILE,
    });
    this.freeGameCounter.position.set(0, 730)

    this.totalBetBlock = new TotalBetBlock({
      position: { x: -262, y: 980 },
      manager,
      scaleSize: 0.7,
      onClick(byttonKey) {
        manager.setValue("setTotalBet", { byttonKey });
      },
    });

    this.addChild(
      this.soundButton,
      this.menu,
      this.balance,
      this.winAmount,
      this.freeGameCounter,
      this.totalBetBlock,
      this.spinButton,
      this.autoButton,

    );
  }

  destroy = () => {
    this.controller.destroy();
    this.spinButton.destroy();
  };
}
