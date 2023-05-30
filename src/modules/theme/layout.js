// import custom components
import Header from "./header";
export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    marginTop: '30px',
    padding: '0 20px',
  };
  return (
    <>
        <Header />
        <main style={styles}>
            <section>{children}</section>
        </main>
    </>
  );
}
