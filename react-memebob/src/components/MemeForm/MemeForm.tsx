import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseImage, chooseText } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface MemeFormProps {
    id?: string;
    data?: {}
};

interface MemeState {
    image_source: string;
    meme_text: string;
};

export const MemeForm = (props:MemeFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const image_source = useSelector<MemeState>(state => state.image_source);
    const {register, handleSubmit} = useForm({ });

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseImage(data.image_source));
            dispatch(chooseText(data.meme_text));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="image_source">Image Source</label>
                <input {...register('image_source')} placeholder="image_source" type="checkbox"/>
            </div>
            <div>
                <label htmlFor="image_source">Meme Text</label>
                <Input {...register('image_source')} placeholder="meme text"/>
            </div>
            <Button type="submit">Create</Button>
        </form>
    </div>
  )
}
