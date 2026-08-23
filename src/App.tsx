import { FlashProvider } from './components/effects/flash-context';
import { FlashOverlay } from './components/effects/FlashOverlay';
import { NoiseOverlay } from './components/effects/NoiseOverlay';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Marquee } from './components/ui/Marquee';
import { MARQUEE_WORDS } from './config/site';
import { Mechanism } from './sections/Mechanism';
import { Collection } from './sections/Collection';
import { Colorways } from './sections/Colorways';
import { Craft } from './sections/Craft';
import { FieldReports } from './sections/FieldReports';
import { Waitlist } from './sections/Waitlist';

export default function App() {
  return (
    <FlashProvider>
      <a href="#mechanism" className="skip-link">
        Skip to content
      </a>
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Marquee words={MARQUEE_WORDS} />
        <Mechanism />
        <Collection />
        <Colorways />
        <Craft />
        <FieldReports />
        <Waitlist />
      </main>
      <Footer />
      <FlashOverlay />
    </FlashProvider>
  );
}
