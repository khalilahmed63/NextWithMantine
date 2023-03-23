import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderAction } from '../components/VariantA/Layouts/NavHeader';
// import HeaderAction from '../components/VariantA/Layouts/NavHeader';

export default function HomePage() {
  return (
    <>
    <HeaderAction />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
