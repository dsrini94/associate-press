import React, { Component } from 'react';



import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab } from 'semantic-ui-react';

const twitterData = [
  {
    name:'OnePlus',
    logo:'https://www.sketchappsources.com/resources/source-image/oneplus-logo.png',
    postedOn:'3 days ago',
    id:'@oneplus',
    content:'The OnePlus Bullets Wireless deliver the ultimate sound experience, with an Energy Tube to focus your music and 9.2mm drivers for more powerful bass 🎸 https://onepl.us/bw_5 ',
    image:'https://pbs.twimg.com/media/D1DtbOXU8AIffLM.jpg'
  },
  {
    name:'OnePlus',
    logo:'https://www.sketchappsources.com/resources/source-image/oneplus-logo.png',
    postedOn:'5 days ago',
    id:'@oneplus',
    content:'Tomorrow is #NoPhoneDay! Unplug. Switch off. Get offline. But before you do, read our manifesto to understand what #NoPhoneDay is about.',
    image:''
  },
  {
    name:'OnePlus',
    logo:'https://www.sketchappsources.com/resources/source-image/oneplus-logo.png',
    postedOn:'7 days ago',
    id:'@oneplus',
    content:'Advanced internal DAC with high-res audio support gives you a vibrant and immersive listening experience. Get your Type-C Bullet Earphones right here https://onepl.us/typeC_bullets ',
    image:'https://pbs.twimg.com/media/D0jXSaCUwAIkE3H.jpg'
  }
]



export default class TwitterFeed extends Component {

  constructor(props){
    super(props);


  }
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}/>
          <Grid.Column width={11}>
            <Input style={{width:'95%'}} fluid icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Feed>
              {twitterData.map((item)=>{
                return(
                  <Feed.Event>
                    <Feed.Label style={{paddingTop:'1%'}} image={item.logo} />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>{item.name}</a>
                        <Feed.Date>{item.postedOn}</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                          {item.id}
                      </Feed.Meta>
                      <Feed.Extra text>
                        {item.content}
                        {item.image.length!=0?
                            <Image style={{marginTop:'10px'}} src={item.image}/>
                          :
                          ""
                        }
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
