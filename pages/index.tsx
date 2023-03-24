import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavigationHeader from '../components/VariantA/Layouts/Header';

export default function HomePage() {
  return (
    <>
    <NavigationHeader />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
