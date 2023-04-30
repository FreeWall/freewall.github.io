import Footer from './footer';
import Header from './header';

interface LayoutProps extends React.PropsWithChildren {
  test?: boolean;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="pt-[120px]">{props.children}</main>
      <Footer />
    </div>
  );
}
