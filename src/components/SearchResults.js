import React from 'react';
import Layout from './Layout';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Projects from './Projects';
import NotFound from '../pages/404';
import { useStaticQuery, graphql } from 'gatsby';
import { ITEMS_PER_PAGE } from '../constants';

const SearchResults = ({ category, query, page }) => {
	const { allContentfulProject } = useStaticQuery(
		graphql`
			query {
				allContentfulProject {
					nodes {
						contentful_id
						slug
						name
						summary
						demoUrl
						previewImage {
							gatsbyImageData(
								width: 320
								placeholder: BLURRED
								formats: [AUTO, WEBP]
							)
						}
						technologies {
							contentful_id
							name
							icon {
								gatsbyImageData(
									width: 20
									placeholder: BLURRED
									formats: [AUTO, WEBP]
								)
							}
						}
						category {
							slug
						}
					}
				}
			}
		`
	);
	const filteredProjects = () => {
		const projects = allContentfulProject.nodes;
		if (category === 'all') {
			return projects.filter((project) => includesQueryTerm(project));
		} else {
			return allContentfulProject.nodes.filter((project) => {
				const categories = project.category.map((i) => i.slug);
				return (
					categories.includes(category) && includesQueryTerm(project)
				);
			});
		}
	};
	const includesQueryTerm = (project) => {
		const terms = query.split(/\s+/g);
		const regex = new RegExp(`(${terms.join('|')})`, 'gi');
		const nameMatch = project.name.match(regex);
		const summaryMatch = project.summary.match(regex);
		const techMatch = listIncludesQueryTerm(project.technologies, regex);
		return nameMatch || summaryMatch || techMatch;
	};
	const listIncludesQueryTerm = (list, regex) => {
		for (let i = 0; i < list.length; i++) {
			if (list[i].name.match(regex)) {
				return true;
			}
		}
		return false;
	};
	const results = filteredProjects();
	const availablePages = Math.ceil(results.length / ITEMS_PER_PAGE);
	const currPageItems = () => {
		const startIndex = (page - 1) * ITEMS_PER_PAGE;
		return results.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	};
	const items = currPageItems();
	const Paginate = () => (
		<Pagination
			page={page}
			totalPages={availablePages}
			baseUrl={`/search/${category}/${query}`}
		/>
	);
	return page > 0 && page <= availablePages ? (
		<Layout title={`Search for "${query}" - Page ${page}`}>
			<SearchBar range={category} />
			<p>
				{items.length} of {results.length} Items for "{query}"
			</p>
			<Paginate />
			<Projects list={items} />
			<Paginate />
		</Layout>
	) : (
		<NotFound />
	);
};

export default SearchResults;
