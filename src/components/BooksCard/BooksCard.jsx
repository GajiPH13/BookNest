import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const BookCard = ({book}) => {
    // console.log(photo);
    return (
        <div>
            <Card className='rounded-xl border border-[#cddcfd] shadow transform transition duration-500 hover:scale-105 '>
            <div className='relative w-full aspect-square '>
            <Image 
            src={book?.image_url} 
            alt={book?.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover rounded-xl '
            
            >
            
            </Image>
            <Chip className='absolute top-2 right-2'>{book?.category}</Chip>  
        </div>
        <div>
            <h2 className='font-semibold'>{book?.title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
            <p><FaHeart /></p>
            <p>{book?.likes}</p>

        </div>
        <Separator  orientation='vertical'/>
        <div className='flex gap-2 items-center'>
            <p><BiDownload /></p>
            <p>{book?.downloads}</p>
        </div>
        </div>
        <Link href={`/all-books/${book?.id}`}>
        <Button  variant="outline" className={'w-full border border-[#cddcfd]'}  >
            View Details
            </Button>
            </Link>
        </Card>
        </div>
    );
};

export default BookCard;