import React, { Component } from 'react';

import { Grid, Header, Item, Image } from 'semantic-ui-react';

import './video.css';

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
export default class Video extends Component {

  constructor(props){
    super(props);
    this.state = {
      loadingComp:''
    }
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

  render(){
    return(
      <div>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.props.loadingComp}
            </Grid.Column>

            <Grid.Column width={6}>
              <Header inverted className="YouTubeHeader">Trending in YouTube</Header>

              <div className="itemDiv">
              <Item.Group items={data} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
