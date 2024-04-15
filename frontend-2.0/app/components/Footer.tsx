import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded flex sm:flex-row flex-col" style={{marginTop: "auto"}}>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
                <aside className='ml-auto'>
                    <p>Copyright © 2024 - All rights reserved by InfoFusion</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer