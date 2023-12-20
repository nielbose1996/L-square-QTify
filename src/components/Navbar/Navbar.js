import React from "react";
import Logo from "../Logo/Logo"
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({searchData})
{
  return (
    <nav className={styles.navbar}>
        <a href="/">
           <Logo />
        </a>
            
    
    <Search placeholder={"Search a album of your choice"}  searchData={searchData}></Search>
    <Button>Give Feedback</Button>
    </nav>
  )

}

export default Navbar;