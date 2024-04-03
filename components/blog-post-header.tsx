import type { ReactElement } from 'react';
import { format } from 'date-fns';

const authors = {
    'jason': {
        name: 'Jason Lengstorf',
        link: 'https://lengstorf.com',
        image: '/images/authors/jason.jpg',
    },
    'lekoarts': {
        name: 'Lennart Jörgens',
        link: 'https://www.lekoarts.de',
        image: '/images/authors/lekoarts.jpg',
    },
    'lee': {
        name: 'Lee Robinson',
        link: 'https://leerob.io',
        image: '/images/authors/lee.jpg',
    },
};

type Meta = {
    authors: string[];
    date: string;
    title: string;
    description: string;
};

const Authors = ({ meta }: { meta: Meta }): ReactElement => {
    const date = meta.date ? new Date(meta.date) : new Date();

    if (meta.authors.length === 1) {
        return (
            <div>
                <div className="ml-2.5 flex flex-col">
                    <time
                        dateTime={date.toISOString()}
                        title={`Posted ${format(date, 'EEEE, LLL do y')}`}
                        className="text-xs text-[#777]"
                    >
                        {format(date, 'EEEE, LLL do y')}
                    </time>
                </div>
            </div>
        );
    }
    return (
        <>
            <time
                dateTime={date.toISOString()}
                title={`Posted ${format(date, 'EEEE, LLL do y')}`}
                className="mt-5 block text-center text-xs text-[#777]"
            >
                {format(date, 'EEEE, LLL do y')}
            </time>
        </>
    );
};

export const BlogPostHeader = ({ meta }: { meta: Meta }): ReactElement => {
    return (
        <>
            <h1>{meta.title}</h1>
            <Authors meta={meta} />
        </>
    );
};