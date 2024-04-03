import fs from 'node:fs';
import path from 'node:path';
import { ReactElement } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import matter from 'gray-matter';
import { clsx } from "clsx"


type Blog = {
    title: string;
    date: string;
    description: string;
    route: string;
};


function BlogsTeaser(props: Blog) {
    return (
        <div className={clsx(" mb-5 text-current no-underline flex border-[1px]", "hover:!border-primary hover:shadow-2xl hover:shadow-primary/10 hover:relative group", "relative after:content-['_↗'] after:font-sans after:absolute after:right-4 after:top-4",)}>
            <div>
                <Link href={props.route}>
                    <div className='p-4'>
                        <h2 className='text-lg font-bold'>{props.title}</h2>
                        <p className='text-sm'>{props.description}</p>
                    </div>
                </Link>
                <div className='p-4'>
                    <time dateTime={props.date} className='text-xs text-neutral-600 dark:text-neutral-400'>
                        {format(new Date(props.date), 'EEEE, LLL do y')}
                    </time>
                </div>
            </div>
        </div >
    );
}

export const BlogsUpdates = (props: { blogs: Blog[] }): ReactElement => {
    return (
        <>
            <div className='w-full mt-[50px] mb-[50px] text-center'>
                <h1 className="max-w-5xl text-center text-xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                    Blogs
                </h1>
                <p className="max-w-5xl text-center text-base font-bold leading-none tracking-tighter text-neutral-600 md:text-lg lg:text-lg lg:max-w-7xl">
                    I write about web development, programming, and software engineering.
                </p>
            </div>
            <ol className="relative px-4 md:px-6">
                {props.blogs.map(item => (
                    <BlogsTeaser key={item.route} {...item} />
                ))}
            </ol>
        </>
    );
};

export const getStaticProps: GetStaticProps<{ ssg: { blogs: Blog[] } }> = async () => {
    const blogsDirectory = path.join(process.cwd(), 'pages', 'blog');
    const filenames = fs.readdirSync(blogsDirectory);
    const blogs: Blog[] = [];

    for (const filename of filenames) {
        if (filename.endsWith('.json') || filename.endsWith('index.mdx') || filename.endsWith('.ts')) {
            continue;
        }

        const { data } = matter(
            fs.readFileSync(path.join(blogsDirectory, filename), 'utf8'),
            {},
        );

        if (data.title && data.description && data.date) {
            blogs.push({
                date: data.date.toISOString(),
                title: data.title,
                description: data.description,
                route: `/blog/${filename.replace(/\.mdx$/, '')}`,
            });
        }
    }

    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        props: {
            ssg: { blogs },
        },
    };
};