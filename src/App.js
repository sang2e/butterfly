import './App.css';
import { ScrollControls, Scroll, Float, Sparkles } from '@react-three/drei';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Butterfly } from './models/Butterfly'; 
import { Butterfly } from './models/Butterfly'; 
import { Butterfl } from './models/Butterfl'; 
import { Butterfly1 } from './models/Butterfly1'; 
import { AniButterfly } from './models/Animated_butterfly'; 
import { Pins } from './models/Pins';
import { Phoenix } from './models/Phoenix';
import { Yellow } from './models/Yellow';
import { Bloom, EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing';

function App() {
  return (
    <>
      <color attach='background' args={['#000000']} />
      <ambientLight intensity={1.5} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={1000} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} damping={0.25}>
        
        <Scroll>

          {/* top */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly key={'butterfly_1'} scale={1} position={[2,-8,0]} rotation={[0, Math.PI, 0]} />
            <Butterfly key={'butterfly_2'} scale={1} position={[-2,-6,0]} rotation={[0, Math.PI, 0]} />
            <Butterfly key={'butterfly_3'} scale={2} position={[0,-1,0]} rotation={[0, Math.PI, 0]} />

            {/* <Butterfly1 key={'butterfly1_1'} scale={1} position={[2,-8,0]} rotation={[0, Math.PI, 0]} />
            <Butterfly1 key={'butterfly1_2'} scale={1} position={[-2,-6,0]} rotation={[0, Math.PI, 0]} />
            <Butterfly1 key={'butterfly1_3'} scale={2} position={[0,-1,0]} rotation={[0, Math.PI, 0]} /> */}

          {/* <Butterfly rotation-x={Math.PI * 0.05} scale={0.005} position={[0,-2.5,0]}/>
          <Butterfly scale={0.005} position={[-10,-3,-6]}/>
          <Butterfly scale={0.005} position={[10,-4,-10]}/>    */}
            
            {/* <Butterfl key={1} scale={2} position={[0,-1,0]} rotation={[0, Math.PI, 0]} />
            <Butterfl key={2} scale={1} position={[2,-8,0]} rotation={[0, Math.PI, 0]} />
            <Butterfl key={3} scale={1} position={[-2,-6,0]} rotation={[0, Math.PI, 0]} /> */}

            {/* <Phoenix key={1} scale={0.005} position={[0,0,0]} />
            <Phoenix key={2} scale={0.005} position={[0,-2,0]} />
            <Phoenix key={3} scale={0.005} position={[0,-6,0]} /> */}
            
            {/* <AniButterfly key={2} scale={1} position={[2,-8,0]} rotation={[0, Math.PI, 0]} />
            <AniButterfly key={3} scale={1} position={[-2,-6,0]} rotation={[0, Math.PI, 0]} />
            <AniButterfly key={1} scale={2} position={[0,-1,0]} rotation={[0, Math.PI, 0]} /> */}

            <Pins position={[0,-1,0]} />
            <Pins position={[-2,-2,0]} />
            <Pins position={[0,-3,0]} />
            <Pins position={[0,-5,0]} />
            <Pins position={[0,-8,0]} />

            {/* <Yellow key={1} scale={1} position={[0,0,0]} />
            <Yellow key={2} scale={1} position={[0,-4,0]} />
            <Yellow key={3} scale={1} position={[0,-6 ,0]} /> */}
          </Float>
          {/* top */}

          {/* middle */}
          {/* <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
          <Butterfly scale={1} position={[-1,-12.5,0]} rotation={[0, Math.PI, 0]} />
          <Butterfly scale={1} position={[1,-4,-0]} rotation={[0, Math.PI, 0]} />   
          </Float>         */}
          {/* middle */}

          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={'#FFD2BE'} opacity={10} scale={[20,100,20]} ></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={'#FFF'} opacity={2} scale={[30,100,10]} ></Sparkles>
        </Scroll>

      <Scroll html style={{width: '100%'}}>
         <Container style={{height: '100px', position: 'relative'}} >
            <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', padding: '0px 30px 0px'}}>
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Life can be a struggle</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 3px 0px', top: '100vh' }} >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Sometimes you can feel</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 3px 0px', top: '200vh' }} >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Lost</h1>
                  <h1 style={{ marginBottom: '0px' }}>Overwhelmed</h1>
                  <h1 style={{ marginBottom: '0px' }}>Empty inside</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 3px 0px', top: '300vh' }} >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>Drifting through life<br />Width no guidance</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 3px 0px', top: '400vh' }} >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: '0px' }}>But there is hope<br />and people who can help</h1>
                </div>
              </Col>
            </Row>
            <Row className='text-center align-items-center justify-content-center' style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 3px 0px', top: '500vh' }} >
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>It's time to get<br/> the support you need</h1>
                    <h2 style={{marginBottom: '30px', marginTop: '-20px'}}>To get your life back</h2>
                    <Button variant="outline-light" size="lg">Get help now</Button>{' '}
                  </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App;
