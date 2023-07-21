import * as React from "react";
import styles from "./DesignStyle.module.scss";
import { IDesignStyleProps } from "./IDesignStyleProps";
import { escape } from "@microsoft/sp-lodash-subset";
import Design from "./Design";
import { sp } from "@pnp/sp/presets/all";

import "./style.css";
import Dashboard from "./Dashboard";
import Textreader from "./Textreader";

export default class DesignStyle extends React.Component<
  IDesignStyleProps,
  {}
> {
  constructor(prop: IDesignStyleProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IDesignStyleProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    return <Textreader />;
  }
}
