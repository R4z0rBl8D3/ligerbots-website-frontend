import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom'; // Correct import for jest-dom
import { test, expect } from 'vitest';
import Component from '../AnnouncementsBlock.svelte';

test('Single Announcement Renders', async () => {
  const props = { posts: { posts: [
    { title: 'This is a test!', publish_on: "2024-09-05", status: "published", type: "announcement", body: "This is a test announcement.", slug: "this-is-a-test" },
  ], error: '' } };
  render(Component, { props });

  const announcementTitle = screen.getByText('This is a test!');
  expect(announcementTitle).toBeInTheDocument();
});

test('Multiple Announcement Renders', async () => {
	const props = { posts: { posts: [
	  { title: 'This is a test!', publish_on: "2024-09-05", status: "published", type: "announcement", body: "This is a test announcement.", slug: "this-is-a-test" },
	  { title: 'Testing in progress', publish_on: "2018-02-11", status: "published", type: "announcement", body: "This is another test announcement.", slug: "testing-in-progress" },
	  { title: 'Vitest test', publish_on: "2022-05-21", status: "published", type: "announcement", body: "plz work", slug: "vitest-test" },
	], error: '' } };
	render(Component, { props });
  
	let element = screen.getByText('This is a test!'); expect(element).toBeInTheDocument();
	element = screen.getByText('2024-09-05'); expect(element).toBeInTheDocument();
	element = screen.getByText('This is a test announcement....'); expect(element).toBeInTheDocument();

	element = screen.getByText('Testing in progress'); expect(element).toBeInTheDocument();
	element = screen.getByText('2018-02-11'); expect(element).toBeInTheDocument();
	element = screen.getByText('This is another test announcement....'); expect(element).toBeInTheDocument();

	element = screen.getByText('Vitest test'); expect(element).toBeInTheDocument();
	element = screen.getByText('2022-05-21'); expect(element).toBeInTheDocument();
	element = screen.getByText('plz work...'); expect(element).toBeInTheDocument();
  });