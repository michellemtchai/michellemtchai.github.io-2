import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavBarItem from './NavBarItem';
import * as styles from './NavBar.module.scss';

const NavBar = ({ selected, minimized }) => {
    const { allContentfulCategory } = useStaticQuery(
        graphql`
            query {
                allContentfulCategory(
                    sort: { fields: navBarIndex, order: ASC }
                ) {
                    nodes {
                        contentful_id
                        name
                        slug
                        icon
                    }
                }
            }
        `
    );
    const navState = minimized
        ? `${styles.navbar} ${styles.minimized}`
        : styles.navbar;
    return (
        <nav className={navState}>
            <ul>
                <NavBarItem
                    selected={!selected}
                    to="/"
                    name="Home"
                    icon={['fas', 'home']}
                />
                {allContentfulCategory &&
                    allContentfulCategory.nodes.map((category) => (
                        <NavBarItem
                            selected={selected === category.slug}
                            key={category.contentful_id}
                            to={`/${category.slug}`}
                            name={category.name}
                            icon={category.icon.split(/\s+/)}
                        />
                    ))}
            </ul>
        </nav>
    );
};

export default NavBar;
