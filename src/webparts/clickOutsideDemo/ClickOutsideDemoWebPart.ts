import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
} from '@microsoft/sp-webpart-base';

import DropdownContainer from './components/DropdownContainer';
import { IDropdownContainerProps } from './components/IDropdownContainerProps';

export interface IDropdownContainerWebPartProps {

}

export default class DropdownContainerWebPart extends BaseClientSideWebPart<IDropdownContainerWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDropdownContainerProps > = React.createElement( DropdownContainer );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


}
