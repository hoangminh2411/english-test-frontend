import { Header } from '@components/layouts/Header';
import { HomeComponent } from '@components/pages/home';
import { AuthProvider } from '@components/providers/AuthProvider';

export default function Home() {
  return (
    <>
      <AuthProvider>
        <Header />
        <HomeComponent />
      </AuthProvider>
    </>
  );
}
