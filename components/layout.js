import Header from "./header/header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <p>Layout</p> 
      {children}
    </>
  );
}

export default Layout;