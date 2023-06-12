import React from 'react'
import IMG2 from '../../assets/R4U.gif'
import IMGCP from '../../assets/codePals.png'
import IMG from '../../assets/port.gif'
import IMGCC from '../../assets/jobs.jpg'
import IMGCA from '../../assets/chat.png'
import IMGPA from '../../assets/price-assist.png'
import IMGOH from '../../assets/Open-Source.png'
import IMGIP from '../../assets/IM.png'
import IMGR from '../../assets/rain.png'
import IMGED from '../../assets/emotion.png'
import IMGFM from '../../assets/Facemask.png'
import IMGP from '../../assets/product.png'
import IMGAI from '../../assets/AI.png'
import IMGW from '../../assets/weather.png'
import IMGFD from '../../assets/fire.png'
import IMGAS from '../../assets/AS.png'

import './portfolio.css'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});


const data = [
  {
    id: 1,
    image: IMGCP,
    title: 'CodePals',
    github: 'https://github.com/SourabHere/CodePals',
    demo: 'https://codepales-full-stack.onrender.com/',
  },
  {
    id: 2,
    image: IMGCA,
    title: 'ChatApp',
    github: 'https://github.com/SourabHere/Chat-App',
    demo: 'https://github.com/',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Review4U',
    github: 'https://github.com/SourabHere/Review4U',
    demo: 'https://github.com/',
  },
  {
    id: 4,
    image: IMGOH,
    title: 'OpenSourceHub',
    github: 'https://github.com/SourabHere/OpenSourceHub',
    demo: 'https://github.com/',
  },
  
]


const data2 = [
  {
    id: 1,
    image: IMG,
    title: 'Portfolio',
    github: 'https://github.com/SourabHere/Portfolio',
    demo: 'https://github.com/',
  },
  {
    id: 2,
    image: IMGCC,
    title: 'CareerCrate',
    github: 'https://github.com/SourabHere/CareerCrate',
    demo: 'https://careercrate.netlify.app/',
  },
  {
    id: 3,
    image: IMGW,
    title: 'Weather App',
    github: 'https://github.com/SourabHere/Weather-App',
    demo: 'https://github.com/',
  }
]

const data3 = [
  {
    id: 1,
    image: IMGPA,
    title: 'Price-Assist',
    github: 'https://github.com/beastrun12j/Price-Assist',
    demo: 'https://github.com/',
  },
  {
    id: 2,
    image: IMGP,
    title: 'Product-API',
    github: 'https://github.com/SourabHere/Rest-Api-Django',
    demo: 'https://github.com/',
  },
  {
    id: 3,
    image: IMGAI,
    title: 'AI-Operations',
    github: 'https://github.com/SourabHere/AI-website',
    demo: 'https://github.com/',
  }
]

const data4 = [
  {
    id: 1,
    image: IMGIP,
    title: 'Image Processing App',
    github: 'https://github.com/SourabHere/Image-Processing-App',
    demo: 'https://github.com/',
  },
  {
    id: 2,
    image: IMGFM,
    title: 'Face-Mask Detector',
    github: 'https://github.com/SourabHere/Face_mask_detection',
    demo: 'https://github.com/',
  },
  {
    id: 3,
    image: IMGFD,
    title: 'Fire Detector',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 4,
    image: IMGED,
    title: 'Emotion Detector',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  },
  {
    id: 5,
    image: IMGR,
    title: 'Australian Rain EDA',
    github: 'https://github.com/SourabHere/Australian-Rain-EDA',
    demo: 'https://github.com/',
  },
  {
    id: 6,
    image: IMGAS,
    title: 'AirSwipe',
    github: 'https://github.com/',
    demo: 'https://github.com/',
  }
]


const Portfolio = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} centered variant="halfWidth" textColor="inherit" aria-label="basic tabs example">
          <Tab label="Full Stack" {...a11yProps(0)}  />
          <Tab label="Frontend" {...a11yProps(1) }  />
          <Tab label="Backend" {...a11yProps(3) }  />
          <Tab label="AI/ML" {...a11yProps(4)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className="container portfolio__container">
          {
            data.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">

                      <img src={image} alt={title}/>

                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                      {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
                
              )
            })
          }
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="container portfolio__container">
          {
            data2.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">

                      <img src={image} alt={title} />

                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                      {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
              )
            })
          }
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="container portfolio__container">
          {
            data3.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">

                      <img src={image} alt={title} />

                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                      {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
              )
            })
          }
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="container portfolio__container">
          {
            data4.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">

                      <img src={image} alt={title} />

                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn btn-primary' target='_blank'>Github</a>
                      {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                    </div>
                </article>
              )
            })
          }
      </div>
      </TabPanel>
    </Box>

      {/* <div className="container portfolio__container">
          {
            data.map(({id,image,title,github,demo}) =>{
              return(
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">

                      <img src={image} alt={title} />

                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
              )
            })
          }
      </div> */}

    </section>
  )
}

export default Portfolio