import Footer from "../../Comps/Footer";
import Navbar from "../../Comps/Navbar";
import styles from '../../styles/Layout.module.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.layout_class}>
      <head>
      {/* Google Analytics - placed immediately after the head tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KXDFK12TJ3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KXDFK12TJ3');
            `,
          }}
        />
      </head>
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
