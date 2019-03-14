import React, { Component } from 'react';

import YouTube from 'react-youtube';

import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab } from 'semantic-ui-react';

const youtubeData = [
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'3 days ago',
    title:'OnePlus 6T - Details Matter',
    content:'At OnePlus. we believe the difference is in the details. Experience it yourself https://onepl.us/6T_YT. Every aspect is considered, from the time it takes you to unbox to creating a fast and smooth software experience.',
    videoUrl:'a6LYjCvSAsw',
    likesCount:'10',
    dislikesCount:'20',
    viewsCount:'145'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'5 days ago',
    title:'OnePlus 6T McLaren Edition - Salute to Speed',
    content:'Its time to accelerate! Begin your Salute to Speed in earnest with the OnePlus 6T McLaren Edition, the fastest and most powerful OnePlus flagship ever. Learn more at http://onepl.us/6tmclaren_yt. Equipped with 10 GB of RAM, the all-new Warp Charge 30, and a custom design inspired by the legacy of McLaren, this Limited Edition device delivers power and style in spades.',
    videoUrl:'5I2XxMhbvn4',
    likesCount:'20',
    dislikesCount:'30',
    viewsCount:'156'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'7 days ago',
    title:'OnePlus 6T McLaren Edition - Launch Event Recap',
    content:'Are you ready for 60 seconds of speed? Get ready, set, lets recap. The OnePlus 6T McLaren Edition launched in style at the McLaren Technology Centre. Joined by our community and some of techs biggest names, we unveiled our fastest device yet. Get a taste of Warp Charge 30 and 10 GB of RAM today at https://onepl.us/6tmclaren_yt',
    videoUrl:'khIYlW-sUJw',
    likesCount:'30',
    dislikesCount:'40',
    viewsCount:'178'
  }
]



export default class YoutubeContent extends Component {

  constructor(props){
    super(props);


  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '250',
      width: '400',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Feed>
              {youtubeData.map((item)=>{
                return(
                  <Feed.Event>
                    <Feed.Label style={{paddingTop:'1%'}} image={item.logo} />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>{item.name}</a>
                      </Feed.Summary>
                      <Feed.Meta>
                          published on {item.postedOn}
                      </Feed.Meta>
                      <Feed.Extra text>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column>
                              <YouTube
                                  videoId={item.videoUrl}
                                  opts={opts}
                                  onReady={this._onReady}
                                />
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column>
                              <Header as='h3'>
                                {item.title}
                              </Header>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row style={{marginTop:'-5%'}}>
                            <Grid.Column>
                                {item.content}
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column width={4}>
                              <Header as='h5'>{item.viewsCount} Views</Header>

                            </Grid.Column>
                            <Grid.Column width={12} style={{textAlign:'right'}}>
                              <Icon name="thumbs up"/>{item.likesCount} &nbsp;&nbsp;&nbsp;&nbsp;
                              <Icon name="thumbs down"/>{item.dislikesCount}&nbsp;&nbsp;&nbsp;&nbsp;
                              <Icon name="share"/>Share&nbsp;&nbsp;&nbsp;&nbsp;
                              <Icon name="grid layout"/>Save&nbsp;&nbsp;&nbsp;&nbsp;
                              <Icon name="ellipsis horizontal"/>
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
