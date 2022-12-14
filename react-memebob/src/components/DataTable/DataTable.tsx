import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { MemeForm } from '../MemeForm';
import { makeStyles } from '@material-ui/core';


// const columns: GridColDef[] = [
//     {field: 'id', headerName: 'ID', width: 90, hide: true },
//     {field: 'image_source', headerName: 'Image Source', flex: 1, renderCell: (params) =>{
//         let imageUrlBase = 'memes/';
//         let image = params.row.image_source;
//         let imageUrl = imageUrlBase + image;
//         return(
//             <div>
//                 <img src={imageUrl} alt='Testing' height="200px" width="200px"/>
//             </div>
//         )
//     } },
//     {field: 'meme_text', headerName: 'Meme Text', flex: 1, hide: true},
// ];

interface gridData {
    data: {
        id?: string;
    }
}

const useStyles = makeStyles({
    memeContainer: {
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    meme: {
        width: 'fit-content',
        height: 'fit-content',
        position: 'relative',
        textAlign: 'center',
        color: 'white'
    },
    img: {
        width: '300px',
        height: 'auto'
    },
    memeText: {
        position: 'absolute',
        width: '80%',
        textTransform: 'uppercase',
        textShadow: '1px 1px black',
        fontFamily: 'Impact, fantasy',
        letterSpacing: '2px',
        textAlign: 'center',
        bottom: '5px',
        left: '25px',
        // textJustify: 'inter-word',
    }
})


export const DataTable = () => {

    const classes = useStyles();

    let { memeData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>({data:{}});
    const [ selectionModel, setSelectionModel ] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true);
    };

    let handleClose = () => {
        setOpen(false);
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => {window.location.reload(); }, 1000);
    }

    const loopThrough = () => {
        let result = "";

        for (var image of memeData) {
            let urlBase = 'memes/';
            let url = urlBase + image.image_source;
            // console.log(urlBase + image.image_source);
            result += `<img src=${url} />`;
        }

        return result;
    }

    const updateSelectionModel = (id:any) => {
        console.log(`selection id: ${id}`)
        setSelectionModel(id);
    }

  return (
    <div style={{ height: 400, width: '100%'}}>
        <h2>My Memes</h2>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <div className={classes.memeContainer}>
        {
            memeData.map((image, index) => {
                let urlBase = 'memes/';
                let url = urlBase + image.image_source;
                let text = image.meme_text;
                let id = image.id;

                return (
                    <div className={classes.meme}>
                        <img src={url} className={classes.img}/>
                        <h2 className={classes.memeText}>{text}</h2>
                        <input type="radio" id={id}  value={id} name="meme" onChange={() => updateSelectionModel(id)}/>
                    </div>
                );
            })
        }
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id='form-dialog-title'>Update Meme {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Meme</DialogContentText>
                    <MemeForm id={selectionModel!} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
