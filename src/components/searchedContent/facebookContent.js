import React, { Component } from 'react';



import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab, Card } from 'semantic-ui-react';

const facebookData = [
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'23 hrs',
    content:'The OnePlus Bullets Wireless deliver the ultimate sound experience, with an Energy Tube to focus your music and 9.2mm drivers for more powerful bass 🎸 https://onepl.us/bw_5 ',
    image:'https://pbs.twimg.com/media/D1DtbOXU8AIffLM.jpg',
    likesCount:'12',
    commenntsCount:'34',
    sharesCount:'123'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'17 hrs',
    content:'Tomorrow is #NoPhoneDay! Unplug. Switch off. Get offline. But before you do, read our manifesto to understand what #NoPhoneDay is about.',
    image:'',
    likesCount:'22',
    commenntsCount:'44',
    sharesCount:'223'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'March 8 at 12:07 PM',
    content:'Advanced internal DAC with high-res audio support gives you a vibrant and immersive listening experience. Get your Type-C Bullet Earphones right here https://onepl.us/typeC_bullets ',
    image:'https://pbs.twimg.com/media/D0jXSaCUwAIkE3H.jpg',
    likesCount:'32',
    commenntsCount:'54',
    sharesCount:'323'
  }
]



export default class FacebookContent extends Component {

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
              {facebookData.map((item)=>{
                return(
                  <Feed.Event>
                    <Feed.Label style={{paddingTop:'1%'}} image={item.logo} />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>{item.name}</a>
                        <Icon name="ellipsis horizontal" style={{float:'right'}}/>
                      </Feed.Summary>
                      <Feed.Meta>
                          {item.postedOn} <Icon title="public" name='world'/>
                      </Feed.Meta>
                      <Feed.Extra text>
                        {item.content}
                        {item.image.length!=0?
                            <Image style={{marginTop:'10px'}} src={item.image}/>
                          :
                          ""
                        }
                        <Grid columns={3} divided style={{marginTop:'1%'}}>
                          <Grid.Row  style={{marginLeft:'3%',marginRight:'3%'}}>
                            <Grid.Column>
                              <Icon name="thumbs up outline"/> {item.likesCount} Likes
                            </Grid.Column>
                            <Grid.Column>
                              <Icon name="comment outline"/> {item.commenntsCount} Comments
                            </Grid.Column>
                            <Grid.Column>
                              <Icon name="share"/> {item.sharesCount} Shares
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
