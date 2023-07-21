declare interface IDesignStyleWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'DesignStyleWebPartStrings' {
  const strings: IDesignStyleWebPartStrings;
  export = strings;
}
