import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div class="container">
            <header className="blog-header lh-1 py-3 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Žygimantas Rimgaila</a>
                </div>
            </header> 
            <div class="nav-scroller py-1 mb-3 border-bottom"> 
                <nav className="nav d-flex justify-content-center py-1">
                    <Link className="p-2 link-secondary" to="/">About</Link>
                    <Link className="p-2 link-secondary" to="/projects">Projects</Link>
                    <Link className="p-2 link-secondary" to="/skills">Skills</Link>
                    <Link className="p-2 link-secondary" to="/contacts">Contacts</Link>
                </nav>
            </div>  
        </div>
       
            
    );
}
 
export default Navbar;