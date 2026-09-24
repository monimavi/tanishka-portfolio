import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Signals from '@/components/Signals';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedPage from '@/components/AnimatedPage';

export default function Home() {
  return <><AnimatedPage/><Navbar/><main><Hero/><Expertise/><Signals/><Projects/><About/><Skills/><Process/><Contact/></main><Footer/></>;
}
