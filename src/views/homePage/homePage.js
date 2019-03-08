import React, { Component } from 'react';

import AppBar from './../../components/appbar/appbar.js'
import Video from './../../components/videos/video.js'

import { Grid, Header, Item, Image } from 'semantic-ui-react';

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

export default class HomePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      loadingComp:''
    }
    this.handleEnter = this.handleEnter.bind(this);
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

  handleEnter(){
    var comp = (
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
                )

          this.setState({loadingComp:comp});
  }

  render() {
    return (
      <div>
        <AppBar handleEnter={this.handleEnter}/>
        <Video loadingComp={this.state.loadingComp}/>
      </div>
    );
  }
}
