import Footer from '@/components/custom/Footer'
import NavBar from '@/components/custom/NavBar'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>


  );
}
