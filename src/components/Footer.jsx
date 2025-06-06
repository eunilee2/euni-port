export const Footer = () => {
  return (
    <footer className="py-12 relative border-t border-border mt-12 pt-8 flex text-center flex-wrap justify-between items-center ml-5">
      {/*Copyright */}
      <p>&copy; {new Date().getFullYear()} eunicelee.net</p>

      {/* Resume Link */}
      <p>
        <a
          href="../../public/Eunice Lee Folio.pdf"
          download="Eunice Lee Folio.pdf"
          className="text-primary hover:text-primary/80 transition-colors duration-300"
        >
          resume
        </a>
      </p>

      {/* Social Links */}
      <div className= "justify-between flex md:flex-row">
        <p>
          <a
            href="https://medium.com/@eunicelee12814"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary "
          >
            medium↗
          </a>
        </p>

        <p>
          <a
            href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary "
          >
            spotify↗
          </a>
        </p>

        <p>
          <a
            href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary "
          >
            ;D↗
          </a>
        </p>
      </div>

    </footer>
  );
};