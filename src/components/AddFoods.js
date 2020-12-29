import React,{useState} from 'react'
import firebase from '../firebase';
import { Form,FormControl,FormGroup,FormFile,Button} from 'react-bootstrap'
import shortid from 'shortid';
const db=firebase.firestore()

const AddFoods = () => {
    const [name, setName]=useState(null);
    const [description, setdescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [pic, setPic] = useState(null)
    const [type, setType] = useState(null)
    const [rating] = useState(null)
    

    const fileChange=async (e)=>{
        const file=e.target.files[0]
        const storageRef=firebase.storage().ref()
        const fileRef= storageRef.child(file.name)
        await fileRef.put(file)
        setPic(await fileRef.getDownloadURL([]))
    }

    

    const dataSubmit=(e)=>{
        e.preventDefault()
        if(!name || !description || !price  || !pic){
          return
        }
         const _id=shortid.generate()
        db.collection(`${type}`).add({
             _id,name,description,price,pic,type,rating
        }).then(()=>{
          alert("Data stored")
        })
    }
     
    return (
        <>
        <div className='container m-5' style={{width:'50%', position:'relative', left:'25%'}}>
        <Form onSubmit={dataSubmit}>
        <FormGroup>
        <FormControl name="name"  type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br />
        <FormControl name="type"  type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}/><br />
        <FormControl  name="description" as="textarea" rows={3} placeholder="Description" value={description} onChange={(e)=>setdescription(e.target.value)} /><br />
        <FormControl name="price"  type="text" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/> <br/>
        <FormFile id="exampleFormControlFile1" onChange={fileChange}/>
        </FormGroup>

        <Form.Group>
            <Button type="submit">Submit</Button>
        </Form.Group>
        </Form>
        </div>
        </>
    )
}

export default AddFoods
