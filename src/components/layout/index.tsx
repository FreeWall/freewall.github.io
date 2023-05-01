import Footer from './footer';
import Header from './header';

interface LayoutProps extends React.PropsWithChildren {
  test?: boolean;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="h-full pt-[120px]">{props.children}</main>
      <Footer />
    </div>
  );
}
