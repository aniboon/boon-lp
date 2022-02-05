import { Chrono } from "react-chrono";


const items = [
  {
    title: "Phase 1",
    cardTitle: "Feb 2022",
    url: "",
    cardSubtitle:
      "Non-profits and digital artists to create NFT collections to raise funds. Set up communities of donors and Non-Profits",
    cardDetailedText: ``
  },
  {
    title: "Phase 2",
    cardTitle: "June 2022",
    cardSubtitle: `Set up the Boon Platform, This platform will allow charities to release their NFT collections for donors to buy and trade`,
    cardDetailedText: ``
  },
  {
    title: "Phase 3",
    cardTitle: "Dec 2022",
    cardSubtitle: `The boon social exchange allows metric tracking and real time insights from every single partner on our social exchange platform`,
    cardDetailedText: ``
  }
];

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>What we plan to do?</h2>

              <h3>We want to incentivize charity and make it interactive.</h3>
              <div style={{ width: "400px", height: "850px" }}>
                <Chrono
                  items={items}
                  mode="HORIZONTAL"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
