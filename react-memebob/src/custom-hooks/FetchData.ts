import React, { useState, useEffect} from 'react';
import { server_calls } from '../api';

interface myMemeData {
    id: string;
    image_source: string;
    meme_text: string;
}

export const useGetData = () => {
    const [memeData, setData] = useState<myMemeData[]>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        // console.log(result);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, []);
    
  return { memeData, getData:handleDataFetch }
}


// (2) [{…}, {…}]
// 0
// : 
// {id: '1YpLwzEQxulTXFr6-C79wu61UMxQAzF3tfzmlQu71uI', image_source: 'spongebob-ripped-pants.jpg', meme_text: 'a meme generator'}
// 1
// : 
// {id: '3J6OWtoFyYE4SL-N0CdrfxuwaYj21gjoHTZ2s9luuTI', image_source: 'spongebob-angry.jpg', meme_text: 'You will turn in one website for multiple assignments and you are going to like it'}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)