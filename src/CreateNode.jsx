import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNode=(props)=>{
const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({
        title:'',
        content:''
    })

    function inputEvent(event) {
        let {name,value}=event.target;
        setNote((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        })
    }
    function expandIt(){
setExpand(true)
    }
    function backToNormal (){
        setExpand(false)
    }

return(<>
    <div className='main_note' style={{height:'125px', width:'30%'}}>
        <form>
      {  expand ? (
            <input
             style={{width:'90%'}} 
            type='text' 
            placeholder='Title' 
            autoComplete='off'
            name='title'
            onChange={inputEvent}
            value={note.title} />
          
            ) : null }
            <textarea style={{width:'90%'}} 
            rows='' column=''
             placeholder='write a note...' 
             name='content'
             onChange={inputEvent}
             value={note.content}
             onClick={expandIt}
             onDoubleClick={backToNormal} >

             </textarea>
           <br />
          { expand ?
            <Button className='button'
            onClick={addEvent}
             variant="contained" 
             style={{backgroundColor:'white',borderRadius:'50%'}}>
        <AddIcon className='buttonIcon'/>
      </Button> : null}
        </form>
    </div>
</>)
}
export default CreateNode;