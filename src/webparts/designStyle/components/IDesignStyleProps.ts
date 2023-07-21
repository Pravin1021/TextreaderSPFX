import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IDesignStyleProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
