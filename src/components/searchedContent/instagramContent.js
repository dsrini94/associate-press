import React, { Component } from 'react';



import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab } from 'semantic-ui-react';


const instagramData = [
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'3 days ago',
    id:'@oneplus',
    content:'The OnePlus Bullets Wireless deliver the ultimate sound experience, with an Energy Tube to focus your music and 9.2mm drivers for more powerful bass 🎸 https://onepl.us/bw_5 ',
    image:'https://pbs.twimg.com/media/D1DtbOXU8AIffLM.jpg',
    viewsCount:'12'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'5 days ago',
    id:'@oneplus',
    content:'Tomorrow is #NoPhoneDay! Unplug. Switch off. Get offline. But before you do, read our manifesto to understand what #NoPhoneDay is about.',
    image:'',
    viewsCount:'23'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'7 days ago',
    id:'@oneplus',
    content:'Advanced internal DAC with high-res audio support gives you a vibrant and immersive listening experience. Get your Type-C Bullet Earphones right here https://onepl.us/typeC_bullets ',
    image:'https://pbs.twimg.com/media/D0jXSaCUwAIkE3H.jpg',
    viewsCount:'34'
  }
]


export default class InstagramContent extends Component {

  constructor(props){
    super(props);


  }
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Feed>
              {instagramData.map((item)=>{
                return(
                  <Feed.Event>
                    <Feed.Label style={{paddingTop:'1%'}} image={item.logo} />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>{item.name}</a>
                      </Feed.Summary>
                      <Feed.Extra text style={{marginTop:'6%',marginLeft:'-10%'}}>
                        {/* {item.content} */}
                        {item.image.length!=0?
                            <Image style={{marginTop:'10px'}} src={item.image}/>
                          :
                          ""
                        }
                        <Grid divided style={{marginTop:'1%'}}>
                          <Grid.Row >
                            <Grid.Column width={1}>
                                <Icon name="heart outline"/>
                            </Grid.Column>
                            <Grid.Column width={1}>
                              <Icon name="comment outline"/>
                            </Grid.Column>
                            <Grid.Column width={1}>
                              <Icon name="upload"/>
                            </Grid.Column>
                            <Grid.Column width={13} style={{textAlign:'right'}}>
                              <Icon name="remove bookmark"/>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row style={{marginTop:'-4%'}}>
                            <Grid.Column>
                              <Header as="h5">{item.viewsCount} Views</Header>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row style={{marginTop:'-2%'}}>
                            <Grid.Column>
                              <span style={{fontWeight:'bold',fontSize:'14px'}}>{item.name}</span> &nbsp;&nbsp;&nbsp; {item.content}
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>

                      </Feed.Extra>
                      <Divider/>
                    </Feed.Content>
                  </Feed.Event>
                )
              })}
            </Feed>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
    );
  }
}
