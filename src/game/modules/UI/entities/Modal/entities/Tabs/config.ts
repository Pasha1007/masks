import { ResourceNames } from "../../../../../types";
import { ModalTabsType } from "../../type";

type TabsConfigType = {
  tabKey: ModalTabsType;
  texturesForBtn: ResourceNames[];
  additionlText?: string
};

export const tabsConfig: TabsConfigType[] = [
  {
    tabKey: "auto",
    texturesForBtn: ["autoModalBtn", "modalBtnHover"],
    additionlText: "A"
  },
  {
    tabKey: "bet",
    texturesForBtn: ["totalBetModalBtn", "modalBtnHover"],
  },
  {
    tabKey: "table",
    texturesForBtn: ["tableModalBtn", "modalBtnHover"],
  },
];
