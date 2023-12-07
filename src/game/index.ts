import { PixiApp } from "./modules/App";
import { MaskManager } from "./modules/manager";
import { PostError } from "./modules/manager/utils/postFetch";
import { getTicketValueFromUrl } from "./utils/getTicketValueFromUrl";

type OptionsType = {
  onError: (error: PostError) => void;
};

type MaskSlotType = {
  canvasWrapper: HTMLDivElement;
  options?: OptionsType;
};

export class Mask {
  private app: PixiApp;
  private manager: MaskManager;
  public options: OptionsType;

  constructor({ canvasWrapper, options }: MaskSlotType) {
    const ticket = getTicketValueFromUrl(window.location.href) || "Something went wrong";
    this.options = options as OptionsType;
    this.manager = new MaskManager(ticket, this);
    this.app = new PixiApp(canvasWrapper, this.manager);
  }

  destroy = () => {
    this.app.destroy();
  };
}
