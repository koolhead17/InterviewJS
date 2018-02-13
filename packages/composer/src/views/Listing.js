/* eslint react/forbid-prop-types: 0 */

import React from "react";
import css from "styled-components";
import { arrayOf, func, object, shape, string } from "prop-types";

import {
  Action,
  Container,
  PageTitle,
  Separator,
  Stories,
  Story,
  UserMenu,
  color,
  setHeight
} from "interviewjs-styleguide";

const Page = css.div`
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
`;

const PageHead = css.div`
  align-items: center;
  background: ${color.greyWt};
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  &:after {
    ${setHeight("m")};
    background: linear-gradient(${color.greyWt}, rgba(247, 247, 247, 0));
    content: ' ';
    left: 0;
    position: absolute;
    right: 0;
    top: 100%;s
    width: 100%;
  }
`;

const PageBody = css.div`
`;

export default class Listing extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.createStory = this.createStory.bind(this);
  }
  createStory() {
    this.props.createStory("a title", "an intro", console.log(this.props));
  }
  render() {
    return (
      <Page key="Page">
        <PageHead>
          <Container flex={[1, 1, `${100 / 3}%`]} padded>
            <UserMenu data={this.props.user} />
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="center" padded>
            <PageTitle typo="h1">Your Stories</PageTitle>
          </Container>
          <Container flex={[1, 1, `${100 / 3}%`]} align="right" padded>
            <Action primary onClick={this.createStory}>
              Create new
            </Action>
          </Container>
        </PageHead>
        <Separator effect="silent" size="h" />
        <PageBody>
          <Container limit>
            <Stories>
              {this.props.stories.map((story, i) => (
                <Story
                  key={story.id}
                  i={i}
                  data={story}
                  onClick={() => this.props.router.push(`stories/${story.id}`)}
                />
              ))}
            </Stories>
          </Container>
        </PageBody>
      </Page>
    );
  }
}

Listing.propTypes = {
  createStory: func,
  router: object,
  stories: arrayOf(object),
  user: shape({
    name: string,
    id: string,
    avatar: string
  })
};

Listing.defaultProps = {
  createStory: null,
  stories: [],
  user: {},
  router: null
};
