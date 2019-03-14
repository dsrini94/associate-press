import React, { Component } from 'react';

import { Grid, Header, Item, Image, Input, Icon, List, Button, Segment, Divider, Feed, Tab, Menu } from 'semantic-ui-react';

import AppBar from './../../components/appbar/appbar.js'
import YouTube from 'react-youtube';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { Link } from "react-router-dom";


import TwitterFeed from '../../components/twitterFeed/twitterFeed.js';

import FacebookContent from '../../components/searchedContent/facebookContent.js';
import InstagramContent from '../../components/searchedContent/instagramContent.js';
import TwitterContent from '../../components/searchedContent/twitterContent.js';
import YoutubeContent from '../../components/searchedContent/youtubeContent.js';

import AdvancedSearchContent from '../../components/advancedSearchContent/advancedSearchContent.js';

import './advancedSearch.css';

const data = [
  {
    image:'https://i.gadgets360cdn.com/products/large/1540904856_635_oneplus_6t.jpg',
    header:'One Plus 6T March',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fb0be09f425cc5175fb413bc03c32dd0d%2F206235889%2Fpubg-ed.jpg&client=amp-blogside-v2&signature=ce4f1d86543a1b6c830cde42af44701eeb34bab9',
    header:'PUBG Addiction',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://usatftw.files.wordpress.com/2019/03/afp-afp_1e96fe.jpg?w=1000&h=600&crop=1',
    header:'Real Madrid',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://s18798.pcdn.co/dispatch/wp-content/uploads/sites/8960/2018/01/B_Business_Studies_banner_template_01-copy.jpg',
    header:'Business',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/5331dfe2e4b0f77da2ddde51/5c7703d9ec212ddb38d18bad/1551364435190/mgot-header-s8-character-art-1024x576.jpg?format=1000w',
    header:'Game of Thrones',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  }
]

const data1 = [
  {
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/pulwama_2_0.jpeg?OvpljgWWqv.tOVTYT1ba4y4V9BlElX2b',
    header:'One Plus 6T March',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://handluggageonly.co.uk/wp-content/uploads/2018/02/Hand-Luggage-Only-4-1.jpg',
    header:'PUBG Addiction',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://data.whicdn.com/images/27336362/original.jpg',
    header:'Real Madrid',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/04/niagara-falls-940x629.jpg',
    header:'Business',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZJOqcKdocaq7T_gG6n6Xk4n6OmRfUkMNocX8FkNTouHGuWM3',
    header:'Game of Thrones',
    description:'The US had reportedly barred Pakistan from using the F-16s against any third country '
  }
]

const post_phrases = ["modi","1000","crores","modi","1000","crores","modi","1000","crores"];
const extracted_from_video_phrases = ["fake","news","trending"];
const panes = [
  { menuItem: 'Twitter', render: () => <Tab.Pane attached={false}><TwitterContent/></Tab.Pane> },
  { menuItem: 'Facebook', render: () => <Tab.Pane attached={false}><FacebookContent/></Tab.Pane> },
  { menuItem: 'Instagram', render: () => <Tab.Pane attached={false}><InstagramContent/></Tab.Pane> },
  { menuItem: 'Youtube', render: () => <Tab.Pane attached={false}><YoutubeContent/></Tab.Pane> }
]
export default class Video extends Component {

  constructor(props){
    super(props);
    this.state = {
      loadingComp:'',
      selectedKeywords:[]
    }
    this.handleTagsInputChange = this.handleTagsInputChange.bind(this);
  }

