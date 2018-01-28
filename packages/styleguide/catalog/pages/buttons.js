import React from "react";
import { markdown, ReactSpecimen } from "catalog";

import { Button, Icon } from "../components";

export default () => markdown`
  ## Primary Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button primary handleClick={evt => console.log(evt)}>
        Primary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button primary href="http://twitter.com" target="_blank">
        <Icon name="twitter" /> &nbsp; Primary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button primary href="http://twitter.com" target="_blank">
        Primary button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary iconic>
        i
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button primary href="http://twitter.com" target="_blank" iconic>
        <Icon name="twitter" />
      </Button>
    </ReactSpecimen>
  )}

  ## Secondary Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button secondary handleClick={evt => console.log(evt)}>
        Secondary button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button secondary href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Secondary Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button secondary href="http://facebook.com" target="_blank">
        Secondary button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button secondary iconic>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button secondary href="http://facebook.com" target="_blank" iconic>
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

  ## Alert Buttons

  ${(
    <ReactSpecimen span={2}>
      <Button alert handleClick={evt => console.log(evt)}>
        Inverted button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button alert href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Inverted Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2}>
      <Button alert href="http://facebook.com" target="_blank">
        Inverted button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button alert iconic>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3}>
      <Button alert href="http://facebook.com" target="_blank" iconic>
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

  ## Inverted Buttons

  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted handleClick={evt => console.log(evt)}>
        Inverted button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted href="http://facebook.com" target="_blank">
        <Icon name="facebook" /> &nbsp; Inverted Button
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={2} dark>
      <Button inverted href="http://facebook.com" target="_blank">
        Inverted button that can go onto two lines
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Button inverted iconic>
        ?
      </Button>
    </ReactSpecimen>
  )}
  ${(
    <ReactSpecimen span={3} dark>
      <Button inverted href="http://facebook.com" target="_blank" iconic>
        <Icon name="facebook" />
      </Button>
    </ReactSpecimen>
  )}

`;