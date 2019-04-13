import React, { Component } from 'react';
import './App.css';
import { Container, Menu, Button, Image, Grid, Card, Icon } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu fixed='top' stackable compact>
          <Menu.Item as='a' header>
            <Icon name='gamepad' />
          </Menu.Item>

          <Container>

          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Grid columns={3} doubling stackable>
            <Grid.Column>
              <Card>
                <Image src='/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header>Multiple</Card.Header>
                  <Card.Description>Multiple Games.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Clicked
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>

          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
