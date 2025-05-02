import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Parallax pages={3} className="relative">

        {/* VIDEO BACKGROUND */}
        <ParallaxLayer offset={0} factor={1} speed={0.1}>
          <video
            src="./videoChude.mp4"
            autoPlay
            muted
            loop
            className="w-full h-screen object-contain scale-115"
          />
        </ParallaxLayer>

       

       

      </Parallax>
    </div>
  );
}
