import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseImage, chooseText } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { makeStyles } from '@material-ui/core';

interface MemeFormProps {
    id?: string;
    data?: {}
};

interface MemeState {
    image_source: string;
    meme_text: string;
};

const useStyles = makeStyles({
    img: {
        width: '100px',
        height: 'auto',
    },
    imgContainer: {
        display: 'block',
    }
})

export const MemeForm = (props:MemeFormProps) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const store = useStore();
    const image_source = useSelector<MemeState>(state => state.image_source);
    const {register, handleSubmit} = useForm({ });

    const onSubmit = (data:any, event:any) => {
        // console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            // console.log(`Updated: ${data} ${props.id}`);
            console.log(`image source: ${data.image_source}`);
            console.log(`meme text: ${data.meme_text}`);
            console.log(`id: ${props.id}`);
            setTimeout( () => {window.location.reload()}, 10000);
            event.target.reset();
        } else {
            dispatch(chooseImage(data.image_source));
            console.log(data.image_source)
            dispatch(chooseText(data.meme_text));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 10000);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.imgContainer}>
                <label htmlFor='imgs'>Select Meme Image</label>
                <div>
                    <label htmlFor="image_source"><img src='memes/fish-dead-to-me.jpg' className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="fish-dead-to-me.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/krabs-summon.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="krabs-summon.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/patrick-evil.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="patrick-evil.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/patrick-look-in-mouth.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="patrick-look-in-mouth.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/spongebob-angry.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="spongebob-angry.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/spongebob-mocking.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="spongebob-mocking.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/spongebob-normal.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="spongebob-normal.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/spongebob-ripped-pants.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="spongebob-ripped-pants.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/spongebob-tired.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="spongebob-tired.jpg"/>
                </div>
                <div>
                    <label htmlFor="image_source"><img src='memes/squidward-spongebob-look.jpg'  className={classes.img}/></label>
                    <input {...register('image_source')} placeholder="image_source" type="radio" value="squidward-spongebob-look.jpg"/>
                </div>
            </div>
            <div>
                <label htmlFor="meme_text">Enter Meme Text</label>
                <Input {...register('meme_text')} placeholder="meme text"/>
            </div>
            <Button type="submit">Create</Button>
        </form>
    </div>
  )
}
