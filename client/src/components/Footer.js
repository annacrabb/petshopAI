import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
          <Link to='/' className="nav-link text-body-secondary">Home</Link>
          </li>
          <li className="nav-item">
          <Link to='/about' className="nav-link text-body-secondary">About</Link>

          </li>
          <li className="nav-item">
          <Link to='/conservation' className="nav-link text-body-secondary">Conservation</Link>

          </li>
          <li className="nav-item">
          <Link to='/contact' className="nav-link text-body-secondary">Contact</Link>

          </li>
          <li className="nav-item">
          <Link to='/sponsor' className="nav-link text-body-secondary">Sponsor</Link>

          </li>
          <li className="nav-item">
          <Link to='/acknowledgements' className="nav-link text-body-secondary">Acknowledgements</Link>

          </li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024 Tide Together, Inc</p>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>

    </div>
  );
}

export default Footer;
