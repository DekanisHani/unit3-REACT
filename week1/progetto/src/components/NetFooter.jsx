import * as Icon from 'react-bootstrap-icons';

const NetFooter = () =>
//ICONS FOOTER
    <div className="container">
        <footer className="py-5">
            <div className='text-start my-3 d-flex justify-content-around w-25'>
                <Icon.Facebook className='h2 text-secondary' style={{ width: 20 }} />
                <Icon.Instagram className='h2 text-secondary' style={{ width: 20 }} />
                <Icon.Twitter className='h2 text-secondary' style={{ width: 20 }} />
                <Icon.Youtube className='h2 text-secondary' style={{ width: 20 }} />
            </div>
            <div className="row d-flex justify-content-around">
                
{/* LINKS E BUTTON */}
                <div className="col6 col-md-2 mb-3">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Audio and Subtitles</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Media Center</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Privacy</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Contact Us</a></li>
                        <button type='button' className='btn btn-outline-secondary text-white w-100 h-50 mt-4' >Service Code</button>
                    </ul>
                </div>
{/* COL 2/ LINKS */}
                <div className="col-6 col-md-2 mb-3">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Audio Description</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Investor Relations</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Legal Norices</a></li>
                    </ul>
                </div>
{/* COL 3/ LINKS */}
                <div className="col-6 col-md-2 mb-3">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Help Center</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Jobs</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Cookies Preferences</a></li>
                    </ul>
                </div>
{/* COL 4/ LINKS */}
                <div className="col-6 col-md-2 mb-3">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Gift Cards</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Terms of Use</a></li>
                        <li className="nav-item mb-2"><a href="#a" className="nav-link p-0 text-muted">Corporate Information</a></li>
                    </ul>
                </div>



{/* COPYRIGHT */}
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">

                    <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><svg className="bi" width="24" height="24"></svg></li>
                        <li className="ms-3"><svg className="bi" width="24" height="24"></svg></li>
                        <li className="ms-3"><svg className="bi" width="24" height="24"></svg></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>



export default NetFooter;