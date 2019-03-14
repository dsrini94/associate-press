import React, { Component } from 'react';

import YouTube from 'react-youtube';

import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab, Table } from 'semantic-ui-react';

const youtubeData = [
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'3 days ago',
    title:'OnePlus 6T - Details Matter',
    content:'At OnePlus. we believe the difference is in the details. Experience it yourself https://onepl.us/6T_YT. Every aspect is considered, from the time it takes you to unbox to creating a fast and smooth software experience.',
    videoUrl:'a6LYjCvSAsw',
    platform:'Facebook'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'5 days ago',
    title:'OnePlus 6T McLaren Edition - Salute to Speed',
    content:'Its time to accelerate! Begin your Salute to Speed in earnest with the OnePlus 6T McLaren Edition, the fastest and most powerful OnePlus flagship ever. Learn more at http://onepl.us/6tmclaren_yt. Equipped with 10 GB of RAM, the all-new Warp Charge 30, and a custom design inspired by the legacy of McLaren, this Limited Edition device delivers power and style in spades.',
    videoUrl:'5I2XxMhbvn4',
    platform:'Twitter'
  },
  {
    name:'OnePlus',
    logo:'https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/p50x50/27336954_922762044550386_4755505013017402447_n.png?_nc_cat=1&_nc_ht=scontent.fblr1-4.fna&oh=b850ae439c79e53d520a918f0574ddcd&oe=5D183E32',
    postedOn:'7 days ago',
    title:'OnePlus 6T McLaren Edition - Launch Event Recap',
    content:'Are you ready for 60 seconds of speed? Get ready, set, lets recap. The OnePlus 6T McLaren Edition launched in style at the McLaren Technology Centre. Joined by our community and some of techs biggest names, we unveiled our fastest device yet. Get a taste of Warp Charge 30 and 10 GB of RAM today at https://onepl.us/6tmclaren_yt',
    videoUrl:'khIYlW-sUJw',
    platform:'Instagram'
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
      width: '380',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Grid>
        {youtubeData.map((item)=>{
          let dots;
          if(item.content.length < 65) {
            dots = "";
          }
          else {
            dots = "...";
          }
          return(
            <Grid.Row>
              <Grid.Column width={1}/>
              <Grid.Column width={8}>
                <YouTube
                    videoId={item.videoUrl}
                    opts={opts}
                    onReady={this._onReady}
                  />
              </Grid.Column>
              <Grid.Column width={7}>
                <Table celled striped>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell >
                         Platform
                      </Table.Cell>
                      <Table.Cell>{item.platform}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell width={5}>
                         Published on
                      </Table.Cell>
                      <Table.Cell>{item.postedOn}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell >
                         Published by
                      </Table.Cell>
                      <Table.Cell>{item.name}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell >
                         Title
                      </Table.Cell>
                      <Table.Cell>{item.title}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell >
                         Description
                      </Table.Cell>
                      <Table.Cell style={{cursor:'pointer'}} title={item.content}>{item.content.substr(0,65) + dots}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          )
        })}

      </Grid>
    );
  }
}
