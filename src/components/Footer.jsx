export const Footer = () => {
  return (
    <footer className="container py-12 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p>
        Made with 🍵 & 💭
      </p>

      {/* Social Links */}
      <div classname= "justify-between flex md:flex-row">
        <p>
          <a
            href="https://medium.com/@eunicelee12814"
            target="_blank"
            rel="noopener noreferrer"
            classname="hover:text-primary "
          >
            medium↗
          </a>
        </p>

        <p>
          <a
            href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
            target="_blank"
            rel="noopener noreferrer"
            classname="hover:text-primary "
          >
            spotify↗
          </a>
        </p>

        <p>
          <a
            href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
            target="_blank"
            rel="noopener noreferrer"
            classname="hover:text-primary "
          >
            ;D↗
          </a>
        </p>
      </div>
      {/*Copyright */}
      <p>
        &copy; {new Date().getFullYear()} eunicelee.net
      </p>
    </footer>
  );
};