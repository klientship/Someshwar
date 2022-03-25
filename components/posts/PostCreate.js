import { Card, Grid, TextInput, Button, SimpleGrid } from "@mantine/core";
import {useState, useEffect} from "react";
import dynamic from "next/dynamic";

import styles from "../../styles/Form.module.css";
import ImageUploader from "../UI/ImageUploader";

const PostCreate = (props) => {
    const [bhk, setBhk] = useState("");
    const [sqfeet, setSqfeet] = useState("");
    const [landSize, setLandSize] = useState("");
    const [price, setPrice] = useState("");

    const [imageOneUrl, setImageOneUrl]=useState(null);
    const [imageTwoUrl, setImageTwoUrl]=useState(null);
    const [imageThreeUrl, setImageThreeUrl]=useState(null);
    const [imageFourUrl, setImageFourUrl]=useState(null);


    const existingPost = props.existingPost;

    useEffect(()=>{
        if(existingPost){
            console.log("Existing post exists")
            setBhk(existingPost.bhk);
            setSqfeet(existingPost.sqfeet);
            setLandSize(existingPost.landSize);
            setPrice(existingPost.price);
        }
    },[existingPost]);


    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if(bhk && sqfeet && landSize && price){
            let id = null;
            if(existingPost){
                id = existingPost.id;
            }
            props.onSubmitHandler(id, bhk, sqfeet, landSize, price, imageOneUrl, imageTwoUrl, imageThreeUrl, imageFourUrl);
        }else{
            // Todo: Add validation steps here
            console.log("Validation failure");
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>

                    <Card shadow="sm" padding="xl" style={{overflow:"visible", zIndex:1000, width:"70%", margin:"auto"}}>
                    <TextInput 
                            label="BHK:" 
                            value={bhk || ""}
                            onChange={(event)=>setBhk(event.currentTarget.value)}
                        />
                        <div className={styles['card-item']}>
                            <TextInput 
                                label="Sq Feet:" 
                                value={sqfeet || ""}
                                onChange={(event)=>setSqfeet(event.currentTarget.value)}
                            />
                        </div>
                        <div className={styles['card-item']}>
                            <TextInput 
                                label="Land Size:" 
                                value={landSize || ""}
                                onChange={(event)=>setLandSize(event.currentTarget.value)}
                            />
                        </div>
                        <div className={styles['card-item']}>
                            <TextInput 
                                type="number"
                                label="Price:" 
                                value={price || ""}
                                onChange={(event)=>setPrice(event.currentTarget.value)}
                            />
                        </div>
                        <div className={styles['card-item']}>
                            <h3 style={{marginBottom:"10px"}}>Article Images</h3>
                        <SimpleGrid cols={4} spacing="lg">
                            <div>
                                <ImageUploader setUrl={setImageOneUrl} url={imageOneUrl} />
                            </div>
                            <div>
                                <ImageUploader setUrl={setImageTwoUrl} url={imageTwoUrl} />
                            </div>
                            <div>
                                <ImageUploader setUrl={setImageThreeUrl} url={imageThreeUrl} />
                            </div>
                            <div>
                                <ImageUploader setUrl={setImageFourUrl} url={imageFourUrl} />
                            </div>
                        </SimpleGrid>
                         
                        </div>

                        <div className={styles['final-buttons']}>
                            <Button 
                                type="submit" color="teal" uppercase>
                            Save
                            </Button>
                            <Button  color="red" uppercase onClick={props.onDiscardClicked}>
                            Discard
                            </Button>
                        </div>
                    </Card>
                
        </form>
    );
};

export default PostCreate;
