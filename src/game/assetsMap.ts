import { ScreenVersion } from "./modules/types";

const baseMobilePath = "./assets/UI/mobile";
const baseDesktopPath = "./assets/UI/desktop";
const commonTextures = "./assets/UI/common";
const baseSpinePath = "./assets";

export const fonts = ["Berenika"];

export const assetsMap = {
  common: [
    {
      name: "totalBetArrow",
      url: `${commonTextures}/total_bet_btn_arrow.webp`,
    },
    {
      name: "totalBetBlockButton",
      url: `${commonTextures}/totalBetBlockButton.webp`,
    },
    {
      name: "totalBetBlockButtonHover",
      url: `${commonTextures}/totalBetBlockButtonHover.webp`,
    },
    {
      name: "totalBetField",
      url: `${commonTextures}/totalBetField.webp`,
    },
    {
      name: "freeCounterBg",
      url: `${commonTextures}/freeCounterBg.webp`,
    },
    {
      name: "infinity",
      url: `${commonTextures}/modal/infinity.webp`,
    },
    {
      name: "ifWinIcon",
      url: `${commonTextures}/modal/ifWinIcon.webp`,
    },
    {
      name: "modalButtonHover",
      url: `${commonTextures}/modal/modalButtonHover.webp`,
    },
    {
      name: "modalButton",
      url: `${commonTextures}/modal/modalButton.webp`,
    },
    {
      name: "skipIcon",
      url: `${commonTextures}/skip.webp`,
    },
    {
      name: "slotParticle",
      url: `${commonTextures}/slotParticle.webp`,
    },
    {
      name: "autoButtonArrow",
      url: `${commonTextures}/auto_button_arrow.webp`,
    },
    {
      name: "slotDimming",
      url: `${commonTextures}/slotDimming.webp`,
    },
    {
      name: "purpleMask",
      url: `${commonTextures}/purpleMask.webp`,
    },
    {
      name: "blackMask",
      url: `${commonTextures}/blackMask.webp`,
    },
    {
      name: "mintMask",
      url: `${commonTextures}/mintMask.webp`,
    },
    {
      name: "wildIcon",
      url: `${commonTextures}/multiplayer.webp`,
    },
    {
      name: "wildIconX",
      url: `${commonTextures}/wildIconWithX.webp`,
    },
    {
      name: "wildRow",
      url: `${commonTextures}/wildsRow.webp`,
    },
    {
      name: "miniSlot",
      url: `${commonTextures}/miniSlot.webp`,
    },
    {
      name: "lightblueMask",
      url: `${commonTextures}/lightblueMask.webp`,
    },
    {
      name: "redMask",
      url: `${commonTextures}/redMask.webp`,
    },
    {
      name: "blueMask",
      url: `${commonTextures}/blueMask.webp`,
    },
    {
      name: "orangeMask",
      url: `${commonTextures}/orangeMask.webp`,
    },
    {
      name: "yellowMask",
      url: `${commonTextures}/yellowMask.webp`,
    },
    {
      name: "blackoutBg",
      url: `${commonTextures}/blackout_bg.webp`,
    },
    {
      name: "soundBtn",
      url: `${commonTextures}/sound_btn.webp`,
    },
    {
      name: "soundBtnHover",
      url: `${commonTextures}/sound_btn_hover.webp`,
    },
    {
      name: "soundOn",
      url: `${commonTextures}/sound_on.webp`,
    },
    {
      name: "soundOff",
      url: `${commonTextures}/sound_off.webp`,
    },
    {
      name: "menuBtn",
      url: `${commonTextures}/menu_btn.webp`,
    },
    {
      name: "menuHover",
      url: `${commonTextures}/menu-hover.webp`,
    },
    {
      name: "spinButton",
      url: `${commonTextures}/spinButton.webp`,
    },
    {
      name: "spinArrow",
      url: `${commonTextures}/spin_arrow.webp`,
    },
    {
      name: "spinButtonHover",
      url: `${commonTextures}/spinButtonHover.webp`,
    },
    {
      name: "autoBtn",
      url: `${commonTextures}/auto_mode_btn.webp`,
    },
    {
      name: "autoButtonHover",
      url: `${commonTextures}/auto_button_hover.webp`,
    },
    {
      name: "autoModalBtnHover",
      url: `${commonTextures}/modal/auto_btn_hover.webp`,
    },
    {
      name: "autoModalBtn",
      url: `${commonTextures}/modal/auto_btn.webp`,
    },
    {
      name: "modalBtnHover",
      url: `${commonTextures}/modal/modal_tabs_btn_hover.webp`,
    },
    {
      name: "infoModalBtn",
      url: `${commonTextures}/modal/info_btn.webp`,
    },
    {
      name: "tableModalBtn",
      url: `${commonTextures}/modal/table_btn.webp`,
    },
    {
      name: "totalBetModalBtn",
      url: `${commonTextures}/modal/total_bet.webp`,
    },
  ],
  spines: [
    {
      name: "freeSpins",
      url: `${baseSpinePath}/notification/Free Spins/Free Spins.json`,
    },
    {
      name: "background",
      url: `${baseSpinePath}/notification/Background/Background Egypt.json`,
    },
    {
      name: "slot_frame",
      url: `${baseSpinePath}/notification/Frame/imported.json`,
    },
    {
      name: "win",
      url: `${baseSpinePath}/notification/W/MSK_W.json`,
    },
    {
      name: "bigWin",
      url: `${baseSpinePath}/notification/BW/MSK_BW.json`,
    },
    {
      name: "epicWin",
      url: `${baseSpinePath}/notification/EW/MSK_EW.json`,
    },
    {
      name: "wild",
      url: `${baseSpinePath}/slots/Multi/Multi.json`,
    },
    {
      name: "yellowMask-s",
      url: `${baseSpinePath}/slots/Mask_7/Mask_7.json`,
    },
    {
      name: "blueMask-s",
      url: `${baseSpinePath}/slots/Mask_3/Mask_3.json`,
    },
    {
      name: "redMask-s",
      url: `${baseSpinePath}/slots/Mask_4/Mask_4.json`,
    },
    {
      name: "lightblueMask-s",
      url: `${baseSpinePath}/slots/Mask_6/Mask_6.json`,
    },
    {
      name: "mintMask-s",
      url: `${baseSpinePath}/slots/Mask_2/Mask_2.json`,
    },
    {
      name: "blackMask-s",
      url: `${baseSpinePath}/slots/Mask_5/Mask_5.json`,
    },
    {
      name: "purpleMask-s",
      url: `${baseSpinePath}/slots/Mask_1/Mask_1.json`,
    },
    {
      name: "orangeMask-s",
      url: `${baseSpinePath}/slots/Mask_8/Mask_8.json`,
    },
  ],
  [ScreenVersion.DESKTOP]: [
    {
      name: "closeModalBtn-d",
      url: `${baseDesktopPath}/close_btn.webp`,
    },
    {
      name: "modalBg-d",
      url: `${baseDesktopPath}/modal_bg.webp`,
    },
    {
      name: "panel-d",
      url: `${baseDesktopPath}/panel.webp`,
    },
    {
      name: "slotsField-d",
      url: `${baseDesktopPath}/slots_bg2.webp`,
    },
    {
      name: "totalBet-d",
      url: `${baseDesktopPath}/total_bet_btn.webp`,
    },
    {
      name: "totalBetHover-d",
      url: `${baseDesktopPath}/total_bet_btn_hover.webp`,
    },
  ],
  [ScreenVersion.MOBILE]: [
    {
      name: "slotsField-m",
      url: `${baseMobilePath}/slots_bg.webp`,
    },
    {
      name: "spinButtonBg",
      url: `${baseMobilePath}/spinButtonBg.webp`,
    },
    {
      name: "closeModalBtn-m",
      url: `${baseMobilePath}/close_btn.webp`,
    },
    {
      name: "modalBg-m",
      url: `${baseMobilePath}/modal_bg.webp`,
    },
    {
      name: "gameBg-m",
      url: `${baseMobilePath}/mobile_bg.webp`,
    },
    {
      name: "tabsField-m",
      url: `${baseMobilePath}/tabsField.webp`,
    },
  ],
} as const;