  componentDidMount(){
    var comp = (<div>
                  <div>
                    <Image src="https://www.htxt.co.za/wp-content/uploads/2014/11/GAME-OF-THRONES.jpg" />
                    <div className="videoTileSegment">
                      <Header className="heroText" inverted as={'h2'}>Game of Thrones Season 8 Trailer: Daenerys, Jon, Bran and Arya are Ready to Battle With the Dead</Header>
                    </div>
                  </div>

                  <div>
                    <Grid padded columns={3}>
                      {
                        data1.map((item)=>(<Grid.Column>
                          <Image src={item.image} />
                          <Header as={'h4'} className="vidTitle">{item.header}</Header>
                          <p className="vidDesc">Game of Thrones Season 8 Trailer: Daenerys, Jon, Bran and Arya are Ready to Battle With the Dead</p>
                        </Grid.Column>))
                      }

                    </Grid>
                  </div>
                </div>)

          this.setState({loadingComp:comp});
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  postPhrasesClick(data){
    let selectedKeywords = this.state.selectedKeywords;
    if(!selectedKeywords.includes(data)){
      selectedKeywords.push(data)
    }
    this.setState({selectedKeywords:selectedKeywords})
  }
  handleTagsInputChange(tags){
    this.setState({selectedKeywords:tags});
  }

  render(){
    const opts = {
      height: '200',
      width: 'auto',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    let list=(<span>
      <Header inverted className="YouTubeHeader">Previous Searches</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <List divided verticalAlign='middle'>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>
              <List.Content>
                  Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.
              </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>

                <List.Content>Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>

                <List.Content>Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>

                <List.Content>Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>

                <List.Content>Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>
                  <Button primary>Go</Button>
                </List.Content>

                <List.Content>Lorem ipsum dolor sit amet, lorem eleifend dignissim ad qui, id usu noster torquatos. Mel ad indoctum forensibus conclusionemque, nec saepe evertitur ad. Case reprehendunt at cum, mei no consul aliquam ponderum. Sit et persius disputationi. In purto contentiones mel, et cum minimum electram, nam no pertinax sapientem sententiae. Ut quando honestatis theophrastus est.</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    </span>);
  let youtubeData = (<Grid>
    <Grid.Row>
      <Grid.Column width={1}/>
      <Grid.Column width={7}>
        <YouTube
            videoId="veZs75jlAlw"
            opts={opts}
            onReady={this._onReady}
          />
          <Header as='h4'>Donald Trump To CNN Reporter: You Are Fake News | CNBC</Header>
          <Divider style={{marginTop:'5%'}}/>
      </Grid.Column>

      <Grid.Column width={8}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h5">Post</Header>
            </Grid.Column>
            {/* <Grid.Column width={1}/> */}
            <Grid.Column width={13}>
              <Segment fluid compact raised padded style={{paddingBottom:'2px',marginRight:'0px'}}>
              {post_phrases.map((item)=>{
                return(
                  <Segment onClick={this.postPhrasesClick.bind(this,item)} inverted color='grey' style={{float:'left',marginTop:'-10px',marginLeft:'2px',borderRadius:'25px',fontSize: '10px',cursor:'pointer'}} compact>{item}</Segment>
                )
              })}
              </Segment>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as="h5" >Extracted from Video</Header>
            </Grid.Column>
            {/* <Grid.Column width={1}/> */}
            <Grid.Column width={13}>
              <Segment fluid compact raised padded style={{paddingBottom:'2px',marginRight:'0px'}}>
              {extracted_from_video_phrases.map((item)=>{
                return(
                  <Segment onClick={this.postPhrasesClick.bind(this,item)} inverted color='grey' style={{float:'left',marginTop:'-10px',marginLeft:'2px',borderRadius:'25px',fontSize: '10px',cursor:'pointer'}} compact>{item}</Segment>
                )
              })}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
      {/* <Grid.Column width={1}/> */}
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={1} />
      <Grid.Column width={3} style={{paddingTop:'1%'}}>
          <Header as="h3">Search Terms</Header>
      </Grid.Column>
      <Grid.Column width={11}>
        <TagsInput value={this.state.selectedKeywords} onChange={this.handleTagsInputChange} />
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={15} style={{textAlign:'right'}}>
        <Button.Group>
          <Button primary>Search</Button>
          <Button.Or />
          <Button primary>Advanced Search</Button>
        </Button.Group>
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid.Row>
  </Grid>);
  let searchData = (<Grid>
    <Grid.Row>
      <Grid.Column width={2}/>
      <Grid.Column width={3}>
        <Header as="h4">Searching for</Header>
      </Grid.Column>
      <Grid.Column width={10}>
        {post_phrases.map((item)=>{
          return(
            <Segment inverted color='grey' style={{float:'left',marginTop:'-10px',marginLeft:'2px',borderRadius:'25px',fontSize: '10px'}} compact>{item}</Segment>
          )
        })}
      </Grid.Column>
      <Grid.Column width={1}/>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}/>
      <Grid.Column width={3}>
        <Header as="h4">From Link</Header>
      </Grid.Column>
      <Grid.Column width={10}>
        <a href="https://www.youtube.com/watch?v=veZs75jlAlw">https://www.youtube.com/watch?v=veZs75jlAlw</a>
      </Grid.Column>
      <Grid.Column width={1}/>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={2}/>
      <Grid.Column width={14}>
        <Tab menu={{ pointing: true }} panes={panes} />
      </Grid.Column>
    </Grid.Row>
  </Grid>);
  let advancedSearchData = (
    <Grid>
      <Grid.Row style={{marginTop:'5%'}}>
        <Grid.Column width={2}/>
        <Grid.Column width={3}>
          <Header as="h4">Searching Link</Header>
        </Grid.Column>
        <Grid.Column width={10}>
          <a href="https://www.youtube.com/watch?v=veZs75jlAlw">https://www.youtube.com/watch?v=veZs75jlAlw</a>
        </Grid.Column>
        <Grid.Column width={1}/>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <AdvancedSearchContent/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
    return(
      <div>
        <AppBar handleEnter={this.handleEnter}/>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}/>
            <Grid.Column width={10} >
              <Input style={{width:'80%'}}  placeholder='Search for videos...' />
              <Button circular color='grey' style={{left: '-6%',position: 'relative',bottom: '3%'}} size='tiny' icon='search' as={Link} to='/youtubeResult' />
              {/* <Input fluid icon='search' placeholder='Search...' /> */}
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              {advancedSearchData}
            </Grid.Column>

            <Grid.Column width={6} >
              <Header inverted className="YouTubeHeader">Latest UGC Contacts</Header>
              <TwitterFeed/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
