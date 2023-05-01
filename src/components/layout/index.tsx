import Footer from './footer';
import Header from './header';

interface LayoutProps extends React.PropsWithChildren {
  test?: boolean;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="my-auto pt-[120px]">{props.children}</main>
      <Footer />
    </div>
  );
}
