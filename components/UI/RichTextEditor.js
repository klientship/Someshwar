import { RichTextEditor } from '@mantine/rte';
import { useEffect, useRef } from 'react';

const BodyEditor = (props) => {
    const editorRef = useRef();
    const intialContent  = props.initialContent;

    useEffect(() => {
        editorRef.current.focus();
    }, [intialContent]);


  return (
     <RichTextEditor
        value={intialContent}
        onChange={props.setEditorContent}
        ref={editorRef}
        controls={[
          ['bold', 'italic', 'underline', 'strike', 'blockquote', 'clean'],
          ['h1', 'h2', 'h3', 'h4'],
          ['unorderedList', 'orderedList'],
          ['alignLeft', 'alignCenter', 'alignRight'],
          ['link', 'video'],
          ['sup', 'sub'],
        ]}
        styles={{
            root:{minHeight:'500px'}
        }}
    />
  )
}

export default BodyEditor