/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Fast and efficient security system with almost no time lag during threat detection and alert.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Free Installation',
    title: 'Free Installation',
    text:
      'We provide free of cost installation and will guide you through the maintenance steps.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Premium Product',
    title: 'Premium Product',
    text:
      'The quality of the products used in our system will be top-notch.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      '24X7 customer support available to solve all your technical and non-technical queries.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader 
        slogan="What's the function"
        title="A look into the services provided by us"
       />

       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
             key={item.id}
             src={item.imgSrc}
             alt={item.altText}
             title={item.title}
             text={item.text}
            />
          ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
