import React from 'react';


import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName

} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/103189479?v=4'}}/>
              <User>
                <UserGreetings>Olá,</UserGreetings>
                <UserName>Leandro</UserName>
              </User>
          </UserInfo>
          
        </UserWrapper>
        
      </Header>
    </Container>
  )
}

