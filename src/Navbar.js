const Navbar = ({ navlink, generate }) => {
    return (
        <div className="navbar">
            <button onClick={generate}>{ navlink }</button>
        </div>
    );
}
 
export default Navbar;