import React from 'react'

function Footer() {
  return (
    <div>
  <footer className="text-center text-lg-start text-muted">
    <section className="footer">
      <div className="container text-center text-md-start pt-1">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold" style={{ fontFamily: 'Audiowide' }}>
              <i className="fa fa-robot me-3"></i>NandanaSasidharan
            </h6>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 ms-auto">
            <p><a href="/" className="text-reset">Home</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 ms-auto">
            <p><a href="#!" className="text-reset">About</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 ms-auto">
            <p><a href="#!" className="text-reset">Skills</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 ms-auto">
            <p><a href="#!" className="text-reset">Contact</a></p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Nandana. All rights reserved</a>
    </div>
  </footer>
</div>

  )
}

export default Footer