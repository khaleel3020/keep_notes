import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note=(props)=>{

    function deleteItem(){
        props.deleteItem(props.id);
    }

return(<>
  <div className='noteDiv'>
  <div className='note' style={{height:'40%', width:'300px', }}>

<h2>{props.title}</h2>
<br />
<p>{props.content}</p>
     <br /> <Button className='dbutton' 
     variant="contained" 
     style={{backgroundColor:'white',borderRadius:'50%'}}
     onClick={deleteItem}
     >

    <DeleteOutlineIcon className='dbuttonIcon'/>
  </Button>
   
</div>
  </div>
</>)
}
export default Note;