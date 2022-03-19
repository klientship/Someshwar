import { Card, Grid, TextInput, Button, useMantineColorScheme } from "@mantine/core";
import {useState, useEffect} from "react";
import dynamic from "next/dynamic";
const BodyEditor = dynamic(()=> import('../UI/RichTextEditor'), {ssr:false})
import { DatePicker } from "@mantine/dates";
import styles from "../../styles/Form.module.css";
import ImageUploader from "../UI/ImageUploader";

const PostCreate = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString('en-US'));
    const [body, setBody]= useState('');
    const [imageUrl, setImageUrl]=useState(null);


    const existingPost = props.existingPost;

    useEffect(()=>{
        if(existingPost){
            console.log("Existing post exists")
            setTitle(existingPost.title);
            setDate(existingPost.date);
            setImageUrl(existingPost.imageUrl);
            setBody(existingPost.body);
        }
    },[existingPost]);


    const onSubmitHandler =(event)=>{
        event.preventDefault();
        if(title && date && body){
            console.log({title, date, body, imageUrl});
            let id = null;
            if(existingPost){
                id = existingPost.id;
            }
            props.onSubmitHandler(id, title, date, body, imageUrl);
        }else{
            // Todo: Add validation steps here
            console.log("Validation failure");
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <Grid>
                <Grid.Col span={8}>
                    <Card shadow="sm" padding="xl" style={{overflow:"visible", zIndex:1000}}>
                        <BodyEditor setEditorContent={setBody} initialContent={body} />
                    </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                <Card
                    style={{ height: "100%" }}
                    shadow="sm"
                    padding="xl"
                    >
                        <TextInput 
                            placeholder="The Title For The Article" 
                            label="Topic:" 
                            value={title || ""}
                            onChange={(event)=>setTitle(event.currentTarget.value)}
                        />
                        <DatePicker
                            className={styles['card-item']}
                            label="Date:"
                            defaultValue={new Date()}
                            placeholder="5th of September"
                            value={date}
                            onChange={(value)=>setDate(value)}
                        />
                        <div className={styles['card-item']}>
                            <label>Article Image:</label>
                            <ImageUploader setUrl={setImageUrl} url={imageUrl} />
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
                </Grid.Col>
            </Grid>
        </form>
    );
};

export default PostCreate;
