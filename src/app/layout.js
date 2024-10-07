import Footer from "../../Comps/Footer";
import Navbar from "../../Comps/Navbar";
import styles from '../../styles/Layout.module.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.layout_class}>
      <body className={styles.layout_class}>
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}
